import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [points, setPoints] = useState(0);

  return (
    <AuthContext.Provider value={{ user, setUser, points, setPoints }}>
      {children}
    </AuthContext.Provider>
  );
};
