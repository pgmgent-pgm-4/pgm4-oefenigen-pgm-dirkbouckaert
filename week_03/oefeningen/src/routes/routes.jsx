import StudentDetail from '../components/students/StudentDetail';
import Home from '../pages/Home';
import ProductsPage from '../pages/ProductsPage';
import StudentsPage from '../pages/StudentsPage';

export default [
  { addToNavbar: true, name: 'Home', path: '/', element: <Home /> },
  {
    addToNavbar: true,
    name: 'Products',
    path: '/products',
    element: <ProductsPage />,
  },
  {
    addToNavbar: true,
    name: 'Students',
    path: '/students',
    element: <StudentsPage />,
  },
  {
    addToNavbar: false,
    name: 'Student',
    path: '/students/:id',
    element: <StudentDetail />,
  },
];
