// Slideshow.js
import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
    's1.jpg','s2.jpg','s3.jpg','s4.jpg',
];

const Slideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % images.length
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slideshow">
            <img src={images[currentImageIndex]} alt="Slideshow" />
        </div>
    );
};

export default Slideshow;
