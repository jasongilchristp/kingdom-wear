import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem('kingdom_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login logic
    const isMockAdmin = email === 'admin@kingdomwear.com';
    const mockUser = {
      id: isMockAdmin ? 'admin-1' : 'user-' + Date.now(),
      email: email,
      isAdmin: isMockAdmin,
    };
    
    setUser(mockUser);
    localStorage.setItem('kingdom_user', JSON.stringify(mockUser));
    return mockUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kingdom_user');
  };

  const value = {
    user,
    isAdmin: user?.isAdmin || false,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
