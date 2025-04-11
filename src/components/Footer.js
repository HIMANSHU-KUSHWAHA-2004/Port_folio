// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p>Built with React.</p>
    </footer>
  );
};

export default Footer;
