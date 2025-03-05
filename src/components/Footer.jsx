export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-xl font-bold text-blue-400">
          Saqlaina Mushtaq
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/saqlaina-mushtaq" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/saqlaina-mushtaq-a506061a6/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition duration-300">
            Email
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
