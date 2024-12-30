import React from 'react';
import { ExternalLink } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About 🌎 Translatify 💬🔤
      </h1>
      
      <section className="about-section">
        <h2>Overview</h2>
        <p>Translatify
         is a free translation tool that helps you break down language barriers. 
        Our platform supports 12 languages and provides instant translations with text-to-speech capabilities.</p>
      </section>

      <section className="about-section">
        <h2>Technology Stack</h2>
        <div className="tech-stack">
          <div className="tech-item">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>React Router</li>
              <li>Tailwind CSS</li>
              <li>Lucide Icons</li>
            </ul>
          </div>
          
          <div className="tech-item">
            <h3>Translation API</h3>
            <ul>
              <li>MyMemory Translated API</li>
              <li>Web Speech API (for text-to-speech)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>API Information</h2>
        <div className="api-info">
          <h3>MyMemory Translated API Limits:</h3>
          <ul>
            <li>Free usage: 5000 words per day</li>
            <li>Maximum text length: 500 characters per request</li>
            <li>Anonymous usage: 100 requests per day</li>
            <li>Response time: ~1-2 seconds</li>
          </ul>
          
          <div className="api-note">
            <p>For more information about the API, visit:</p>
            <a href="https://mymemory.translated.net/doc/spec.php" 
               target="_blank" 
               rel="noopener noreferrer"
               className="api-link">
              MyMemory API Documentation
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Supported Languages</h2>
        <div className="language-grid">
          {[
            "English", "Spanish", "French", "German",
            "Italian", "Portuguese", "Russian", "Japanese",
            "Korean", "Chinese", "Arabic", "Hindi"
          ].map(lang => (
            <div key={lang} className="language-item">{lang}</div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Privacy & Data</h2>
        <p>We don't store any of your translations. All translations are processed in real-time and immediately discarded. 
        Your privacy and data security are our top priorities.</p>
      </section>
    </div>
  );
};

export default About;