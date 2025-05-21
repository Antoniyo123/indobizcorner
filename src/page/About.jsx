// src/pages/About.js
import React from 'react';
import '../styles/About.css'; // Import the CSS for styling

const About = () => {
  return (
    <div className="about-container">
      {/* About Us Section */}
      <section className="about-header">
        <h1 className="about-title">ABOUT US</h1>
        <p className="about-description">
          Luxury Visa Services, providing seamless and reliable visa solutions for individuals and businesses.
        </p>
      </section>

      {/* Our Philosophy Section */}
      <section className="philosophy-section">
        <h2 className="section-title">Our Philosophy</h2>
        <p className="section-description">
          We are dedicated to simplifying the visa application process. Our goal is to provide personalized services that ensure a smooth journey for all our clients.
        </p>
      </section>

      {/* Meet the Principals Section */}
      <section className="principals-section">
        <h2 className="section-title">MEET THE PRINCIPALS</h2>

        <div className="team-container">
          <div className="team-member">
            <img className="team-member-img" src={require('../assets/img/pexels-thirdman-7652469.jpg')} alt="Jay Britto" />
            <h3 className="team-member-name">Jay Britto</h3>
            <p className="team-member-role">Founder & Principal</p>
          </div>

          <div className="team-member">
            <img className="team-member-img" src={require('../assets/img/pexels-thirdman-7652469.jpg')} alt="David Charette" />
            <h3 className="team-member-name">David Charette</h3>
            <p className="team-member-role">Founder & Principal</p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section">
        <h2 className="section-title">CONTACT US</h2>
        <p className="section-description">
          Ready to start your visa journey? Contact us and our team will assist you in every step of the process.
        </p>
        <button className="contact-button">Get in Touch</button>
      </section>
    </div>
  );
};

export default About;
