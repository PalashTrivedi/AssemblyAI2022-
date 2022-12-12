import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Navbar from './screens/Navbar';
import Dashboard from './screens/Dashboard/Dashboard';
import Tickets from './screens/Dashboard/Tickets';
import Meet from './screens/Calendar/Meet';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/demo/dashboard' element={<Dashboard/>} />
        <Route path='/demo/tickets' element={<Tickets/>} />
        <Route path='/demo/calendar' element={<Meet/>} />
        <Route path='/demo/aibot' element={<Dashboard/>} />
        <Route path='/demo/settings' element={<Dashboard/>} />
        <Route path='/demo/subscriptions' element={<Dashboard/>} />
      </Routes>
      
    </div>
  );
}

export default App;
