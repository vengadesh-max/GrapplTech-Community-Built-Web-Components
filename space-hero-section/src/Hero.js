import React from 'react';
import './Hero.css';
import './nav.css';
import Slideshow from './Slideshow';

const hero =()=>{
    return(
        <div className='hero'>
          <nav className="navbar">
            <div className="navbar-brand">Nature's Path</div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        <div className="navbar-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
      <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">NATURE</h1>
                    <p className="hero-subtitle">Nature is a symphony of life, where every leaf whispers a story, and every breeze carries the scent of adventure. It’s the ultimate artist, painting skies with sunsets, sculpting mountains, and weaving forests that pulse with the rhythm of life. In nature, we find the essence of freedom—wild, untamed, and endlessly inspiring. It’s not just a backdrop; it’s the heart of every journey, the spark of every discovery, and the soul of every adventure. Embrace nature, and you embrace the world’s most captivating masterpiece.</p>
                    <a href="#about" className="hero-button">Learn More</a>
                </div>
                <Slideshow />
            </div>
      
        </div>
    );
};
export default hero;