
import React, { useState } from 'react';

interface Props {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const ThemeToggle: React.FC<Props> = ({ darkMode, setDarkMode }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="fixed top-36 right-8 z-[1050]">
      <button 
        onClick={() => setShowOptions(!showOptions)}
        className="w-12 h-12 bg-gray-900 dark:bg-gray-700 flex items-center justify-center rounded-full text-white shadow-xl hover:rotate-90 transition-all duration-300"
      >
        <i className="bi bi-gear-fill"></i>
      </button>
      
      {showOptions && (
        <div className="absolute top-16 right-0 w-48 bg-white dark:bg-dark-card shadow-2xl rounded-xl p-2 border border-gray-100 dark:border-dark-border overflow-hidden animate-fade-in-down">
          <button 
            onClick={() => { setDarkMode(false); setShowOptions(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${!darkMode ? 'bg-primary text-white' : 'text-gray-600 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            <i className="bi bi-sun-fill"></i> Light Mode
          </button>
          <button 
            onClick={() => { setDarkMode(true); setShowOptions(false); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm mt-1 transition-colors ${darkMode ? 'bg-primary text-white' : 'text-gray-600 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-800'}`}
          >
            <i className="bi bi-moon-stars-fill"></i> Dark Mode
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
