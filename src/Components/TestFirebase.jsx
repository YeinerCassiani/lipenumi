import React, { useState } from 'react';
import { auth, db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const TestFirebase = () => {
  const [status, setStatus] = useState('');

  const testConnection = () => {
    setStatus('Probando conexión...');
    
    // Verificar si Firebase está conectado
    if (auth && db) {
      setStatus('✅ Firebase conectado correctamente');
    } else {
      setStatus('❌ Error en la conexión de Firebase');
    }
  };

  const testFirestore = async () => {
    setStatus('Probando Firestore...');
    
    try {
      await addDoc(collection(db, 'test'), {
        message: 'Test connection',
        timestamp: new Date()
      });
      setStatus('✅ Firestore funciona correctamente');
    } catch (error) {
      setStatus(`❌ Error en Firestore: ${error.message}`);
    }
  };

  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1>🔧 Probar Conexión Firebase</h1>
      
      <div style={{ margin: '2rem 0' }}>
        <button onClick={testConnection} style={{
          padding: '12px 24px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          margin: '0.5rem',
          cursor: 'pointer'
        }}>
          Probar Conexión
        </button>
        
        <button onClick={testFirestore} style={{
          padding: '12px 24px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          margin: '0.5rem',
          cursor: 'pointer'
        }}>
          Probar Firestore
        </button>
      </div>

      {status && (
        <div style={{ 
          marginTop: '1rem', 
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '5px',
          maxWidth: '400px',
          margin: '1rem auto'
        }}>
          {status}
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <h3>Configuración actual:</h3>
        <p>Project ID: lipenumi-cuadro-honor</p>
        <p>Auth Domain: lipenumi-cuadro-honor.firebaseapp.com</p>
      </div>
    </div>
  );
};

export default TestFirebase;
