"use client";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold text-cyan-600">Saqlaina Mushtaq</div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/saqlaina-mushtaq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-blue-500 w-6 h-6 transition duration-300" />
          </a>

          <a
            href="https://www.linkedin.com/in/saqlaina-mushtaq-a506061a6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl w-6 h-6 hover:text-blue-500 transition duration-300" />
          </a>

          <a
            href="mailto:saqlainamushtaq1913@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-2xl w-6 h-6 hover:text-blue-500 transition duration-300" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          © {new Date().getFullYear()} Saqlaina Mushtaq. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
