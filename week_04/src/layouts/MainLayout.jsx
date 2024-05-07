import { Outlet } from 'react-router-dom/dist';
import { useAuthContext } from '../contexts/AuthContext';

// Components
import Navbar from '../components/Navbar';

const MainLayout = () => {
  const { isAuthReady } = useAuthContext();

  return (
    <>
      {isAuthReady && (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MainLayout;
