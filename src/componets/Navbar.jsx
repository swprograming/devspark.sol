import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-black mt-5">
      <div className="max-w-[1197px] mx-auto flex items-center justify-between p-4 sm:p-6">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-500">DevSpark.sol</h1>

        {/* Menu (desktop) */}
        <ul className="hidden md:flex gap-8 items-center justify-center flex-1 text-lg sm:text-xl">
          <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/Pro">Project</Link></li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/About">About</Link></li>
        </ul>

        {/* Contact Button */}
        <button className="hidden md:block px-4 py-2 bg-black text-white text-lg sm:text-xl rounded-xl hover:bg-blue-500 hover:text-white transition-colors">
          <Link to="/Contact">Contact</Link>
        </button>

        {/* Hamburger (mobile) */}
        <div className="md:hidden cursor-pointer pr-2 sm:pr-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white transition-all duration-300 ease-in-out ${isOpen ? "h-auto opacity-100 px-4 py-4" : "h-0 opacity-0 overflow-hidden"}`}>
        <ul className="flex flex-col gap-6 items-center text-lg sm:text-xl">
          <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/">Home</Link></li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/Pro">Project</Link></li>
          <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to="/About">About</Link></li>
          <button className="px-4 py-2 bg-black text-white text-lg sm:text-xl rounded-xl hover:bg-blue-500 hover:text-white transition-colors">
            <Link to="/Contact">Contact</Link>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;