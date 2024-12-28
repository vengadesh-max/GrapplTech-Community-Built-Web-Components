import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Navbar />

      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-description">
            We’re here to help. Whether you have a question about our services, need assistance, or just want to give feedback, we’re all ears.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2 className="info-title">Contact Information</h2>
            <p className="info-item"><strong>Phone:</strong> (+91) 94054 78564</p>
            <p className="info-item"><strong>Email:</strong> contact@curahealth.com</p>
            <p className="info-item"><strong>Address:</strong> 123 Pune, India, 411001</p>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="contact-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactUs;
