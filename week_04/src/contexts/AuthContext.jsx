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
    setUser(user);
    localStorage.setItem('pgmgent.user', JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pgmgent.user');
  };

  return (
    <AuthContext.Provider value={{ isAuthReady, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
