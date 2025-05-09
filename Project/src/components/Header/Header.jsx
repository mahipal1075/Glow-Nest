import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="header">
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle-button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="header-contents">
        <h2>Nature’s Touch, Skincare You Deserve</h2>
        <p>Discover skincare made with love, powered by nature. Pure. Gentle. Effective.</p>
        <button className="shop-now-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Header;
