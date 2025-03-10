import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import Heroicons
const Header = ({ onClick, colorMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Nate"; // Text to type out
  const typingSpeed = 250; // Typing speed (ms)
  const delayBeforeRestart = 2500; // Delay before restarting the loop (ms)

  useEffect(() => {
    let index = 0;
    let typing = true;

    const typeEffect = () => {
      if (typing) {
        if (index <= fullText.length) {
          setText(fullText.slice(0, index));
          index++;
        } else {
          typing = false;
          setTimeout(() => {
            typing = true;
            index = 0;
          }, delayBeforeRestart);
        }
      }
    };

    const interval = setInterval(typeEffect, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
<header className={`${colorMode === 'light' ? 'bg-gray-50 shadow' : 'bg-black shadow-[0_4px_6px_rgba(255,255,255,0.1)]'} w-full fixed top-2 left-0`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo with Typewriter Effect */}
        <h1 className={`text-3xl font-bold ${colorMode === 'light' ? 'text-gray-900' : 'text-white'}`}>
        <NavLink to="/" className="text-3xl font-bold">
              The Dev <span className="text-blue-500">{text}</span>
              </NavLink> 
          <span className="animate-blink">|</span>
        </h1>

        {/* Desktop Navigation (Hidden on small screens) */}
        <nav className="hidden md:flex">
  <ul className="flex space-x-4">
    <li>
      <NavLink
        to="/"
        className={`${colorMode === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-300'} text-lg`}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={`${colorMode === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-300'} text-lg`}
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/projects"
        className={`${colorMode === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-300'} text-lg`}
      >
        Projects
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/blog"
        className={`${colorMode === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-300'} text-lg`}
      >
        Blog
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={`${colorMode === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-300'} text-lg`}
      >
        Contact
      </NavLink>
    </li>
    <li>
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        className="toggle  border-gray-300 bg-gray-200 checked:bg-black checked:border-black"
        onClick={onClick}
      />
        <i className={`${ colorMode === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}  hover:text-gray-600 text-xl`}></i>
    </label>
    </li>
  </ul>
</nav>
        {/* Hamburger Menu Button (Visible on small screens) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      {menuOpen && (
        <nav className={`${colorMode === 'light' ? 'text-gray-700 hover:text-gray-900 bg-gray-50' : 'text-white hover:text-gray-300 bg-black'} md:hidden absolute top-16 left-0 w-full shadow-md`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <NavLink to="/" className=" text-lg hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className=" text-lg hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className=" text-lg hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className=" text-lg hover:text-gray-900" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="toggle  border-gray-300 bg-gray-200 checked:bg-black checked:border-black"
                onClick={onClick}
              />
                <i className={`${ colorMode === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'}  hover:text-gray-600 text-xl`}></i>
            </label>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
