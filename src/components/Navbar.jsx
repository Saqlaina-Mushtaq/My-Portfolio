"use client"; 
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full  shadow-md bg-blue-950 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="/">
        <img src="/logo.png" alt="Logo" className="h-12 w-12 rounded-full" />

        </a>

        {/* Mobile Menu Button */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex gap-6 absolute md:static top-16 left-0 w-full bg-blue-950 text-white md:w-auto md:flex-row flex-col md:items-center p-4 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
          <li className="hover:text-blue-500"><a href="#home">Home</a></li>
          <li className="hover:text-blue-500"><a href="#about">About</a></li>
          <li className="hover:text-blue-500"><a href="#projects">Projects</a></li>
          <li className="hover:text-blue-500"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
