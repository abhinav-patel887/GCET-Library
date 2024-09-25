import React from 'react';
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { RiEyeCloseFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import Stars from './Stars';
import FixedStars from './FixedStars';

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPass, setConfirmPass] = React.useState(false);

  const handleShowClick = () => setShowPassword(prev => !prev);
  const handleShowClick1 = () => setConfirmPass(prev => !prev);

  return (
    <div>
      <Stars/>
      <FixedStars/>
      
      <div className='flex flex-col items-center'>
      <h1 className='text-transparent mb-7 bg-clip-text p-5 bg-gradient-to-r to-white from-gold 
          text-5xl md:text-6xl lg:text-7xl'>
        Your Gateway to Infinite Learning Awaits:<br />
      </h1>
      <div className='border-gold border-2 rounded-lg p-6 flex flex-col w-full max-w-md'>
        <span className='text-5xl md:text-6xl lg:text-7xl mb-5 underline text-white'>Registration</span>
        <form className='flex flex-col justify-center items-start'>
          <div className="relative mt-2 w-full">
            <FaUser className='absolute left-3 top-5 text-gray-400 w-5 h-5 opacity-50' />
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              className="w-full mt-2 py-3 px-10 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
          </div>
          <div className="relative mt-2 w-full">
            <MdEmail className='absolute left-3 top-5 text-gray-400 w-6 h-6 opacity-50' />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full mt-2 py-3 px-10 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-gold focus:outline-none"
            />
          </div>
          <div className="relative mt-2 w-full">
            <RiLockPasswordFill className="absolute left-3 top-5 text-gray-400 w-6 h-6 opacity-50" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Create password"
              className="w-full mt-2 py-3 px-10 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-6"
              onClick={handleShowClick}
            >
              {showPassword ? <RiEyeCloseFill className='text-gray-400 w-5 h-5' /> : <FaEye className='text-gray-400 w-5 h-5' />}
            </button>
          </div>
          <div className="relative mt-2 w-full">
            <RiLockPasswordFill className="absolute left-3 top-5 text-gray-400 w-6 h-6 opacity-50" />
            <input
              type={showConfirmPass ? "text" : "password"}
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Confirm password"
              className="w-full mt-2 py-3 px-10 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-6"
              onClick={handleShowClick1}
            >
              {showConfirmPass ? <RiEyeCloseFill className='text-gray-400 w-5 h-5' /> : <FaEye className='text-gray-400 w-5 h-5' />}
            </button>
          </div>
          <div className='pt-3 w-full'>
            <select
              id="branch"
              className="border rounded-lg p-3 w-full"
            >
              <option className='font-bold opacity-50 bg-gold' value="branch">
                Select your Branch
              </option>
              <option value="op1">CSE</option>
              <option value="op2">CSE-IoT</option>
              <option value="op3">CSE-AIML</option>
              <option value="op4">CSE-CS</option>
              <option value="op5">CSE-DS</option>
              <option value="op6">ECE</option>
              <option value="op7">EEE</option>
              <option value="op8">MECH</option>
              <option value="op9">CIV</option>
            </select>
          </div>
          <button
            type="submit"
            className="justify-center  md:w-32 bg-dark-gold hover:bg-gold text-white font-bold 
             hover:shadow-white  drop-shadow-xl py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
