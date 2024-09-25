import React from 'react';
import Navbar from '../Navbar';
import Bacground from '../Bacground';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">

<div className="fixed inset-0 z-[-1]">
        <Bacground />
      </div>


     <Navbar/>
      

      {/* Main Content Area */}
      <main className="">
        {children}
      </main>

      {/* Footer */}
      <footer className=" text-white p-4 text-center">
        <p>&copy; 2024 Agriculture Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
