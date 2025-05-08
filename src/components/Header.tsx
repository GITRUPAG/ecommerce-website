import React from 'react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-pink-200 p-4 text-gray-800 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold animate-bounce text-pink-700">
          Sneakers
        </Link>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-lg font-medium">
          <a href="#" className="hover:text-pink-500 transition">Collections</a>
          <a href="#" className="hover:text-pink-500 transition">Men</a>
          <a href="#" className="hover:text-pink-500 transition">Women</a>
          <a href="#" className="hover:text-pink-500 transition">About</a>
          <a href="#" className="hover:text-pink-500 transition">Contact</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <FaShoppingCart className="w-6 h-6 cursor-pointer hover:text-pink-500" />
          </Link>
          <FaUserCircle className="w-6 h-6 cursor-pointer hover:text-pink-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
