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
      
    </div>
  );
};

export default Layout;
