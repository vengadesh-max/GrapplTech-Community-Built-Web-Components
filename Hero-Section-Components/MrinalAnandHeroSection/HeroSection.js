import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    function onClick(){
        console.log("Button clicked");
    }
  return (
    <div className="hero-container">
      <nav className="hero-nav">
        <div className="hero-logo">MrinalDev</div>
        <ul className="hero-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">Inspiring Your Next Big Move</h1>
        <p className="hero-description">Unlock opportunities and take the next step in your journey. Explore the possibilities today.</p>
        <button className="hero-cta" onClick={clickHandler}>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
