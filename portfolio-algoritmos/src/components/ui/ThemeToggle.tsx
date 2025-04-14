import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="theme-toggle">
      <i className="fas fa-sun theme-icon"></i>
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={theme === 'dark'} 
          onChange={toggleTheme} 
        />
        <span className="toggle-slider"></span>
      </label>
      <i className="fas fa-moon theme-icon"></i>
    </div>
  );
};

export default ThemeToggle; 