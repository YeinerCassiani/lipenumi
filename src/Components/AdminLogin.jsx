import React, { useState } from 'react';
import { iniciarSesion } from '../firebase/authService';

const AdminLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await iniciarSesion(email, password);
      onLoginSuccess();
    } catch (error) {
      setError('Credenciales incorrectas. Verifica tu email y contraseña.');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '2rem'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
    fontSize: '1.8rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: loading ? 'not-allowed' : 'pointer',
    opacity: loading ? 0.7 : 1
  };

  const errorStyle = {
    color: '#dc3545',
    textAlign: 'center',
    marginBottom: '1rem',
    padding: '0.5rem',
    backgroundColor: '#f8d7da',
    borderRadius: '3px'
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={titleStyle}>🔐 Panel de Administración</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
          Cuadro de Honor - Lipenumi
        </p>

        {error && <div style={errorStyle}>{error}</div>}

        <input
          type="email"
          placeholder="Email de administrador"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />

        <button 
          type="submit" 
          disabled={loading}
          style={buttonStyle}
        >
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>

        <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          Solo personal autorizado
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
