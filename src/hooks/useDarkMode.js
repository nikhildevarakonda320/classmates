import { useEffect } from "react";

export const useDarkMode = (darkMode) => {
  // Apply dark mode class to body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Apply dark mode to AG Grid
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const applyDarkStyles = () => {
        // Apply styles to all grid elements
        document.querySelectorAll('.ag-theme-material .ag-header-cell').forEach(el => {
          el.style.backgroundColor = darkMode ? '#333' : '';
          el.style.color = darkMode ? '#fff' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-cell').forEach(el => {
          el.style.backgroundColor = darkMode ? '#444' : '';
          el.style.color = darkMode ? '#fff' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-row').forEach(el => {
          el.style.backgroundColor = darkMode ? '#444' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-row-odd').forEach(el => {
          el.style.backgroundColor = darkMode ? '#3a3a3a' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-row-even').forEach(el => {
          el.style.backgroundColor = darkMode ? '#444' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-paging-panel').forEach(el => {
          el.style.backgroundColor = darkMode ? '#333' : '';
          el.style.color = darkMode ? '#fff' : '';
        });
        
        document.querySelectorAll('.ag-theme-material .ag-paging-button').forEach(el => {
          el.style.color = darkMode ? '#fff' : '';
        });
      };
      
      // Apply styles immediately
      applyDarkStyles();
      
      // Set up a mutation observer to handle dynamically added elements
      const observer = new MutationObserver(applyDarkStyles);
      const gridElement = document.querySelector('.ag-theme-material');
      
      if (gridElement) {
        observer.observe(gridElement, { 
          childList: true,
          subtree: true 
        });
      }
      
      return () => {
        observer.disconnect();
      };
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [darkMode]);
};