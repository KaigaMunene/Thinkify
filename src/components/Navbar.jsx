import { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from './context/CartContext';
import logo from '../assets/images/thinkify-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const cartCount = cartItems.length;

  return (
    <nav className="text-black px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          {/* Logo */}
          <Link to="/" className="w-20 p-2" onClick={closeMenu}>
            <img src={logo} alt="Thinkify" />
          </Link>

          {/* Links (hidden on mobile, visible on desktop) */}
          <div className="hidden md:flex flex-1 justify-center space-x-12">
            <Link to="/" className="hover:text-dark_green">
              Shop
            </Link>
            <Link to="/cart" className="hover:text-dark_green">
              Cart
            </Link>
          </div>
        </div>

        {/* Cart Button (visible on both mobile and desktop) */}
        <div className="relative">
          <Link
            to="/cart"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center"
          >
            <FaShoppingCart className="mr-2" /> Cart
            {cartCount > 0 && (
              <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Hamburger Menu (visible on mobile) */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <Link to="/" className="block py-2 text-white" onClick={closeMenu}>
            Shop
          </Link>
          <Link
            to="/cart"
            className="block py-2 text-white"
            onClick={closeMenu}
          >
            Cart
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
