import { FaMoon, FaSun } from 'react-icons/fa';
import { useThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="absolute right-2 top-2"
    >
      {isDarkMode ? (
        <FaSun size={24} className="text-yellow-400" />
      ) : (
        <FaMoon size={24} className="text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
