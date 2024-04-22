import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import navItems from './lib/navItems';
import ErrorPage from './pages/error/ErrorPage';
import NotFoundPage from './pages/error/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      {navItems.map(({ name, path, element }) => (
        <Route key={name} path={path} element={element} />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
