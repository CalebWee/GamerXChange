// Layout.tsx

import React, { useState, useEffect, ReactNode } from 'react';
import { Button } from './ui/button';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}>
      <Button
        onClick={toggleDarkMode}
        className="absolute text-s top-4 right-4 px-4 py-2 bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text rounded"
      >
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </Button>
      {React.cloneElement(children as React.ReactElement, { isdarkmode: isDarkMode.toString(), toggledarkmode: toggleDarkMode.toString() })}
    </div>
  );
};

export default Layout;
