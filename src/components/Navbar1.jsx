import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
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
  <Link to="/" className="logo-link">  {/* Link ke halaman utama */}
    <img src={require('../assets/img/logo 01.png')} alt="IndoBIZCorner Logo" className="logo-icon" />
  </Link>
</div>



        <div className="nav-menu-center">
          <div className="nav-pills">
            <Link to="/" className="nav-pill active">Home</Link>

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
                  <Link to="/permanent-residence" className="dropdown-item">
                    Permanent Residence Permit (Kitap)
                  </Link>
                  <Link to="/temporary-stay" className="dropdown-item">
                    Temporary Stay Permit (Kitas)
                  </Link>
                  <Link to="/international-visa" className="dropdown-item">
                    International Visa
                  </Link>
                  <Link to="/additional-services" className="dropdown-item">
                    Additional Visa Service
                  </Link>
                  <Link to="/tracking" className="dropdown-item">
                    Tracking
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="nav-pill">About Us</Link>
            <Link to="/contact" className="nav-pill">Contact Us</Link>
          </div>
        </div>

        <div className="nav-right">
          <Link to="/consultation">
            <button className="get-started-btn">
              Konsultasi
              <span className="arrow-icon">→</span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
