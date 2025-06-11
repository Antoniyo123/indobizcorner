import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom
import '../styles/Navbar1.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav-container">
        {/* Logo Section */}
        <div className="logo-section">
          <NavLink to="/" className="logo-link"> 
            <img src={require('../assets/img/logo 01.png')} alt="IndoBIZCorner Logo" className="logo-icon" />
          </NavLink>
        </div>

        {/* Navbar Links */}
        <div className="nav-menu-center">
          <div className="nav-pills">
            {/* Home */}
            <NavLink to="/" className="nav-pill" end>
              Home
            </NavLink>

            {/* Visa Services - Direct Link */}
            <NavLink to="/visa-services" className="nav-pill">
              Visa Services
            </NavLink>

            {/* Other Links */}
            <NavLink to="/about" className="nav-pill">About Us</NavLink>
            <NavLink to="/contact" className="nav-pill">Contact Us</NavLink>
            <NavLink to="/news" className="nav-pill">News</NavLink>
          </div>
        </div>

        {/* Consultation Button */}
        <div className="nav-right">
          <NavLink to="/consultation">
            <button className="get-started-btn">
              Konsultasi <span className="arrow-icon">→</span>
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;