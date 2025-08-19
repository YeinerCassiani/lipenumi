import React, { useState } from 'react';
import { crearUsuarioAdmin } from '../firebase/authService';

const CreateAdmin = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreateAdmin = async () => {
    setLoading(true);
    setStatus('Creando usuario admin...');

    try {
      const user = await crearUsuarioAdmin('admin@lipenumi.com.co', 'Lipenumi2025!');
      setStatus(`✅ Usuario admin creado exitosamente: ${user.email}`);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setStatus('✅ El usuario admin ya existe');
      } else {
        setStatus(`❌ Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>🔧 Crear Usuario Admin</h1>
      <p>Email: admin@lipenumi.com.co</p>
      <p>Password: Lipenumi2025!</p>
      
      <button 
        onClick={handleCreateAdmin}
        disabled={loading}
        style={{
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '16px',
          margin: '1rem'
        }}
      >
        {loading ? 'Creando...' : 'Crear Usuario Admin'}
      </button>

      {status && (
        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '5px',
          maxWidth: '400px'
        }}>
          {status}
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <a href="/admin" style={{ 
          color: '#007bff', 
          textDecoration: 'none',
          fontSize: '18px'
        }}>
          → Ir al Panel Admin
        </a>
      </div>
    </div>
  );
};

export default CreateAdmin;
