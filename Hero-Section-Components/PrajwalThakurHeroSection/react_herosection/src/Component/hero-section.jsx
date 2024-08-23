import React from 'react';
import './hero-section.css';
import Navbar from './Navbar';
import Footer from './Footer';



function HeroSection() {
  return (
    <>
     <Navbar/>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Your Health, Our Priority</h1>
          <p className="hero-subtitle">Leading the Way in Medical Excellence</p>
          <p className="hero-description">
            At Cura Health, we provide world-class medical services with a focus on patient care. Our team of experienced professionals is dedicated to improving your well-being.
          </p>
          <button className="hero-button">Learn More</button>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default HeroSection;
