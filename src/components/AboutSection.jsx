// PromoSection.jsx
import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import '../styles/AboutSection.css';

const PromoSection = () => {
  const url = "https://indobizcorner.vercel.app/";
  
  // Data promo
  const promoData = [
    {
      id: 1,
      image: require('../assets/img/7.7 indobiz corner option 1.png'), // Ganti dengan path gambar promo Anda
      title: "VISA CONSULTATION SPECIAL",
      subtitle: "Limited Time Offer",
      description: "Get 30% off on all visa consultation services. Professional guidance for your visa application with guaranteed success rate.",
      discount: "30% OFF",
      validUntil: "Valid until December 31, 2025"
    },
    {
      id: 2,
      image: require('../assets/img/7.7 travel.png'), // Ganti dengan path gambar promo Anda
      title: "BUSINESS VISA PACKAGE",
      subtitle: "Premium Service",
      description: "Complete business visa package including document preparation, application submission, and follow-up services.",
      discount: "50% OFF",
      validUntil: "Valid until January 15, 2026"
    },
    {
      id: 3,
      image: require('../assets/img/pexels-vlad-alexandru-popa-1402787.jpg'), // Ganti dengan path gambar promo Anda
      title: "FAMILY VISA BUNDLE",
      subtitle: "Best Value Deal",
      description: "Special bundle for family visa applications. Cover up to 4 family members with our comprehensive visa services.",
      discount: "40% OFF",
      validUntil: "Valid until February 28, 2026"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promoData.length);
    }, 5000); // Slide setiap 5 detik

    return () => clearInterval(slideInterval);
  }, [promoData.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promoData.length) % promoData.length);
  };

  const currentPromo = promoData[currentSlide];

  return (
    <section className="promo-section">
      <div className="promo-container">
        <div className="promo-left">
          <div className="image-card">
            <div className="discount-badge">
              {currentPromo.discount}
            </div>
            
            <img 
              src={currentPromo.image}
              alt={currentPromo.title}
              className="promo-image"
            />
            
            <div className="navigation-dots">
              {promoData.map((_, index) => (
                <div 
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
            
            <div className="image-controls">
              <button className="control-btn prev" onClick={prevSlide}>
                <span>←</span>
              </button>
              <button className="control-btn next" onClick={nextSlide}>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="promo-right">
          <div className="content-card">
            <div className="promo-header">
              <span className="promo-subtitle">{currentPromo.subtitle}</span>
              <h2 className="promo-title">
                {currentPromo.title}
              </h2>
            </div>
            
            <div className="promo-content">
              <p className="promo-description">
                {currentPromo.description}
              </p>
              
              <div className="promo-validity">
                <span className="validity-text">{currentPromo.validUntil}</span>
              </div>
              
              <div className="promo-actions">
                <button className="cta-button">
                  Claim Offer Now
                </button>
                <button className="secondary-button">
                  Learn More
                </button>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="qr-code-section">
              <h3>Scan to Visit Our Website</h3>
              <QRCodeCanvas 
                value={url}
                size={120}
                fgColor="#ffffff"
                bgColor="transparent"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="slide-progress">
        <div 
          className="progress-bar"
          style={{
            width: `${((currentSlide + 1) / promoData.length) * 100}%`
          }}
        ></div>
      </div>
    </section>
  );
};

export default PromoSection;