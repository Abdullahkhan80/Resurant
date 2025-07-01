import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-yellow-600">Gourmet Haven</span>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-yellow-600 font-medium transition">Home</Link>
            <Link to="/Menu" className="text-gray-700 hover:text-yellow-600 font-medium transition">Menu</Link>
            <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium transition">About</a>
            <a href="#qualities" className="text-gray-700 hover:text-yellow-600 font-medium transition">Qualities</a>
          </div>
          {/* Desktop Reserve Button */}
          <div className="hidden md:flex">
            <Link to="/reservation">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow transition duration-300">Reserve</button>
            </Link>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 z-30 animate-fade-in-down py-6">
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-gray-700 hover:text-yellow-600 font-medium transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <a href="#menu" className="text-gray-700 hover:text-yellow-600 font-medium transition" onClick={() => setMenuOpen(false)}>Menu</a>
            <a href="#about" className="text-gray-700 hover:text-yellow-600 font-medium transition" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#qualities" className="text-gray-700 hover:text-yellow-600 font-medium transition" onClick={() => setMenuOpen(false)}>Qualities</a>
            <Link to="/reservation" className="w-full flex justify-center" onClick={() => setMenuOpen(false)}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full shadow transition duration-300 mt-2">Reserve</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav