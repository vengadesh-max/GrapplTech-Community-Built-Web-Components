import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2>About Cura Health</h2>
                        <p>
                            We provide top-notch healthcare services with a focus on quality, innovation, and compassion.
                        </p>
                    </div>
                    <div className="footer-section address">
                        <h2>Contact Us</h2>
                        <p> 123 Pune, India, 411001</p>
                    </div>
                    <div className="footer-section social">
                        <h2>Follow Us</h2>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Cura Health. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
