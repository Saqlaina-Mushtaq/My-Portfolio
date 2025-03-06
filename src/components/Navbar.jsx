"use client"; 
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full  shadow-md bg-blue-950 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/" className="z-50">
        <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full" />

        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
        <FaBars />
        </button>

        {/* Navigation Links */}
        <ul className={`fixed inset-0 bg-blue-950 text-white flex flex-col items-center justify-center gap-8 transform transition-transform duration-300 md:static md:flex md:flex-row md:w-auto md:h-auto md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          {/* Close Button at the Top */}
          <button
            className="absolute top-5 right-5 text-3xl text-white md:hidden z-50"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
          
          <li className="text-xl hover:text-blue-500"><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li className="text-xl hover:text-blue-500"><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li className="text-xl hover:text-blue-500"><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li className="text-xl hover:text-blue-500"><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
