import React from 'react';
import './App.css';
import logo from './LOGO.png';
import appPhoto from './appimg.png';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#BEATIFY">
            <img src={logo} className="logo" alt="BEATIFY Logo" />
          </a>
        </div>
        <ul className="navbar-links">
          <li className="dropdown">
            <a href="#Your-Playlist">Your Playlist</a>
            <ul className="dropdown-menu">
              <li><a href="#playlist1">Playlist 1</a></li>
              <li><a href="#playlist2">Playlist 2</a></li>
              <li><a href="#playlist3">Playlist 3</a></li>
            </ul>
          </li>
          <li><a href="#about">About</a></li>
          <li><a href="#support">Support</a></li>
          <li><a href="#free-trial" className="free-trial" onClick={"wwww.spotify.com"}>Free Trial</a></li>
        </ul>
      </nav>
      <div id="BEATIFY" className="hero-section">
        <div className="hero-content">
          <h1 className="slogan">LISTEN. INSPIRE. EXECUTE.</h1>
          <p className="sub-slogan">Listen to the best-in-sound music in just one click.</p>
          <a href="#start-trial" className="start-trial-button">Start a Free Trial</a>
        </div>
        <div className="app-photo">
          <img src={appPhoto} alt="App Screenshot" />
        </div>
      </div>
      <div className="content">
        {}
        <section className="faq">
          <h2>Frequently Asked Questions (FAQ)</h2>
          <div className="faq-item">
            <h3>What is BEATIFY?</h3>
            <p>BEATIFY is a music streaming platform that offers personalized playlists and recommendations.</p>
          </div>
          <div className="faq-item">
            <h3>How do I create a playlist?</h3>
            <p>You can create a playlist by going to the "Your Playlist" section and clicking on "Create New Playlist".</p>
          </div>
          <div className="faq-item">
            <h3>Can I share my playlists?</h3>
            <p>Yes, you can share your playlists with others by using the share feature available in the playlist options.</p>
          </div>
          {}
        </section>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2024 BEATIFY MUSIC</p>
          </div>
          <ul className="footer-links">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms and Conditions</a></li>
            <li><a href="#cookies">Cookie Settings</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
