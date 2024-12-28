import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className='contact-icons'>
      <a href="https://www.instagram.com/akash.thakur09__/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={32} />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={32} />
      </a>
      
      <a href="https://www.linkedin.com/in/thakur-aakash" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={32} />
      </a>
      <a href="https://t.me/a_akash_thakur" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={32} />
      </a>
      <a href="https://github.com/akashthakur09" target="_blank" rel="noopener noreferrer">
        <FaGithub size={32} />
      </a>
    </div>
  );
};

export default SocialIcons;
