import Toast from '../components/ui/toast';
import { showToast } from '../components/ui/toast';
import React, { useState, useEffect, ReactNode } from 'react';
import { Button } from './ui/button';
import Navbar from './navbar';

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
    <div className={`h-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-dark-text scrollbar-track-dark-background min-h-screen ${isDarkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}>
      <Navbar/>
      <Button
        onClick={toggleDarkMode}
        variant='default'
        className="absolute text-s top-4 right-4 px-4 py-2 bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text rounded"
      >
        {isDarkMode ? 'Light' : 'Dark'} Mode
      </Button>
      <Toast/>
      {React.cloneElement(children as React.ReactElement, { isdarkmode: isDarkMode.toString(), toggledarkmode: toggleDarkMode.toString() })}
    </div>
  );
};

export default Layout;
