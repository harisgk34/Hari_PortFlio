

// import React from 'react'
// import { Link } from "react-router-dom";

// function NavBar() {
//   return ( 
//     <div className="mx-6  flex justify-between text-center items-center animate-fadeIn z-50  top-0 ">
//       <Link to="/" id="logo" className="from-sky-50 flex justify-start ml-0 font-serif" > SGK </Link>
//     <Link to="/"  className="flex justify-between w-1/2 gap-6 p-3 m-2 ">
    
//       <Link to="/AboutMe" className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 " >About</Link>
//       <Link to="/ContactUs" className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 "> Contact</Link>
//       <Link to="/Skill" className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 ">What I Do</Link>
//       <Link to="/Project " className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 ">Projects</Link>
//       <Link to="/Certifications" className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 ">Certifications</Link>

//       </Link>

//     <Link to="/HireMe" className="button shadow-lg p-4 rounded-lg animate-fadeIn">Hire Me</Link>
//     </div>
  
//   )
// }

// export default NavBar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can also use Heroicons or FontAwesome

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="  bg-black text-black md:text-white shadow-md px-4 py-3 flex items-center justify-between sticky md:px-8 z-50 ">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold font-serif text-purple-600">
        SGK
      </Link>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <X color="white" size={28} /> : <Menu color="white" size={28} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-lg items-center text-white">
        <Link to="/AboutMe" className="hover:text-purple-500 transition">About</Link>
        <Link to="/ContactUs" className="hover:text-purple-500 transition">Contact</Link>
        <Link to="/Skill" className="hover:text-purple-500 transition">What I Do</Link>
        <Link to="/Project" className="hover:text-purple-500 transition">Projects</Link>
        <Link to="/Certifications" className="hover:text-purple-500 transition">Certifications</Link>
        <Link to="/HireMe" className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
          Hire Me
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          <Link to="/AboutMe" onClick={toggleMenu} className="hover:text-purple-500 transition">About</Link>
          <Link to="/ContactUs" onClick={toggleMenu} className="hover:text-purple-500 transition">Contact</Link>
          <Link to="/Skill" onClick={toggleMenu} className="hover:text-purple-500 transition">What I Do</Link>
          <Link to="/Project" onClick={toggleMenu} className="hover:text-purple-500 transition">Projects</Link>
          <Link to="/Certifications" onClick={toggleMenu} className="hover:text-purple-500 transition">Certifications</Link>
          <Link to="/HireMe" onClick={toggleMenu} className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
            Hire Me
          </Link>
          
        </div>
        
      )}
      
    </nav>
  );
}

export default NavBar;
