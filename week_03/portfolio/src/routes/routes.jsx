import Project from '../components/Project';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

export default [
  { addToNavbar: true, name: 'Home', path: '/', element: <Home /> },
  { addToNavbar: true, name: 'About', path: '/about', element: <About /> },
  {
    addToNavbar: true,
    name: 'Projects',
    path: '/projects',
    element: <Projects />,
  },
  {
    addToNavbar: false,
    name: 'Projects',
    path: '/projects/:id',
    element: <Project />,
  },
  { addToNavbar: true, name: 'Resume', path: '/resume', element: <Resume /> },
  {
    addToNavbar: true,
    name: 'Contact',
    path: '/contact',
    element: <Contact />,
  },
];
