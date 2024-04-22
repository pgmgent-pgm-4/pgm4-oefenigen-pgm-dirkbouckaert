import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', JSON.stringify(false));
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', JSON.stringify(true));
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      {isDarkMode ? (
        <FaSun
          onClick={toggleDarkMode}
          className="cursor-pointer text-4xl text-yellow-500"
        />
      ) : (
        <FaMoon onClick={toggleDarkMode} className="cursor-pointer text-4xl" />
      )}
    </>
  );
};

export default ToggleDarkMode;
