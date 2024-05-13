import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Theme context
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

// Apollo Client
import { HYGRAPH_URL } from './lib/consts';
const apolloClient = new ApolloClient({
  uri: HYGRAPH_URL,
  cache: new InMemoryCache(),
});

// Styles
import './index.css';

// Router
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { AuthProvider } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={apolloClient}>
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ThemeToggle />
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  </ApolloProvider>
);
