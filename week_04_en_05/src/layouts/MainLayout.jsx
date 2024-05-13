import { Outlet } from 'react-router-dom/dist';
import { useAuthContext } from '../contexts/AuthContext';

// Components
import Navbar from '../components/Navbar';
import LanguageToggle from '../components/language/LanguageToggle';

const MainLayout = () => {
  const { isAuthReady } = useAuthContext();

  return (
    <>
      {isAuthReady && (
        <>
          <Navbar />
          <LanguageToggle />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MainLayout;
