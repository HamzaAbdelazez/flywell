import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/flywell-logo.png" 
              alt="FlyWell Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-gray-800">FlyWell</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/book" className="text-gray-700 hover:text-blue-600 transition">
              Book Now
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact Us
            </Link>
          </nav>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link 
              to="/book" 
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Book Now
            </Link>
            <Link 
              to="/contact" 
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-50 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/book" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}