import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css"; // Import the CSS file for styling
import { useSpring, animated } from 'react-spring'; // Import react-spring for animations
import backgroundVideo from './assets/background-video.mp4'; // Import background video
import backgroundImage from './assets/background-image.jpg'; // Import background image

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu open/close
  const [activeLink, setActiveLink] = useState(null); // State to highlight the active link
  const [showImage, setShowImage] = useState(false); // State to handle image visibility
  const [videoOpacity, setVideoOpacity] = useState(1); // State to handle video opacity
  const videoRef = useRef(null); // Ref to access the video element

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  // Animation for fading in the hero content
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 2000 },
  });

  // Effect to handle menu visibility on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close dropdown on larger screens
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
  }, []);

  // Effect to handle video opacity and image visibility
  useEffect(() => {
    const handleTimeUpdate = () => {
      const video = videoRef.current;
      const fadeDuration = 4; // Duration in seconds before the video ends to start fading
      if (video.duration - video.currentTime <= fadeDuration) {
        setVideoOpacity((video.duration - video.currentTime) / fadeDuration);
        if (video.duration - video.currentTime <= fadeDuration) {
          setShowImage(true); // Show image when video is about to end
        }
      }
    };

    const video = videoRef.current;
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className={`hero-container ${showImage ? 'show-image' : ''}`}>
      {/* Background Video */}
      <video
        className="background-video"
        autoPlay
        muted
        preload="auto" // Add this attribute
        ref={videoRef}
        style={{ opacity: videoOpacity }} // Apply opacity to video
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag. 
      </video>

      {/* Background Image */}
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>

      {/* Navigation Bar */}
      <nav className="navbar" aria-label="Main Navigation">
        <div className="logo-placeholder">GrapplTech</div>
        <div
          className="menu-icon"
          onClick={toggleMenu}
          aria-label="Open navigation menu"
        >
          ☰ {/* Hamburger Icon */}
        </div>
        <ul
          className={`nav-menu ${isMenuOpen ? "open" : ""}`}
          role="menu"
          aria-label="Main Navigation"
        >
          {['Home', 'Browse', 'Apply', 'Community', 'Workshops', 'Resume', 'Contact'].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                aria-label={`Go to ${item}`}
                className={activeLink === item.toLowerCase() ? "active" : ""}
                onClick={() => handleLinkClick(item.toLowerCase())}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for closing the menu when clicking outside */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* Hero Content with animated fade-in effect */}
      <animated.div style={fadeIn} className="hero-content" aria-labelledby="hero-description">
        <h1 className="headline" id="hero-description">Unlock Your Potential with GrapplTech</h1>
        <p className="subheadline">Explore top-tier bootcamps and resources designed to elevate your skills and career.</p>
        <button className="cta-button">Get Started</button>
      </animated.div>
    </div>
  );
};

export default HeroSection;
