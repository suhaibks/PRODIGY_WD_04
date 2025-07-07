// Footer.jsx
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Suhaib K S. All rights reserved.</p>
      <div className="footer-links">
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
