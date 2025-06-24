import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar1.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when scrolling down
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <nav className="nav-container">
        {/* Logo Section */}
        <div className="logo-section">
          <NavLink to="/" className="logo-link" onClick={closeMobileMenu}> 
            <img src={require('../assets/img/logo 01.png')} alt="IndoBIZCorner Logo" className="logo-icon" />
          </NavLink>
        </div>

        {/* Desktop Navbar Links */}
        <div className="nav-menu-center desktop-menu">
          <div className="nav-pills">
            <NavLink to="/" className="nav-pill" end>
              Home
            </NavLink>
            <NavLink to="/visa-services" className="nav-pill">
              Visa Services
            </NavLink>
            <NavLink to="/about" className="nav-pill">About Us</NavLink>
            <NavLink to="/contact" className="nav-pill">Contact Us</NavLink>
            <NavLink to="/news" className="nav-pill">News</NavLink>
          </div>
        </div>

        {/* Desktop Consultation Button */}
        <div className="nav-right desktop-menu">
          <NavLink to="/consultation">
            <button className="get-started-btn">
              Konsultasi <span className="arrow-icon">→</span>
            </button>
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <div className="hamburger-menu">
          <button 
            className={`hamburger-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <h3 className="mobile-menu-title">Menu</h3>
            </div>
            
            <div className="mobile-nav-items">
              <NavLink to="/" className="mobile-nav-item" onClick={closeMobileMenu} end>
                <span className="mobile-nav-icon">🏠</span>
                <span className="mobile-nav-text">Home</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
              <NavLink to="/visa-services" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">📋</span>
                <span className="mobile-nav-text">Visa Services</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
              <NavLink to="/about" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">👥</span>
                <span className="mobile-nav-text">About Us</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
              <NavLink to="/contact" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">📞</span>
                <span className="mobile-nav-text">Contact Us</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
              <NavLink to="/news" className="mobile-nav-item" onClick={closeMobileMenu}>
                <span className="mobile-nav-icon">📰</span>
                <span className="mobile-nav-text">News</span>
                <span className="mobile-nav-arrow">→</span>
              </NavLink>
            </div>
            
            <div className="mobile-consultation">
              <NavLink to="/consultation" onClick={closeMobileMenu}>
                <button className="mobile-consultation-btn">
                  <span className="consultation-icon">💬</span>
                  Konsultasi Sekarang
                  <span className="consultation-arrow">→</span>
                </button>
              </NavLink>
            </div>

            <div className="mobile-menu-footer">
              <p className="mobile-menu-tagline">IndoBIZCorner - Your Business Partner</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;