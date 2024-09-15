import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1><span style={{border:'10px solid white', padding: '0 15px', borderRadius: '10px'}}>Art</span> conveys more than words</h1>
            <p>Create ● Share ● Connect ● Inspire</p>
            <p>Join our platform to connect with the biggest artistic minds of the world. Share your work, build connections and grow in your community. Become an inspiration for young artists.</p>
            <button className='btn'>Join Now <span class="material-symbols-outlined">arrow_right_alt</span></button>
        </div>
    </div>
  )
}

export default Hero