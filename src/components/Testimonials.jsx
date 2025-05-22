import React, { useState } from 'react';
import '../styles/Testimonial.css';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Fatima Khoury",
      username: "dilatory_curtains_98",
      image: require('../assets/img/profile1.jpg'),
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words."
    },
    {
      id: 2,
      name: "Hassan Ali",
      username: "turbulent_unicorn_29",
      image: require('../assets/img/profile1.jpg'),
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words."
    },
    {
      id: 3,
      name: "Jorge Martinez",
      username: "nefarious_jellybeans_91",
      image: require('../assets/img/profile1.jpg'),
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words."
    },
    {
      id: 4,
      name: "Nicolás Sánchez",
      username: "pervasive_inker_83",
      image: require('../assets/img/profile1.jpg'),
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words."
    },
    {
      id: 5,
      name: "Noel Jensen",
      username: "nefarious_shop_47",
      image: require('../assets/img/profile1.jpg'),
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words."
    },
    {
      id: 6,
      name: "Ahmad Khan",
      username: "antic_circus_76",
      image: require('../assets/img/profile1.jpg'),
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words."
    }
  ];

  const clients = [
    "Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix", "Spotify", 
    "Adobe", "Salesforce", "IBM", "Oracle", "SAP", "Shopify", "Airbnb", 
    "Uber", "PayPal", "Stripe", "Zoom", "Slack", "Dropbox"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - 3) : prevIndex - 3
    );
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-header">
          <div className="testimonial-badge">TESTIMONIALS</div>
          <h2>Our trusted clients</h2>
        </div>
        
        <div className="testimonial-slider">
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="testimonial-container">
            <div 
              className="testimonial-wrapper"
              style={{
                transform: `translateX(-${(currentIndex / 3) * 100}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="quote-icon">
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.33333 24C5.86667 24 4.58333 23.4667 3.48333 22.4C2.38333 21.3333 1.83333 20.0667 1.83333 18.6C1.83333 17.1333 2.38333 15.8667 3.48333 14.8C4.58333 13.7333 5.86667 13.2 7.33333 13.2C8.8 13.2 10.0833 13.7333 11.1833 14.8C12.2833 15.8667 12.8333 17.1333 12.8333 18.6C12.8333 20.0667 12.2833 21.3333 11.1833 22.4C10.0833 23.4667 8.8 24 7.33333 24ZM24.6667 24C23.2 24 21.9167 23.4667 20.8167 22.4C19.7167 21.3333 19.1667 20.0667 19.1667 18.6C19.1667 17.1333 19.7167 15.8667 20.8167 14.8C21.9167 13.7333 23.2 13.2 24.6667 13.2C26.1333 13.2 27.4167 13.7333 28.5167 14.8C29.6167 15.8667 30.1667 17.1333 30.1667 18.6C30.1667 20.0667 29.6167 21.3333 28.5167 22.4C27.4167 23.4667 26.1333 24 24.6667 24Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-text">
                      {testimonial.text.split('challenging').map((part, index) => (
                        <span key={index}>
                          {part}
                          {index < testimonial.text.split('challenging').length - 1 && (
                            <span className="highlight">challenging</span>
                          )}
                        </span>
                      ))}
                    </p>
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="author-image"
                      />
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-username">{testimonial.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="slider-btn next-btn" onClick={nextSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Client Companies Running Text */}
      <div className="clients-section">
        <div className="clients-wrapper">
          <div className="clients-track">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="client-item">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;