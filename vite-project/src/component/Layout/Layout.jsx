import React from 'react';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     <Navbar/>
      

      {/* Main Content Area */}
      <main className="">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white p-4 text-center">
        <p>&copy; 2024 Agriculture Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
