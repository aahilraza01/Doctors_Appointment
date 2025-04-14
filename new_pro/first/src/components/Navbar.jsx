import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const closeMenu = () => setNav(false);

  return (
    <div className="fixed w-full z-50 bg-green-900 text-white font-semibold">
      <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4">
        <h1 className="text-3xl font-bold text-white">DocKar</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-sans">
          <li className="p-4 hover:text-black transition"><Link to="/">Home</Link></li>
          <li className="p-4 hover:text-black transition"><Link to="/about">About</Link></li>
          <li className="p-4 hover:text-black transition"><Link to="/resources">Resources</Link></li>
          <li className="p-4 hover:text-black transition"><Link to="/contact">Contact</Link></li>
          <li className="p-4 hover:text-black transition"><Link to="/appointment">Appointment</Link></li>
        </ul>

        {/* Mobile Icon */}
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-[60%] h-full bg-amber-800 z-40 transition-transform duration-500 ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-2xl font-bold text-[#00df9a] p-4">DocKar</h2>
        <ul className="uppercase p-4 space-y-4">
          <li className="border-b border-gray-600 pb-2" onClick={closeMenu}>
            <Link to="/">Home</Link>
          </li>
          <li className="border-b border-gray-600 pb-2" onClick={closeMenu}>
            <Link to="/about">About</Link>
          </li>
          <li className="border-b border-gray-600 pb-2" onClick={closeMenu}>
            <Link to="/resources">Resources</Link>
          </li>
          <li className="border-b border-gray-600 pb-2" onClick={closeMenu}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/appointment">Appointment</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
