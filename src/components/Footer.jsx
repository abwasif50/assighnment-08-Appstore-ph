import React from "react";
import logo from '../assets/assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-1">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 justify-between items-center text-center gap-6 space-y-10 mb-">
        <div className="flex">
          <img className="w-[30px]" src={logo} alt="" />
          <h2 className="text-xl font-bold">HERO.IO</h2>
          
</div>
     
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/apps" className="hover:text-white">Apps</a>
          <a href="/installation" className="hover:text-white">Installation</a>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>




      </div>

      <div className="mb-4 text-center border-t pb-3">
        
          <p className="text-gray-400 text-sm">
            © 2025 AppStore. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;