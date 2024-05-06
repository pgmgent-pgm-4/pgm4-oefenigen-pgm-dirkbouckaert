import React from 'react';
import ReactDOM from 'react-dom/client';

// Context
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

// Styles
import './index.css';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <ThemeToggle />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
