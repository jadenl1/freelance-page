import React, { useState } from 'react';
import './Navbar.css';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = ({ scrollToSection, setPopup }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleMenuClick = (section) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      {/* Desktop Navbar */}
      <div className="navbar desktop-menu">
        <p className="navbar-button" onClick={() => scrollToSection("home")}>Teryn</p>
        <p className="navbar-button" onClick={() => scrollToSection("about")}>About Us</p>
        <p className="navbar-button" onClick={() => scrollToSection("pricing")}>Pricing</p>
        <p className="navbar-button" onClick={() => scrollToSection("work")}>Our Work</p>
        <p className="navbar-button" onClick={() => setPopup(true)}>Start Project</p>
      </div>
      
      {/* Mobile Navbar */}
      <div className="navbar mobile-menu">
        <div className="mobile-navbar-bar" onClick={toggleMenu}>
          <FaChevronDown className={`menu-icon ${menuOpen ? 'rotated' : ''}`} />
        </div>
        <div className={`mobile-dropdown ${menuOpen ? 'open' : ''}`}>
          <p className="navbar-button" onClick={() => handleMenuClick("home")}>Teryn</p>
          <p className="navbar-button" onClick={() => handleMenuClick("about")}>About Us</p>
          <p className="navbar-button" onClick={() => handleMenuClick("pricing")}>Pricing</p>
          <p className="navbar-button" onClick={() => handleMenuClick("work")}>Our Work</p>
          <p className="navbar-button" onClick={() => { setPopup(true); setMenuOpen(false); }}>Start Project</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
