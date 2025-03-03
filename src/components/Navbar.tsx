import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black backdrop-blur-sm">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img src="https://i.postimg.cc/sgGhQ6vB/logo111.jpg" alt="Company logo" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-blue-500 transition-all duration-300 hover:scale-105">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-blue-500 transition-all duration-300 hover:scale-105">
              Services
            </Link>
            <Link to="/vision" className="text-gray-300 hover:text-blue-500 transition-all duration-300 hover:scale-105">
              Vision
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-blue-500 transition-all duration-300 hover:scale-105">
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-md bg-blue-600 text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-300 hover:text-blue-500 hover:bg-gray-700/50 rounded-md transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block px-3 py-2 text-gray-300 hover:text-blue-500 hover:bg-gray-700/50 rounded-md transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/vision"
            className="block px-3 py-2 text-gray-300 hover:text-blue-500 hover:bg-gray-700/50 rounded-md transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Vision
          </Link>
          <Link
            to="/blog"
            className="block px-3 py-2 text-gray-300 hover:text-blue-500 hover:bg-gray-700/50 rounded-md transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-blue-500 hover:text-blue-400 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
