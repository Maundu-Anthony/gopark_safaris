import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

// Simple SHA-256 hash function for password hashing
const hashPassword = async (password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in (from localStorage)
    const storedUser = localStorage.getItem('adminUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Use Vercel backend endpoint
      const apiUrl = 'https://gopark-safaris-backend.vercel.app/admin';
      
      // Fetch admin credentials from backend
      const response = await fetch(apiUrl);
      const adminData = await response.json();
      
      // Hash the input password
      const hashedPassword = await hashPassword(password);
      
      // Check credentials - compare email and hashed password
      if (email === adminData.email && hashedPassword === adminData.passwordHash) {
        const userData = { email, name: adminData.name };
        setUser(userData);
        localStorage.setItem('adminUser', JSON.stringify(userData));
        return { success: true };
      }
      return { success: false, error: 'Invalid credentials' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Unable to connect to server. Please try again later.' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('adminUser');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
