import React, { useState } from 'react';
import './AboutUs.css';
import doctor1 from '../Images/doctor1.jpg';
import doctor2 from '../Images/doctor2.jpg';
import doctor3 from '../Images/doctor3.jpg';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

function AboutUs() {
    const [activeTab, setActiveTab] = useState('mission');

    return (
        <>
            <Navbar />
            <div className="about-us">
                <div className="about-hero">
                    <h1 className="hero-title">About Cura Health</h1>
                    <p className="hero-subtitle">Your Trusted Partner in Healthcare</p>
                </div>

                <div className="about-tabs">
                    <button className={activeTab === 'mission' ? 'tab active' : 'tab'} onClick={() => setActiveTab('mission')}>Our Mission</button>
                    <button className={activeTab === 'vision' ? 'tab active' : 'tab'} onClick={() => setActiveTab('vision')}>Our Vision</button>
                    <button className={activeTab === 'values' ? 'tab active' : 'tab'} onClick={() => setActiveTab('values')}>Our Values</button>
                    <button className={activeTab === 'team' ? 'tab active' : 'tab'} onClick={() => setActiveTab('team')}>Meet Our Team</button>
                </div>

                <div className="about-content">
                    {activeTab === 'mission' && (
                        <div className="tab-content">
                            <h2 className="section-title">Our Mission</h2>
                            <p className="section-description">
                                At Cura Health, our mission is to provide the highest quality healthcare services 
                                with a focus on patient well-being and satisfaction. We strive to create a caring 
                                and supportive environment where patients are treated with respect and dignity.
                            </p>
                        </div>
                    )}

                    {activeTab === 'vision' && (
                        <div className="tab-content">
                            <h2 className="section-title">Our Vision</h2>
                            <p className="section-description">
                                Our vision is to be the leading healthcare provider in the region, known for 
                                our innovative approach, advanced medical treatments, and compassionate care. 
                                We aim to make a positive impact on the health and well-being of our community.
                            </p>
                        </div>
                    )}

                    {activeTab === 'values' && (
                        <div className="tab-content">
                            <h2 className="section-title">Our Values</h2>
                            <ul className="values-list">
                                <li>Compassionate Care</li>
                                <li>Integrity</li>
                                <li>Excellence</li>
                                <li>Innovation</li>
                                <li>Collaboration</li>
                            </ul>
                        </div>
                    )}

                    {activeTab === 'team' && (
                        <div className="tab-content team-grid">
                            <div className="team-card">
                                <img src={doctor1} alt="Dr. John Doe" className="team-photo" />
                                <h3 className="team-name">Dr. John Doe</h3>
                                <p className="team-role">Chief Medical Officer</p>
                            </div>
                            <div className="team-card">
                                <img src={doctor2} alt="Dr. Jane Smith" className="team-photo" />
                                <h3 className="team-name">Dr. Jane Smith</h3>
                                <p className="team-role">Head of Surgery</p>
                            </div>
                            <div className="team-card">
                                <img src={doctor3} alt="Dr. Alice Johnson" className="team-photo" />
                                <h3 className="team-name">Dr. Alice Johnson</h3>
                                <p className="team-role">Pediatrics Specialist</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AboutUs;
