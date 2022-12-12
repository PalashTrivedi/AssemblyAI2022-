import hashlib
import datetime
from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from pymongo import MongoClient
import os
import hashlib
import datetime
from flask import Flask, request
from flask_restful import Resource, Api, abort, reqparse
from google.cloud import firestore
import firebase_admin
from firebase_admin import credentials, firestore, initialize_app
from flask import Flask, request, jsonify

app = Flask(__name__)
jwt = JWTManager(app)
app.config['JWT_SECRET_KEY'] = 'Your_Secret_Key'
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(days=1)

# Initialize Firestore DB
cred = credentials.Certificate('C:\\StreamlitVideo\\key.json')
default_app = firebase_admin.initialize_app(cred)
db = firestore.client()
collection_ref = db.collection('Summarized data').document("text")

@app.route("/api/v1/users", methods=["POST"])
def register():
	new_user = request.get_json() # store the json body request
	new_user["password"] = hashlib.sha256(new_user["password"].encode("utf-8")).hexdigest() # encrpt password
	doc = collection_ref.find_one({"username": new_user["username"]}) # check if user exist
	if not doc:
		collection_ref.insert_one(new_user)
		return jsonify({'msg': 'User created successfully'})
	else:
		return jsonify({'msg': 'Username already exists'})

@app.route("/api/v1/login", methods=["POST"])
def login():
	login_details = request.get_json() # store the json body request
	user_from_db = collection_ref.find_one({'email': login_details['email']})  # search for user in database

	if user_from_db:
		encrpted_password = hashlib.sha256(login_details['password'].encode("utf-8")).hexdigest()
		if encrpted_password == user_from_db['password']:
			access_token = create_access_token(identity=user_from_db['email']) # create jwt token
			return jsonify(access_token=access_token)

	return jsonify({'msg': 'The username or password is incorrect'})

@app.route("/api/v1/user", methods=["GET"])
@jwt_required
def profile():
	current_user = get_jwt_identity() # Get the identity of the current user
	user_from_db = collection_ref.find_one({'username' : current_user})
	if user_from_db:
		del user_from_db['_id'], user_from_db['password'] # delete data we don't want to return
		return jsonify({'profile' : user_from_db })
	else:
		return jsonify({'msg': 'Profile not found'})

@app.route('/add', methods=['POST'])
def create():
    """
        create() : Add document to Firestore collection with request body
        Ensure you pass a custom ID as part of json body in post request
        e.g. json={'id': '1', 'title': 'Write a blog post'}
    """
    try:
        id = request.json['id']
        collection_ref.document(id).set(request.json)
        return jsonify({"success": True})
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route('/list', methods=['GET'])
def read():
    """
        read() : Fetches documents from Firestore collection as JSON
        todo : Return document that matches query ID
        all_todos : Return all documents
    """
    try:
        # Check if ID was passed to URL query
        todo_id = request.args.get('id')
        if todo_id:
            todo = collection_ref.document(todo_id).get()
            return jsonify(todo.to_dict())
        else:
            all_todos = [doc.to_dict() for doc in collection_ref.stream()]
            return jsonify(all_todos), 200
    except Exception as e:
        return f"An Error Occured: {e}"

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000)
