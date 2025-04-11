// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="box">
        <nav className="navbar">
          <ul className="navbar-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-content">
        <div className="image-section">
          <img src={`${process.env.PUBLIC_URL}/pics/myself.jpeg`} alt="Himanshu Kushwaha" />
        </div>
        <div className="name-section">
          <div className="name-container">
            <h1 className="first-name">Himanshu</h1>
            <h1 className="last-name">Kushwaha</h1>
            <h2 className="profession-title">Software Developer</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
