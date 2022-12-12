import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-sans w-full sticky top-0 z-50">
      <div className="bg-white px-4 py-2">
        <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
          <div>
            <Link
              to="/"
              className="inline-block py-2 text-gray-800 text-2xl font-bold"
            >
              CustomerAI
            </Link>
          </div>

          <div>
            <div className="hidden md:block">
              <Link
                to="#"
                className="inline-block py-1 md:py-4 text-gray-600 mr-6 font-bold"
              >
                How it Works
              </Link>
              <Link
                to="#"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >
                Solutions
              </Link>

              <Link
                to="#"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >
                Pricing
              </Link>
              <Link
                to="#"
                className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
              >
                Desktop
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              to="login"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
            >
              Login
            </Link>
            <Link
              to="/demo/dashboard"
              className="inline-block py-2 px-4 text-gray-700 rounded-lg bg-sky-200 hover:bg-gray-300"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
