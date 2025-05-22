// HeroSection.jsx
import React from 'react';
import '../styles/Hero1.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-yellow">ELITE CLICK,</span>
            <br />
            <span className="title-white">NAVIGATING</span>
            <br />
            <span className="title-white">VISA</span>
            <br />
            <span className="title-white">SUCCESS</span>
          </h1>
          
          <p className="hero-description">
            Elevating Your Visa Journey in Jakarta and Bali. Beyond 
            registration, we're your strategic ally for 
            seamless solutions, innovation, and 
            unparalleled success. Click to excellence.
          </p>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-circle">
          <span className="scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;