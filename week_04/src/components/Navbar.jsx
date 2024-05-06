import { Link, NavLink } from 'react-router-dom';
import routes from '../routes/routes.jsx';

const Navbar = () => {
  return (
    <nav className="bg-black py-4">
      <div className="app-container flex items-center justify-between gap-6">
        <Link className="text-2xl font-semibold text-white" to="/">
          React
        </Link>
        <div className="flex flex-wrap gap-4">
          {routes.map(
            (item) =>
              item.addToNavbar && (
                <NavLink
                  key={item.name}
                  className={({ isActive }) =>
                    isActive ? 'text-white' : 'text-gray-400'
                  }
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
