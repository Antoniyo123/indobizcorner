import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Hero Section */}
      <div className="hero-section">
        {/* <div className="logo">
          <div className="logo-icon">
            <span className="star">✦</span>
          </div>
        </div> */}
        <h1 className="hero-title">Book An Appointment Today</h1>
        {/* <p className="hero-subtitle">
          Book an appointment with our handpicked mental health and wellness experts<br />
          whenever or wherever you want!
        </p> */}
        <button className="cta-button" onClick={() => window.open('#appointment', '_blank')}>
          Book Appointment →
        </button>
      </div>

      {/* Footer Links */}
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="Footer-section-title">Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:602-774-4735" className="contact-link">602-774-4735</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="address">
                <span>11022 South 51st Street Suite 105</span>
                <span>Phoenix, AZ 85044</span>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:hello@unifiedui.com" className="contact-link">hello@unifiedui.com</a>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="Footer-section-title">Navigate</h3>
          <ul className="footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#success-stories">Success Stories</a></li>
            <li><a href="#discover">Discover</a></li>
            <li><a href="#care">Care</a></li>
            <li><a href="#download">Download App</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="Footer-section-title">Solution</h3>
          <ul className="footer-links">
            <li><a href="#get-in-touch">Get in Touch</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#who-we-are">Who're We?</a></li>
            <li><a href="#expertise">Expertise</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="Footer-section-title">Discover</h3>
          <ul className="footer-links">
            <li><a href="#latest-news">Latest News</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#solution">Solution</a></li>
            <li><a href="#gain-profession">Gain Profession</a></li>
            <li><a href="#career">Career</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <ul className="footer-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="copyright">
          <span>© Copyright </span>
          <a>PT Cipta Dinamika</a>
          <span> All rights reserved. 2024</span>
        </div>
        <div className="legal-links">
          <a href="#privacy-policy">Privacy & Policy</a>
          <a href="#terms-conditions">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;