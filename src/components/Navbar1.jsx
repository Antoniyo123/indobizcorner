// Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar1.css';

const Navbar = () => {
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false);

  const handleVisaMouseEnter = () => {
    setIsVisaDropdownOpen(true);
  };

  const handleVisaMouseLeave = () => {
    setIsVisaDropdownOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="logo-section">
            <span className="logo-icon">IndoBIZCorner</span>
          
        </div>
        
        <div className="nav-menu-center">
          <div className="nav-pills">
            <a href="#home" className="nav-pill active">Home</a>
            
            <div 
              className="nav-pill-dropdown"
              onMouseEnter={handleVisaMouseEnter}
              onMouseLeave={handleVisaMouseLeave}
            >
              <a href="#visa-services" className="nav-pill">
                Visa Services
                <span className="dropdown-arrow">▼</span>
              </a>
              
              {isVisaDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-header">Visit Visa</div>
                  <a href="#kitap" className="dropdown-item">
                    {/* <span className="item-number">1.</span> */}
                    Permanent Residence Permit (Kitap)
                  </a>
                  <a href="#kitas" className="dropdown-item">
                    {/* <span className="item-number">2.</span> */}
                    Temporary Stay Permit (Kitas)
                  </a>
                  <a href="#international" className="dropdown-item">
                    {/* <span className="item-number">3.</span> */}
                    International Visa
                  </a>
                  <a href="#additional" className="dropdown-item">
                    {/* <span className="item-number">4.</span> */}
                    Additional Visa Service
                  </a>
                  <a href="#tracking" className="dropdown-item">
                    {/* <span className="item-number">5.</span> */}
                    Tracking
                  </a>
                </div>
              )}
            </div>
            
            <a href="#about" className="nav-pill">About Us</a>
            <a href="#contact" className="nav-pill">Contact Us</a>
          </div>
        </div>
        
        <div className="nav-right">
          <button className="get-started-btn">
            Konsultasi
            <span className="arrow-icon">→</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;