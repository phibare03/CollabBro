import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <center>
   
      <nav
        data-aos="fade-down"
        className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 text-white font-bold text-2xl">
             
              <span>COLLABRO</span>
            </div>
            <div className="text-white hidden sm:block">
              <ul className="flex items-center gap-6 text-xl py-4 ">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="#">Technology</a>
                </li>
                <li>
                  <a href="#">Rewards</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
              </ul>
            </div>
            <div>
              <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
              <Link to="/login">Login</Link>
              </button>
              <button className=" text-white border-2 border-white px-3 py-1 rounded-md">
              <Link to="/signup">Signup</Link>
              </button>
             
            </div>
          </div>
        </div>
      </nav>
         
    </center>
    </>
  );
};

export default Navbar;
