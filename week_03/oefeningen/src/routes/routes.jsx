import Home from '../pages/Home';
import ProductsPage from '../pages/ProductsPage';

export default [
  { addToNavbar: true, name: 'Home', path: '/', element: <Home /> },
  {
    addToNavbar: true,
    name: 'Products',
    path: '/products',
    element: <ProductsPage />,
  },
];
