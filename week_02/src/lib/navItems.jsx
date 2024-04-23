import BeersPage from '../pages/BeersPage';
import ColorsPage from '../pages/ColorsPage';
import EmotionPage from '../pages/EmotionPage';
import Home from '../pages/Home';
import LightDimmerPage from '../pages/LightDimmerPage';
import TeamPage from '../pages/TeamPage';
import ToastPage from '../pages/ToastPage';
import TodoPage from '../pages/TodoPage';
import ToggleDarkModePage from '../pages/ToggleDarkModePage';
import ToggleMessagePage from '../pages/ToggleMessagePage';

export default [
  { name: 'Counter', path: '/', element: <Home /> },
  {
    name: 'Toggle message',
    path: '/toggle-message',
    element: <ToggleMessagePage />,
  },
  {
    name: 'Toggle dark mode',
    path: '/toggle-dark-mode',
    element: <ToggleDarkModePage />,
  },
  { name: 'Light Dimmer', path: '/light-dimmer', element: <LightDimmerPage /> },
  { name: 'Colors', path: '/colors', element: <ColorsPage /> },
  { name: 'Todo', path: '/todo', element: <TodoPage /> },
  { name: 'Emotion', path: '/emotion', element: <EmotionPage /> },
  { name: 'Beers', path: '/beers', element: <BeersPage /> },
  { name: 'Team', path: '/team', element: <TeamPage /> },
  { name: 'Toast', path: '/toast', element: <ToastPage /> },
];
