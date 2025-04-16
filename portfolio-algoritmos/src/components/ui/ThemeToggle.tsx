import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="theme-toggle">
      {/* Ícone do Sol (modo claro) */}
      <svg 
        className={`theme-icon ${theme === 'light' ? 'active' : ''}`}
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" 
          stroke={theme === 'light' ? '#F1FA8C' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M12 1V3" 
          stroke={theme === 'light' ? '#F1FA8C' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M12 21V23" 
          stroke={theme === 'light' ? '#F1FA8C' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M4.22 4.22L5.64 5.64" 
          stroke={theme === 'light' ? '#F1FA8C' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M18.36 18.36L19.78 19.78" 
          stroke={theme === 'light' ? '#F1FA8C' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M1 12H3" 
          stroke={theme === 'light' ? '#F1FA8C' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M21 12H23" 
          stroke={theme === 'light' ? '#F1FA8C' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M4.22 19.78L5.64 18.36" 
          stroke={theme === 'light' ? '#F1FA8C' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M18.36 5.64L19.78 4.22" 
          stroke={theme === 'light' ? '#F1FA8C' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={theme === 'dark'} 
          onChange={toggleTheme} 
          aria-label="Alternar tema claro/escuro"
        />
        <span className="toggle-slider"></span>
      </label>
      
      {/* Ícone da Lua (modo escuro) */}
      <svg 
        className={`theme-icon ${theme === 'dark' ? 'active' : ''}`}
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" 
          stroke={theme === 'dark' ? '#BD93F9' : '#6272A4'} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill={theme === 'dark' ? 'rgba(189, 147, 249, 0.2)' : 'none'}
        />
      </svg>
    </div>
  );
};

export default ThemeToggle; 