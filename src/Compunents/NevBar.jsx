import {  NavLink } from "react-router-dom";
import { useState } from "react";

export default function Nav() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          MyApp
        </h1>

        {/* Mobile Button */}
        <button 
          onClick={() => setOpen(!open)} 
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        {/* Menu */}
        <ul className={`
          absolute md:static top-16 left-0 w-full md:w-auto 
          bg-gray-900 md:bg-transparent
          flex flex-col md:flex-row gap-6 
          text-center md:text-left
          transition-all duration-300
          ${open ? "block py-6" : "hidden md:flex"}
        `}>

          <li>
            <NavLink to="/" onClick={() => setOpen(false)}
             className={
                  ({isActive})=> isActive ? 'text-yellow-300 border-b-amber-300  hover:border-b-2 border-b-2': 'hover:border-b-2' 
                }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}
             className={
                  ({isActive})=> isActive ? 'text-yellow-300 border-b-amber-300  hover:border-b-2 border-b-2': 'hover:border-b-2' 
                }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}
             className={
                  ({isActive})=> isActive ? 'text-yellow-300 border-b-amber-300  hover:border-b-2 border-b-2': 'hover:border-b-2' 
                }
            >
              Contact
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard" onClick={() => setOpen(false)} 
                className={
                  ({isActive})=> isActive ? 'text-yellow-300 border-b-amber-300  hover:border-b-2 border-b-2': 'hover:border-b-2' 
                }
            >
              Dashboard
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
}