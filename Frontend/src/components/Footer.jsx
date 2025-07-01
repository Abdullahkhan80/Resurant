import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo/Brand */}
        <div className="text-2xl font-bold text-yellow-500">Gourmet Haven</div>
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#menu" className="hover:text-yellow-400 transition">Menu</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#qualities" className="hover:text-yellow-400 transition">Qualities</a>
          <a href="/reservation" className="hover:text-yellow-400 transition">Reservation</a>
        </div>
        {/* Social Media */}
        <div className="flex space-x-4 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition">👍</a>
          <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition">📸</a>
          <a href="#" aria-label="Twitter" className="hover:text-yellow-400 transition">🐦</a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">&copy; {new Date().getFullYear()} Gourmet Haven. All rights reserved.</div>
    </footer>
  );
};

export default Footer; 