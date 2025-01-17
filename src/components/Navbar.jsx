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
    <nav className="text-black px-8 py-2 w-full bg-gradient-to-r from-light_purple to-light_red">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-24 items-center">
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
            className="bg-cart_button hover:bg-dark_green hover:text-white text-black py-2 px-4 flex items-center rounded-lg"
          >
            <FaShoppingCart className="mr-2 text-dark_purple" /> Cart
            {cartCount > 0 && (
              <span className="ml-2 bg-dark_purple text-white rounded-full px-2 py-1 text-xs">
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
        <div className="md:hidden p-2 border-y-2">
          <Link
            to="/"
            className="block py-2 text-black hover:text-dark_green border-b-2"
            onClick={closeMenu}
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className="block py-2 text-black hover:text-dark_green"
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
