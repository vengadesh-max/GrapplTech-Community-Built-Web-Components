// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS
import App from './App';
import { MouseFollower } from 'react-mouse-follower';

ReactDOM.render(
  <React.StrictMode>
    <MouseFollower />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
