// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <footer class="flex flex-col space-y-10 justify-center m-10">
//         <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
//           <a class="hover:text-gray-900" href="#">
//             Home
//           </a>
//           <a class="hover:text-gray-900" href="#">
//             About
//           </a>
//           <a class="hover:text-gray-900" href="#">
//             Services
//           </a>
//           <a class="hover:text-gray-900" href="#">
//             Media
//           </a>
//           <a class="hover:text-gray-900" href="#">
//             Gallery
//           </a>
//           <a class="hover:text-gray-900" href="#">
//             Contact
//           </a>
//         </nav>

//         <div class="flex justify-center space-x-5">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
//           </a>
//         </div>
//       </footer> 
//     </div>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" footer bg-gray-900 text-gray-300 px-4 py-6 md:px-10 mt-10 sm:static md:static ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">SGK</h2>
          <p>Crafting modern web solutions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li><Link to="/AboutMe" className="hover:text-purple-400">About</Link></li>
            <li><Link to="/ContactUs" className="hover:text-purple-400">Contact</Link></li>
            <li><Link to="/Project" className="hover:text-purple-400">Projects</Link></li>
            <li><Link to="/Certifications" className="hover:text-purple-400">Certifications</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Twitter</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-sm text-center border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SGK. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
