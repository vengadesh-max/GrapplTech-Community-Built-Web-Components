import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }
    
  return (

    <nav className='container'>
      <div className='title'>
        <span class="material-symbols-outlined">
          palette
        </span>
        <span className='logo'>Art Station</span>        
      </div>

        
        <ul className={mobileMenu?'':'hide-menu'}>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li><button className='btn'>Login</button></li>
        </ul>

        <span class="material-symbols-outlined menu-icon" onClick={toggleMenu}>
          menu
        </span>
        
    </nav>

  )
}

export default Navbar