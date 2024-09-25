import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 " 
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1638184984605-af1f05249a56?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Logo/Name */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-1xl font-semibold text-white">Why IEEE ?</h2>
            <h2 className="text-1xl font-semibold text-white"> IEEE Spectrum</h2>
            <h2 className="text-1xl font-semibold text-white"> IEEE Xplore</h2>
            <h2 className="text-1xl font-semibold text-white">IEEE Collabratec</h2>
            <h2 className="text-1xl font-semibold text-white">IEEE Benefits</h2>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-300">
              About Us
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Services
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Blog
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center md:justify-end space-x-6 mt-6">
          <a href="#" className="hover:text-white transition-colors duration-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-center mt-6">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
