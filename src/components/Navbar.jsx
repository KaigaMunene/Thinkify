import { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/thinkify-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className=" text-black px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="w-20 p-2" onClick={closeMenu}>
          <img src={logo} alt="Thinkify" />{' '}
        </Link>

        {/* Links (hidden on mobile, visible on desktop) */}
        <div className="hidden md:flex flex-1 justify-center space-x-24 ">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/shop" className="hover:text-gray-400">
            Shop
          </a>
          <a href="/account" className="hover:text-gray-400">
            Account
          </a>
          <a href="/help" className="hover:text-gray-400">
            Help
          </a>
        </div>

        {/* Cart Button */}
        <div className="hidden md:block">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center"
          >
            <FaShoppingCart className="mr-2" /> Cart
          </button>
        </div>

        {/* Hamburger Menu (visible on mobile) */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <a href="/" className="block py-2 text-white hover:text-gray-400">
            Home
          </a>
          <a
            href="/about"
            className="block py-2 text-white hover:text-gray-400"
          >
            About
          </a>
          <a href="/shop" className="block py-2 text-white hover:text-gray-400">
            Shop
          </a>
          <a
            href="/account"
            className="block py-2 text-white hover:text-gray-400"
          >
            Account
          </a>
          <a href="/help" className="block py-2 text-white hover:text-gray-400">
            Help
          </a>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 mt-2 rounded flex justify-center items-center"
          >
            <FaShoppingCart className="mr-2" /> Cart
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
