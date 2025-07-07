// Navbar.jsx
import React, { useState } from 'react';
import '../styles/navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">MyPortfolio</div>

      <ul className={isMobileMenuOpen ? 'nav-links nav-active' : 'nav-links'}>
        <li><a href="#hero" onClick={closeMenu}><b>Home</b></a></li>
        <li><a href="#about" onClick={closeMenu}><b>About</b></a></li>
        <li><a href="#projects" onClick={closeMenu}><b>Projects</b></a></li>
        <li><a href="#resume" onClick={closeMenu}><b>Resume</b></a></li>
        <li><a href="#contact" onClick={closeMenu}><b>Contact</b></a></li>
      </ul>

      <div className="hamburger" onClick={handleToggle}>
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
};

export default Navbar;
