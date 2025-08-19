import React, { useState, useEffect } from 'react';
import { observarAuthState } from '../firebase/authService';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

const AdminContainer = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = observarAuthState((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginSuccess = () => {
    // El estado se actualiza automáticamente por observarAuthState
  };

  const handleLogout = () => {
    // El estado se actualiza automáticamente por observarAuthState
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <h2>Cargando...</h2>
      </div>
    );
  }

  return (
    <>
      {user ? (
        <AdminPanel onLogout={handleLogout} />
      ) : (
        <AdminLogin onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default AdminContainer;
