import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  
  return (
    <button 
      className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`} 
      onClick={toggleDarkMode}
    >
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;