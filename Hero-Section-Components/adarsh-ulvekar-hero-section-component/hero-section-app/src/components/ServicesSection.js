// src/components/ServicesSection.js
import React from 'react';
import './ServicesSection.css';

const services = [
    { title: '', description: 'IT Certification.' },
    { title: '', description: 'Accounting.' },
    { title: '', description: 'Network Security.' },
    { title: '', description: 'Development.' },
    { title: '', description: 'Data Science.' },
    { title: '', description: 'Cloud Computing.' },

];

const ServicesSection = () => {
    return (
        <section className="services-section" id="services">
            <h2>Our Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
