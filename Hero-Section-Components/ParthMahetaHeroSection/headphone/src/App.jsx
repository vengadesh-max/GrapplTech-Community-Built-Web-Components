// src/App.js
import React from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { UpdateFollower } from 'react-mouse-follower';
// import { color } from 'framer-motion';
import Hero from './components/HeroSection/Hero.jsx';
function App() {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower mouseOption={{
        backgroundColor : "white",
        zIndex: 999,
        followSpeed:1.5,
      }}>
      <Navbar />
      <Hero />
      </UpdateFollower>
    </main>
  );
}

export default App;
