import { Link, NavLink } from 'react-router-dom';
import navItems from '../lib/navItems.jsx';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-6 bg-black p-6">
      <Link className="text-2xl font-semibold text-white" to="/">
        Week 2
      </Link>
      <div className="flex flex-wrap gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            className={({ isActive }) =>
              isActive ? 'text-white' : 'text-gray-400'
            }
            to={item.path}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
