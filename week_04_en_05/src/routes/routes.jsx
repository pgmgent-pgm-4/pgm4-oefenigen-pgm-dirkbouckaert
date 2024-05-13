import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import EmojiPage from '../pages/emojis/EmojiPage';
import Todos from '../pages/todos/Todos';

export default [
  { addToNavbar: true, name: 'Home', path: '/', element: <Home /> },
  { addToNavbar: true, name: 'Todos', path: '/todos', element: <Todos /> },
  {
    addToNavbar: true,
    name: 'Emojis',
    path: '/emojis',
    element: <EmojiPage />,
  },
  { addToNavbar: true, name: 'Login', path: '/login', element: <Login /> },
  { addToNavbar: false, name: 'Logout', path: '/logout', element: null },
];
