// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const testimonials = [
    { name: 'Arpith', testimonial: 'Excellent service! Highly recommended.' },
    { name: 'Subash', testimonial: 'A fantastic experience from start to finish.' },
    { name: 'Puneeth', testimonial: 'Professional and reliable. Will use again.' },
];

const Testimonials = () => {
    return (
        <section className="testimonials-section" id="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <p>"{testimonial.testimonial}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
