// AboutSection.jsx
import React from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <div className="image-card">
            <img 
              src="/api/placeholder/400/500" 
              alt="Professional consultant" 
              className="about-image"
            />
            
            <div className="navigation-dots">
              <div className="dot active"></div>
              <div className="dot"></div>
            </div>
            
            <div className="image-controls">
              <button className="control-btn prev">
                <span>←</span>
              </button>
              <button className="control-btn next">
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="about-right">
          <div className="content-card">
            <h2 className="about-title">
              CHOOSING ELITE<br />EXCELLENCE
            </h2>
            
            <div className="empowering-section">
              <h3 className="section-title">Empowering</h3>
              <p className="section-description">
                Empowering 5,000 visa applications by 2030. Your go-to 
                resource for high-level visa consulting and processing services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;