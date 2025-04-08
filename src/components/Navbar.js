import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, setPopup }) => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Clicking on these buttons calls the scrollToSection function with the appropriate section id */}
        <p className="navbar-button" onClick={() => scrollToSection("home")}>Teryn</p>
        <p className="navbar-button" onClick={() => scrollToSection("about")}>About Us</p>
        <p className="navbar-button" onClick={() => scrollToSection("work")}>Our Work</p>
        <p className="navbar-button" onClick={() => {setPopup(true)}}>Start Project</p>
      </div>
    </div>
  );
};

export default Navbar;
