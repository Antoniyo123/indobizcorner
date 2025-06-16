import React from 'react';
import '../styles/Hero1.css';
import heroVideo from '../assets/video/Video Slider Dummy 1.mp4'; // import video

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Video background */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
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

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-circle">
          <span className="scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
