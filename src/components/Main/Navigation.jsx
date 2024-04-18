import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  
  return (
    <nav className="bg-white align-middle backdrop-filter backdrop-blur-lg bg-opacity-60 border-b border-gray-200 h-16 fixed top-0 left-0 w-full flex items-center justify-between z-50">
       {/* Logo */}
       <div className="ml-4 flex items-center">
        <Link to="/home" className="flex items-center">
          <div className="bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center w-12 h-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <span className="ml-2 text-xl font-semibold text-gray-800">COLLABRO</span>
        </Link>
      </div>

      {/* Navigation Items */}
      <ul className="flex flex-grow justify-center">
        {/* Home */}
        <li className="mr-4">
          <Link to="/home" className="flex items-center text-sm text-black hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </Link>
        </li>

        {/* Network */}
        <li className="mr-4">
          <Link to="/home" className="flex items-center text-sm text-black hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 100-2h-3V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </Link>
        </li>

        {/* Jobs */}
        <li className="mr-4">
          <Link to="/jobs" className="flex items-center text-sm text-black hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H5zm10 2H5v10h10V6zm-6 6v2h2v-2h-2zm0-4h2v2h-2V8z" clipRule="evenodd" />
            </svg>
          </Link>
        </li>

        {/* Messaging */}
        <li className="mr-4">
          <Link to="/event" className="flex items-center text-sm text-black hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </Link>
        </li>

        {/* Notifications */}
        <li className="mr-4">
          <Link to="/events" className="flex items-center text-sm text-black hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 2.761 2.239 5 5 5h6a5 5 0 100-10H5a3 3 0 00-3 3h16a1 1 0 110 2H2v-2h16a1 1 0 110-2H2a8 8 0 008-8zm6 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="flex items-center mr-4">
        <input type="text" placeholder="Search..." className="bg-gray-100 border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring focus:ring-blue-300" />
        <button className="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 17.5l4.5 4.5" />
          </svg>
        </button>
      </div>
      
      {/* Profile */}
      <div className="mr-4">
        <Link to="/" className="flex items-center text-sm text-black hover:text-black hover:bg-gray-100 px-3 py-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 14v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            <path d="M12 14V3l9 5-9 5z" />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
