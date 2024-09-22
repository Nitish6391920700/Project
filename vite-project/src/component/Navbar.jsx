import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="nitu p-4">
      <div className="container flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-4">
          <a href="#">
            <img
              src={logo} // Replace with the path to your logo
              alt="Logo"
              className="h-12 sm:h-20 w-auto"
            />
          </a>
          <h1 className='sm:text-2xl font-medium text-white'>IEEE-<span className='text-cyan-400'>SB</span>||MMMUT</h1>
        </div>

        {/* Menu Items for Desktop */}
        <ul className="hidden md:flex space-x-8 text-white text-xl ">
          <li><a className='hover:text-cyan-400 ' href="">Home</a></li>
          <li><a className='hover:text-cyan-400 ' href="">About Us</a></li>
          <li><a className='hover:text-cyan-400 ' href="">Events</a></li>
          <li><a className='hover:text-cyan-400 ' href="">Gallery</a></li>
          <li><a className='hover:text-cyan-400 ' href="">Team</a></li>
          <li><a className='hover:text-cyan-400 ' href="">Membership</a></li>
          <li><a className='hover:text-cyan-400 ' href="">Contact Us</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button
            className="focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-4 text-white font-medium">
          <li><a className='hover:text-cyan-400' href="">Home</a></li>
          <li><a className='hover:text-cyan-400' href="">About Us</a></li>
          <li><a className='hover:text-cyan-400' href="">Events</a></li>
          <li><a className='hover:text-cyan-400' href="">Gallery</a></li>
          <li><a className='hover:text-cyan-400' href="">Team</a></li>
          <li><a className='hover:text-cyan-400' href="">Membership</a></li>
          <li><a className='hover:text-cyan-400' href="">Contact Us</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
