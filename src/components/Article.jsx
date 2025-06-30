import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Tambah ini
import '../styles/Articles.css';

const Articles = () => {
  const navigate = useNavigate(); // ✅ Tambah ini

  const handleArrowClick = () => {
    navigate('/news'); // Langsung ke halaman /news
  };
  

  return (
    <div className="articles-container">
      <div className="articles-header">
        <h1>News & Updates
        </h1>
        <p>
        Discover the latest visa regulations, travel tips, and Indobiz Corner updates here.
        </p>
      </div>

      <div className="articles-grid">
        <article className="article-card">
          <div className="article-image">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop" 
              alt="Modern library interior with curved architecture"
            />
          </div>
          <div className="article-content">
            <h3>Exploring the themes of this year's literary premiere</h3>
            <div className="article-footer">
              <span className="article-date">13 Dec 2024</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("Exploring the themes of this year's literary premiere")}
                aria-label="Read more about literary premiere"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className="article-card">
          <div className="article-image">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop" 
              alt="Green technology and environmental illustration"
            />
          </div>
          <div className="article-content">
            <h3>How green technologies are shaping tomorrow's world</h3>
            <div className="article-footer">
              <span className="article-date">05 Sep 2024</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("How green technologies are shaping tomorrow's world")}
                aria-label="Read more about green technologies"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>

        <article className="article-card">
          <div className="article-image">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop" 
              alt="Deforested area showing environmental impact"
            />
          </div>
          <div className="article-content">
            <h3>Deforestation at a crossroads</h3>
            <div className="article-footer">
              <span className="article-date">23 Aug 2024</span>
              <button 
                className="arrow-btn"
                onClick={() => handleArrowClick("Deforestation at a crossroads")}
                aria-label="Read more about deforestation"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Articles;
