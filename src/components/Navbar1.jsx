import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom
import '../styles/Navbar1.css';

const Navbar = () => {
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false);

  // Show dropdown when mouse enters the Visa Services area
  const handleVisaMouseEnter = () => {
    setIsVisaDropdownOpen(true);
  };

  // Hide dropdown when mouse leaves both the Visa Services and dropdown area
  const handleVisaMouseLeave = () => {
    setIsVisaDropdownOpen(false);
  };

  // Close dropdown when clicking on a link
  const closeDropdown = () => {
    setIsVisaDropdownOpen(false);
  };

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

            {/* Visa Services Dropdown */}
            <div 
              className="nav-pill-dropdown"
              onMouseEnter={handleVisaMouseEnter}
              onMouseLeave={handleVisaMouseLeave}
            >
              <span className="nav-pill">
                Visa Services <span className="dropdown-arrow">▼</span>
              </span>

              {/* Dropdown Menu */}
              {isVisaDropdownOpen && (
                <div className="dropdown-menu">
                  {/* <div className="dropdown-header">Visit Visa</div> */}
                  <NavLink
                    to="/permanent-residence"
                    className="dropdown-item"
                    onClick={closeDropdown}
                  >
                    Permanent Residence Permit (Kitap)
                  </NavLink>
                  <NavLink
                    to="/temporary-stay"
                    className="dropdown-item"
                    onClick={closeDropdown}
                  >
                    Temporary Stay Permit (Kitas)
                  </NavLink>
                  <NavLink
                    to="/international-visa"
                    className="dropdown-item"
                    onClick={closeDropdown}
                  >
                    International Visa
                  </NavLink>
                  <NavLink
                    to="/visit-visa"
                    className="dropdown-item" 
                    onClick={closeDropdown}
                  >
                    Visit Visa
                  </NavLink>
                  <NavLink
                    to="/additional-services"
                    className="dropdown-item"
                    onClick={closeDropdown}
                  >
                    Additional Visa Service
                  </NavLink>
                  <NavLink
                    to="/tracking"
                    className="dropdown-item"
                    onClick={closeDropdown}
                  >
                    Tracking
                  </NavLink>
                </div>
              )}
            </div>

            {/* Other Links */}
            <NavLink to="/about" className="nav-pill">About Us</NavLink>
            <NavLink to="/contact" className="nav-pill">Contact Us</NavLink>
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
