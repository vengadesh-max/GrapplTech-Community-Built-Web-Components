// src/HeroSection.js
// src/HeroSection.js
// src/HeroSection.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import './HeroSection.css';

const testimonials = [
    {
        name: "John Doe",
        feedback: "Excellent service! They helped me understand my finances better.",
    },
    {
        name: "Jane Smith",
        feedback: "Highly recommend! The team is very professional and knowledgeable.",
    },
    {
        name: "Mike Johnson",
        feedback: "Great experience. They provided valuable insights into my investments.",
    },
];

const HeroSection = () => {
    const [amount, setAmount] = useState('');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        setAmount(e.target.value);
    };

    const handleCalculate = () => {
        const result = amount * 1.1; 
        alert(`Estimated value: $${result}`);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        console.log('Form submitted:', formData);
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="hero-container">
            <h1>Empowering Your Financial Future</h1>
            <p>Global solutions tailored for your financial success.</p>
            <div className="cta-buttons">
                <button className="cta-button">Learn More</button>
                <button className="cta-button">Get a Quote</button>
                <button className="cta-button" onClick={() => document.getElementById('contact-form').scrollIntoView()}>Contact Us</button>
            </div>

            <div className="calculator">
                <h2>Financial Calculator</h2>
                <input
                    type="number"
                    value={amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                />
                <button onClick={handleCalculate}>Calculate</button>
            </div>

            <div className="testimonials">
                <h2>What Our Clients Say</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial">
                            <p>"{testimonial.feedback}"</p>
                            <h4>- {testimonial.name}</h4>
                        </div>
                    ))}
                </Slider>
            </div>

            <div id="contact-form" className="contact-form">
                <h2>Contact Us</h2>
                {formSubmitted ? (
                    <p>Thank you for your message! We will get back to you soon.</p>
                ) : (
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            placeholder="Your Message"
                            required
                        />
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default HeroSection;
