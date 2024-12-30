import React from 'react';
import './DeveloperInfo.css';

const DeveloperInfo = () => {
  return (
    <div className="developer-info">
      <div className="info-container">
        <div className="profile-picture">
          <img src="https://avatars.githubusercontent.com/u/176396565?v=4" alt="Profile" />
        </div>

        <div className="personal-info">
          <h1>Pritesh Pagar</h1>
          <p className="bio">
            I am a passionate Computer Engineering student at COEP, with a deep interest in full-stack web development and AI. I love building impactful solutions using modern technologies like React, Node.js, and more.
          </p>

          <div className="links">
            <a href="https://github.com/PriteshPagar33" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/pritesh-pagar-6157582ab/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=priteshpagar9199@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i> Email
            </a>
            <a href="https://www.instagram.com/priteshpagar_0709/" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://discord.com/invite/brEAuBVt" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-discord"></i> Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInfo;
