import React from 'react';
import './HeroSection.css';
import logo from './rocket-launch.png'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Creative Digital Agency from the Future</h1>
        <p>Creating an innovative, functional, and lean business strategy for your success.</p>
        <div className="hero-buttons">
          <button className="contact-btn">Contact us</button>
          <button className="learn-btn">Learn more</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={logo} alt="Rocket Launch" />
      </div>
    </div>
  );
};

export default HeroSection;
