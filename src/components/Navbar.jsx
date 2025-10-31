import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoimage from '../assets/assets/logo.png'
import githubimg from '../assets/assets/github (4).png'
const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  return (
    <nav className="bg-white shadow-md py-3">
      <div className="container mx-auto flex items-center justify-between px- py-3">
        
        <div
          className="text-2xl text-blue-800 flex font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
         <img className="w-[30px]" src={logoimage} alt="" /> HERO.IO
        </div>

      
        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold border-b-2 border-purple-700"
                  : "text-gray-700 hover:text-purple-600"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

      
        <div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-white bg-[#9f62f2] "
          >
           <img className="w-[30px] rounded-3xl " src={githubimg} alt="" /> Contribute
          </a>
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
