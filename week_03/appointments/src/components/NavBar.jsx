import { Link, NavLink } from 'react-router-dom';
import routes from '../routes/routes';
import { BiCalendar } from 'react-icons/bi';
import { cn } from '../lib/utils';

const NavBar = () => {
  return (
    <nav className="border border-b-orange-400 bg-amber-50 p-6 text-lg shadow">
      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-xl items-center gap-4 ">
        <Link
          to="/"
          className="text-3xl  text-amber-700 transition hover:text-amber-600"
        >
          <BiCalendar />
        </Link>
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              cn(
                isActive ? 'font-semibold text-amber-700' : '',
                'transition hover:text-amber-600'
              )
            }
          >
            {route.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
