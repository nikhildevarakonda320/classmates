import React from "react";
import { Button } from "react-bootstrap";

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <Button 
      variant={darkMode ? "light" : "dark"} 
      onClick={toggleDarkMode}
      className="mt-2"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default ThemeToggle;