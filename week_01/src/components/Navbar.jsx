import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Age check', path: '/' },
    { name: 'Show message', path: '/show-message' },
    { name: 'List of persons', path: '/list-of-persons' },
    { name: 'Hello World', path: '/hello-world' },
    { name: 'Persons', path: '/persons' },
    { name: 'Posts', path: '/posts' },
    { name: 'Quotes', path: '/quotes' },
    { name: 'Students', path: '/students' },
    { name: 'Movies', path: '/movies' },
  ];
  return (
    <nav className="flex items-center justify-between gap-6 bg-black p-6">
      <Link className="text-2xl font-semibold text-white" to="/">
        Week 1
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
