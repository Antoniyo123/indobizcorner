// src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (could be API call or email service)
    console.log('Contact form submitted:', { firstName, lastName, email, message });
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Left Section: Contact Description and Contact Details */}
        <div className="contact-left">
          <h1 className="contact-title">Get in touch with us</h1>
          <p className="contact-description">
            We’re here to help! Whether you have a question about our services, need assistance with your account, or want to provide feedback, our team is ready to assist you.
          </p>
          <div className="contact-details">
            <p><strong>Email:</strong> hello@visa.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
            <button className="live-chat-btn">Live Chat</button>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter your first name..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="input-field"
              />
              <input
                type="text"
                placeholder="Enter your last name..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="input-group">
              <textarea
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="input-field"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <span>&#8594;</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
