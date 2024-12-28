import React from 'react';
import './hospitalService.css';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const HospitalServices = () => {
  const services = [
    { title: 'Emergency Care', description: '24/7 emergency services with highly trained staff and state-of-the-art facilities.', icon: '🩺' },
    { title: 'Cardiology', description: 'Comprehensive cardiac care including diagnostics, surgery, and rehabilitation.', icon: '❤️' },
    { title: 'Neurology', description: 'Expert care for neurological disorders, including stroke, epilepsy, and more.', icon: '🧠' },
    { title: 'Orthopedics', description: 'Advanced orthopedic services for bones, joints, and muscles.', icon: '🦴' },
    { title: 'Pediatrics', description: 'Compassionate care for children, from newborns to adolescents.', icon: '👶' },
    { title: 'Maternity', description: 'Complete maternity care, from prenatal to postnatal support.', icon: '🤰' },
    { title: 'Radiology', description: 'State-of-the-art imaging services, including MRI, CT scans, and X-rays.', icon: '🖼️' },
    { title: 'Oncology', description: 'Comprehensive cancer care, from diagnosis to treatment and beyond.', icon: '🎗️' },
  ];

  return (
    <>
    <Navbar/>
    <div className="services-container">
        
      <header className="services-header">
        <h1>Our Services</h1>
        <p>We offer a wide range of medical services to cater to all your healthcare needs.</p>
      </header>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HospitalServices;
