

import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" footer bg-gray-900 text-gray-300 px-4 py-6 md:px-10 mt-10 sticky ">
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
