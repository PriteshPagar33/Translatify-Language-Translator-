import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  Menu,
  HelpCircle,
  MessageCircle,
  Info,
  Settings,
  Sun,
  Moon,
  Home,
  User,
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import './Layout.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const menuItems = [
    { path: '/', icon: <Home size={20} />, label: 'Home' },
    { path: '/about', icon: <Info size={20} />, label: 'About' },
    { path: '/feedback', icon: <MessageCircle size={20} />, label: 'Feedback' },
    { path: '/help', icon: <HelpCircle size={20} />, label: 'Help' },
    { path: '/settings', icon: <Settings size={20} />, label: 'Settings' },
    { path: '/developer-info', icon: <User size={20} />, label: 'Developer Info' },
  ];

  return (
    <div className="layout-container" data-theme={isDarkMode ? 'dark' : 'light'}>
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="logo">
            <Menu size={24} />
          </span>
          <Link to="/" className="logo-text">
            🌎 Translatify 💬🔤
          </Link>
        </div>

        <nav className="nav-menu">
          {menuItems.map((item) => (
            <button
              key={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* <div className="theme-switcher">
          <button onClick={toggleTheme} className="theme-button">
            <span className="icon">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </span>
            <span className="label">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div> */}
      </aside>

      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
