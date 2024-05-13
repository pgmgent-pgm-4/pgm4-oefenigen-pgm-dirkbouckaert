import { Link, NavLink } from 'react-router-dom';
import routes from '../routes/routes.jsx';
import { useAuthContext } from '../contexts/AuthContext.jsx';

const Navbar = () => {
  const { user, logout } = useAuthContext();

  return (
    <nav className="relative bg-black py-4">
      <div className="app-container flex items-center justify-between gap-6">
        <Link className="text-2xl font-semibold text-white" to="/">
          React
        </Link>
        <div className="flex flex-wrap gap-4">
          {routes.map((item) => {
            if (item.path == '/login' && user) {
              return (
                <button key="logout" className="text-gray-400" onClick={logout}>
                  Logout
                </button>
              );
            } else if (item.addToNavbar) {
              return (
                <NavLink
                  key={item.name}
                  className={({ isActive }) =>
                    isActive ? 'text-white' : 'text-gray-400'
                  }
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
