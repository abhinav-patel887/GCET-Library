import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-custom-black border-black px-4 lg:px-6 py-2.5 font-bold">
        <div className="flex items-center justify-between mx-auto max-w-screen-xl space-x-20">
          
          <Link to="/" className="flex items-center">
            <img onClick={()=>{window.location.reload();}}
              src="src/assets/gcetlogo.png"
              className="mr-3 h-14 w-50"
              alt="Logo"
            />
          </Link>

          <div className="flex-grow">
            <ul className="flex justify-center space-x-20">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                      ${isActive ? "text-gold underline" : "text-white "} lg:hover:bg-transparent lg:border-0
                      hover:text-dark-gold lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                      ${isActive ? "text-gold underline" : "text-white"} lg:hover:bg-transparent lg:border-0
                      hover:text-dark-gold lg:p-0`
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                      ${isActive ? "text-gold underline" : "text-white"} lg:hover:bg-transparent lg:border-0
                      hover:text-dark-gold lg:p-0`
                  }
                >
                  Latest News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                      ${isActive ? "text-gold underline" : "text-white"} lg:hover:bg-transparent lg:border-0
                      hover:text-dark-gold lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="#"
            className="ml-auto text-white hover:scale-110 duration-300 text-center shadow-md
             bg-dark-gold hover:bg-orange-800 focus:ring-4 hover:shadow-gold  hover:bg-brown focus:ring-gold font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
