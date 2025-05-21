// src/pages/Consultation.js
import React, { useState } from 'react';
import '../styles/Consultation.css';  // Import the new CSS file

const Consultation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Consultation request submitted:', { name, email, message, service });
  };

  return (
    <div className="consultation-container">
      <div className="consultation-wrapper">
        {/* Left Section: Consultation Description */}
        <div className="consultation-left">
          <h1 className="consultation-title">Consultation Request</h1>
          <p className="consultation-description">
            Need assistance or more information about our visa services? We're here to help! Select the service you need assistance with and provide some details, and our team will reach out to assist you.
          </p>
        </div>

        {/* Right Section: Consultation Form */}
        <div className="consultation-right">
          <form className="consultation-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name" className="input-label">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="input-label">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div className="input-group">
              <label htmlFor="service" className="input-label">Select Service:</label>
              <select
                id="service"
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="input-field"
              >
                <option value="" disabled>Select a service</option>
                <option value="Visa Application">Visa Application</option>
                <option value="Consultation for Travel">Consultation for Travel</option>
                <option value="Document Assistance">Document Assistance</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="message" className="input-label">How can we help you?</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="input-field textarea-field"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
