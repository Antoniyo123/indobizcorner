// CoreValues.jsx
import React from 'react';
import '../styles/CoreValue.css';

const CoreValue = () => {
  const values = [
    { icon: '🏆', title: 'Excellence' },
    { icon: '💡', title: 'Expertise' },
    { icon: '⚖️', title: 'Integrity' },
    { icon: '📍', title: 'Innovation' },
    { icon: '🤝', title: 'Collaboration' },
    { icon: '🎯', title: 'Dedication' },
    { icon: '👥', title: 'Client Centric' },
    { icon: '📈', title: 'Strategic' }
  ];

  return (
    <section className="core-values">
      <div className="values-container">
        <div className="values-header">
          <h2 className="values-title">
            OUR CORE<br />Services
          </h2>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-item">
              <div className="value-icon">
                <span className="icon">{value.icon}</span>
              </div>
              <h3 className="value-title">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValue;