import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Kullanıcı doğrulama kontrolü
  const checkAuth = async () => {
    try {
      const res = await axios.get('/api/auth/me', { withCredentials: true });
      setUser(res.data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  // Kayıt fonksiyonu
  const register = async (email, password) => {
    const res = await axios.post(
      '/api/auth/register', 
      { email, password },
      { withCredentials: true }
    );
    setUser(res.data);
    return res.data;
  };

  // Giriş fonksiyonu
  const login = async (email, password) => {
    const res = await axios.post(
      '/api/auth/login', 
      { email, password },
      { withCredentials: true }
    );
    setUser(res.data);
    return res.data;
  };

  // Çıkış fonksiyonu
  const logout = async () => {
    await axios.post('/api/auth/logout', {}, { withCredentials: true });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      register, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);