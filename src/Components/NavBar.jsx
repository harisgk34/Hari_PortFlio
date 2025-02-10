// import React from 'react'

// function Cover() {
//   return (
//     <div>
//      <nav className="flex justify-center gap-10 text-2xl " >
//       <ul>
//         <li>
//           <a href="#About"className="text-gray-300 hover:text-purple-400 transition-all duration-300  " >About</a>
//         </li>
//       </ul>
//       <ul>
//         <li>
//           <a href="#About" className="text-gray-300 hover:text-purple-500 transition-all duration-300  ">Contact</a>
//         </li>
//       </ul>
//       <ul>
//         <li>
//           <a href="#About" className="text-gray-300 hover:text-purple-400 transition-all duration-300 ">Skill</a>
//         </li>
//       </ul>
//      </nav>
//      <div>
//       <img src="https://via.placeholder.com/150" alt="Profile" className="w-36 h-36 md:w-48 md:h-48 rounded-full 
//       border-4 border-gray-200" />
//       <h1>Hariharan</h1>
//       <h2>MERN Full stack developer</h2>
//       <p>
//       "Crafting Scalable and User-Friendly Web Applications with Precision"
//       </p>
      

//      </div>
//     </div>
//   )
// }

// export default Cover


import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return ( 
    <div className="mx-6  flex justify-between text-center items-center animate-fadeIn z-50  top-0 ">
      <Link to="/" id="logo" className="from-sky-50 flex justify-start ml-0 font-serif" > SGK </Link>
    <Link to="/"  className="flex justify-between w-1/2 gap-6 p-3 m-2 ">
    
      <Link to="/AboutMe" className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 " >About</Link>
      <Link to="/ContactUs" className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 "> Contact</Link>
      <Link to="/Skill" className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 ">What I Do</Link>
      <Link to="/Project " className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 ">Projects</Link>
      <Link to="/Certifications" className="hover:text-gray-400 hover:cursor-pointer transition-all duration-300 ">Certifications</Link>

      </Link>

    <Link to="/HireMe" className="button shadow-lg p-4 rounded-lg animate-fadeIn">Hire Me</Link>
    </div>
  
  )
}

export default NavBar;