import { Link, NavLink } from 'react-router-dom';
import routes from '../routes/routes.jsx';
import { cn } from '../lib/utils.js';

const Navbar = () => {
  return (
    <nav
      className="flex items-center justify-between gap-6 bg-slate-50
                   p-6 text-lime-700 shadow"
    >
      <Link className="text-2xl font-semibold" to="/">
        {import.meta.env.VITE_APP_NAME}
      </Link>

      <div className="flex flex-wrap items-center gap-4">
        {routes.map(
          (item) =>
            item.addToNavbar && (
              <NavLink
                key={item.name}
                className={({ isActive }) =>
                  cn(
                    'border-b-2 border-transparent px-4 py-2 transition hover:border-b-2 hover:border-lime-700',
                    isActive && 'border-b-2 border-lime-700',
                    item.path === '/contact' &&
                      'btn btn-secondary hover:bordertransparent border-b-2 border-transparent'
                  )
                }
                to={item.path}
              >
                {item.name}
              </NavLink>
            )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
