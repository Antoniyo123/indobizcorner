// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Payment Methods Section (Top part of Footer) */}
        <div className="payment-methods">
          <h3 className="payment-title">We Accept</h3>
          <div className="payment-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Mastercard_Logo.svg/1280px-Mastercard_Logo.svg.png" alt="Mastercard" className="payment-icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Visa_Logo.svg" alt="Visa" className="payment-icon" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/PayPal_logo_2014.svg" alt="PayPal" className="payment-icon" />
          </div>
        </div>

        <div className="footer-main">
          {/* First Column */}
          <div className="footer-column">
            <h2 className="footer-title">Visa Services</h2>
            <p className="footer-description">
              We provide professional visa consultation and processing services 
              to help you navigate immigration procedures with ease and confidence.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <span className="icon">Instagram</span>
              </a>
              <a href="#" className="social-icon">
                <span className="icon">Facebook</span>
              </a>
              <a href="#" className="social-icon">
                <span className="icon">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Second Column */}
          <div className="footer-column">
            <h3 className="footer-subtitle">Services</h3>
            <ul className="footer-links">
              <li><a href="#visit">Visit Visa</a></li>
              <li><a href="#kitap">Permanent Residence Permit</a></li>
              <li><a href="#kitas">Temporary Stay Permit</a></li>
              <li><a href="#international">International Visa</a></li>
            </ul>
          </div>
          
          {/* Third Column */}
          <div className="footer-column">
            <h3 className="footer-subtitle">Contact</h3>
            <ul className="footer-links">
              <li>Jl. Raya Utama No. 123, Jakarta</li>
              <li>+62 21 1234 5678</li>
              <li>info@visaservices.id</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} Visa Services Indonesia</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
