import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from "react-icons/hi";
import Stars from './Stars';
import FixedStars from './FixedStars';

function Home() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col md:flex-row justify-between items-center relative">
      <Stars />
      <FixedStars/>
      <div className="flex flex-col items-start text-left text-white pt-10 md:pt-0 md:pl-10">
        <p style={{ fontFamily: 'Archivo Black' }} className="text-transparent bg-clip-text bg-gradient-to-r to-white from-brown text-5xl md:text-6xl lg:text-7xl">
          Welcome to Geethanjali's
        </p>
        <p style={{ fontFamily: 'Archivo Black' }} className="text-transparent bg-clip-text bg-gradient-to-r to-gold from-white text-3xl md:text-4xl lg:text-5xl">
          Digital Information Centre
        </p>
        <p className="mt-3 text-xs p-3 pl-0 opacity-60 w-full tracking-widest">
          The Digital Library of Geethanjali College of Engineering and Technology provides students and faculty with seamless access
          to a vast repository of academic resources, research papers, e-books, e-Journals. Designed to foster innovation and learning,
          it supports a collaborative environment where knowledge is just a click away.
        </p>
        <div className="p-4 flex flex-row space-x-4">
          <Link
            to="register/"
            className="text-white hover:scale-110 duration-300 text-center shadow-md
            bg-dark-gold hover:bg-orange-800 focus:ring-4 hover:shadow-gold hover:bg-brown focus:ring-gold 
            font-medium rounded-lg text-lg lg:text-xl px-4 py-2"
          >
            Register
            <HiArrowNarrowRight className="inline-block ml-2" />
          </Link>

          
          <Link
            to="login/"
            className="text-white  hover:bg-brown hover:scale-110 duration-300 text-center shadow-md
            bg-dark-gold hover:bg-orange-800 focus:ring-4 hover:shadow-gold focus:ring-gold 
            font-medium rounded-lg text-lg lg:text-xl px-4 py-2"
          >
            Login
            <HiArrowNarrowRight className="inline-block ml-2" />
          </Link>
        </div>
      </div>
      <img
        className="w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80 m-10" // Increased size and right alignment
        src="src/assets/backend.png"
        alt="Digital Information Centre"
      />
    </div>
  );
}

export default Home;
