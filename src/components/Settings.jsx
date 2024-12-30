import React from 'react';
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from 'lucide-react';
import './Settings.css';

const Settings = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      
      <div className="settings-section">
        <h2>Appearance</h2>
        <div className="setting-item">
          <label>Theme</label>
          <button 
            className="theme-toggle-button" 
            onClick={toggleTheme}
          >
            {isDarkMode ? <Sun /> : <Moon />}
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h2>Language</h2>
        <div className="setting-item">
          <label>Interface Language</label>
          <select className="select-input">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <h2>Preferences</h2>
        <div className="setting-item">
          <label>Auto-Translate</label>
          <input type="checkbox" className="toggle-input" />
        </div>
        <div className="setting-item">
          <label>Save History</label>
          <input type="checkbox" className="toggle-input" />
        </div>
      </div>
    </div>
  );
};

export default Settings;