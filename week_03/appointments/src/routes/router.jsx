import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout.jsx';

// Routes
import routes from './routes.jsx';

// Pages
import Error from '../pages/error/Error.jsx';
import NotFound from '../pages/error/NotFound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error />}>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
