import React from 'react'
import Navbar from './Navbar';
import Box from './Box';
import Hero from './Hero';
import ComingSoon from './ComingSoon';
import JoinUs from './JoinUs';
import ApplicationForm from './ApplicationForm';
import Footer from './Footer';


function HomePage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Box />
            <ComingSoon />
            <JoinUs />
            <ApplicationForm />
            <Footer />
            
        </>
     );
}

export default HomePage;