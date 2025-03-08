
import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ theme, themeChange }) {
    return (
        <div className="theme-toggle-container">
            <button className="toggle-button" onClick={themeChange}>
                {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
            </button>
        </div>
    );
}

export default ThemeToggle;
