import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('pgmgent.user')));
    setIsAuthReady(true);
  }, []);

  const login = (user) => {
    // Update storage
    localStorage.setItem('pgmgent.user', JSON.stringify(user));
    // Update state
    setUser(user);
    setIsAuthReady(true);
  };

  const logout = () => {
    // Update storage
    localStorage.removeItem('pgmgent.user');
    // Update state
    setUser(null);
    setIsAuthReady(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthReady, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
