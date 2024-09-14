// src/components/HeroSection.js
import React, { useState } from 'react';
import './HeroSection.css';
import LoginPopup from './LoginPopup';

const HeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <header className="hero-section">
            <div className="hero-content">
                <h1>Welcome to Learning New courses</h1>
                <p><b>Providing exceptional services to help your future thrive.</b></p>
                <button className="hero-button" onClick={openModal}>Contact Us</button>
            </div>
            <LoginPopup isOpen={isModalOpen} onRequestClose={closeModal} />
        </header>
    );
};

export default HeroSection;
