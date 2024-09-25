import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
// import profileLogo from '../assets/profile.png'; // Profile image
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAboutDrawerOpen, setAboutDrawerOpen] = useState(false);

  return (
    <nav className="nitu p-4">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-4">
          <a href="#">
            <img
              src={logo} // Replace with the path to your logo
              alt="Logo"
              className="h-12 sm:h-20 w-auto"
            />
          </a>
          <h1 className='sm:text-2xl font-medium text-white'>
            IEEE-<span className='text-cyan-400'>SB</span>||MMMUT
          </h1>
        </div>

        {/* Menu Items for Desktop */}
        <ul className="hidden md:flex space-x-8 text-white text-xl ml-auto">
          {/* `ml-auto` pushes the items to the right end */}
          <Link to="/"> <li><a className='hover:text-cyan-400'>Home</a></li></Link>
          
          {/* About Us with Drawer */}
          <li className="relative">
            <Link 
            to={'/about'}
              className="hover:text-cyan-400 focus:outline-none"
              onClick={() => setAboutDrawerOpen(!isAboutDrawerOpen)}
            >
              About Us
            </Link>
            
            {/* Drawer (Submenu) */}
            {/* {isAboutDrawerOpen && (
              <ul className="absolute top-full z-50 left-0 bg-gray-800 text-white text-sm rounded shadow-lg mt-2 py-2 w-48">
                <Link to="/about/history"><li className='hover:bg-gray-700 px-4 py-2'>History</li></Link>
                <Link to="/about/vision"><li className='hover:bg-gray-700 px-4 py-2'>Vision & Mission</li></Link>
                <Link to="/about/team"><li className='hover:bg-gray-700 px-4 py-2'>Our Team</li></Link>
              </ul>
            )} */}
          </li>
          
          <Link to="/events"><li><a className='hover:text-cyan-400'>Events</a></li></Link>
          <Link to="/gallery"><li><a className='hover:text-cyan-400'>Gallery</a></li></Link>
          <Link to="/team"><li><a className='hover:text-cyan-400'>Team</a></li></Link>
          <Link to="/signin"><li><a className='hover:text-cyan-400'>Membership</a></li></Link>
          <Link to="/contact"><li><a className='hover:text-cyan-400'>Contact Us</a></li></Link>
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
          <Link to="/"> <li><a className='hover:text-cyan-400'>Home</a></li></Link>
          
          {/* About Us with Drawer in Mobile */}
          <li>
            <button
              className="hover:text-cyan-400 focus:outline-none"
              onClick={() => setAboutDrawerOpen(!isAboutDrawerOpen)}
            >
              About Us
            </button>
            {isAboutDrawerOpen && (
              <ul className="flex flex-col space-y-2 mt-2">
                <Link to="/about/history"><li className='hover:text-cyan-400'>History</li></Link>
                <Link to="/about/vision"><li className='hover:text-cyan-400'>Vision & Mission</li></Link>
                <Link to="/about/team"><li className='hover:text-cyan-400'>Our Team</li></Link>
              </ul>
            )}
            
          </li>

          <Link to="/events"><li><a className='hover:text-cyan-400'>Events</a></li></Link>
          <Link to="/gallery"><li><a className='hover:text-cyan-400'>Gallery</a></li></Link>
          <Link to="/team"><li><a className='hover:text-cyan-400'>Team</a></li></Link>
          <Link to="/signin"><li><a className='hover:text-cyan-400'>Membership</a></li></Link>
          <Link to="/contact"><li><a className='hover:text-cyan-400'>Contact Us</a></li></Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
