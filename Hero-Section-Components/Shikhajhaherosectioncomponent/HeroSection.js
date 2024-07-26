// import React from 'react';
import './HeroSection.css';
import heroimage from './heroimage.png';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to GrapplTech</h1>
        <p>Your journey to mastering web components begins here.</p>
        <a href="#learn-more" className="cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default HeroSection;
