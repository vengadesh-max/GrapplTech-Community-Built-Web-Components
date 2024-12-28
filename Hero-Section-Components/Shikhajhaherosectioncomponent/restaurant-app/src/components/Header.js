import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Foodies Paradise</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
