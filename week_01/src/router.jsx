import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
// import Home from './pages/Home';
import ErrorPage from './pages/error/ErrorPage';
import NotFoundPage from './pages/error/NotFoundPage';
import AgeCheck from './pages/age-check/AgeCheck';
import ShowMessage from './pages/show-message/ShowMessage';
import ListOfPersons from './pages/list-of-persons/ListOfPersons';
import HelloWorld from './pages/hello-world/HelloWorldPage';
import PersonsPage from './pages/persons/PersonsPage';
import PostsPage from './pages/posts/PostsPage';
import QuotesPage from './pages/quotes/quotesPage';
import StudentsPage from './pages/students/StudentsPage';
import MoviesPage from './pages/movies/MoviesPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
      <Route index element={<AgeCheck />} />
      <Route path="show-message" element={<ShowMessage />} />
      <Route path="/list-of-persons" element={<ListOfPersons />} />
      <Route path="/hello-world" element={<HelloWorld />} />
      <Route path="/persons" element={<PersonsPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/quotes" element={<QuotesPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default router;
