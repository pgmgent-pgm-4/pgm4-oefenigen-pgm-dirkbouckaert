import { createContext, useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('pgmgent.user'))
  );

  const login = (user) => {
    setUser(user);
    localStorage.setItem('pgmgent.user', JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pgmgent.user');
  };

  useEffect(() => {
    // console.log('user:', user);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
