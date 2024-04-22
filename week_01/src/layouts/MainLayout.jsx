import { Outlet } from 'react-router-dom/dist';
import Navbar from '../components/Navbar';


const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
