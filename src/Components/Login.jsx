import React, { useState } from 'react';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiEyeCloseFill } from "react-icons/ri";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(prev => !prev);

  return (
    <div>
      <h1 style={{ fontFamily: "Archivo Black" }}
          className='text-transparent bg-clip-text p-5 bg-gradient-to-r to-white from-gold 
          text-5xl md:text-6xl lg:text-7xl'>Welcome Back</h1>
      <div className='border-2 border-gold flex flex-row'>
      <img className='w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80 m-10'
        src="src\assets\Loginpage.jpeg" alt="" />
        <form className="p-6 flex flex-col justify-center items-center">
          <div className="relative mt-2">
            <FaUser className='absolute left-3 top-5 text-gray-400 w-5 h-5 opacity-50' />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              className="w-full mt-2 py-3 px-10 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>

          <div className="relative mt-2">
            <RiLockPasswordFill className="absolute left-3 top-5 text-gray-400 w-5 h-5 opacity-50" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="******"
              className="w-full mt-2 py-3 px-10 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <p className='text-gold opacity-80 text-right mt-1'>forgot password?</p>
            <button
              type="button"
              className="absolute right-3 top-6"
              onClick={handleShowClick}
            >
              {showPassword ? <RiEyeCloseFill className='text-gray-400 w-5 h-5' /> : <FaEye className='text-gray-400 w-5 h-5' />}
            </button>
          </div>

          <button
            type="submit"
            className="justify-center md:w-32 bg-dark-gold hover:bg-gold text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
          >
            Login
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
