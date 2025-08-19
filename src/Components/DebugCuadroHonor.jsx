import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

const DebugCuadroHonor = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [periodo, setPeriodo] = useState('1');

  const obtenerTodosEstudiantes = async () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('🔍 Obteniendo todos los estudiantes...');
      
      // Consulta simple sin orderBy primero
      const querySnapshot = await getDocs(collection(db, 'estudiantes'));
      const estudiantesData = [];
      
      querySnapshot.forEach((doc) => {
        console.log('📄 Documento encontrado:', doc.id, doc.data());
        estudiantesData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setEstudiantes(estudiantesData);
      console.log('✅ Total estudiantes encontrados:', estudiantesData.length);
      
    } catch (error) {
      console.error('❌ Error obteniendo estudiantes:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const obtenerPorPeriodo = async () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('🔍 Obteniendo estudiantes por período:', periodo);
      
      // Consulta con filtro pero sin orderBy
      const q = query(
        collection(db, 'estudiantes'),
        where('periodo', '==', periodo)
      );
      
      const querySnapshot = await getDocs(q);
      const estudiantesData = [];
      
      querySnapshot.forEach((doc) => {
        console.log('📄 Documento filtrado:', doc.id, doc.data());
        estudiantesData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      // Ordenar manualmente
      estudiantesData.sort((a, b) => (a.orden || 0) - (b.orden || 0));
      
      setEstudiantes(estudiantesData);
      console.log('✅ Total estudiantes filtrados:', estudiantesData.length);
      
    } catch (error) {
      console.error('❌ Error obteniendo estudiantes por período:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const probarConOrderBy = async () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('🔍 Probando con orderBy...');
      
      const q = query(
        collection(db, 'estudiantes'),
        where('periodo', '==', periodo),
        orderBy('orden', 'asc')
      );
      
      const querySnapshot = await getDocs(q);
      const estudiantesData = [];
      
      querySnapshot.forEach((doc) => {
        estudiantesData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setEstudiantes(estudiantesData);
      console.log('✅ Consulta con orderBy exitosa');
      
    } catch (error) {
      console.error('❌ Error con orderBy:', error);
      setError(`Error con orderBy: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1>🐛 Debug Cuadro de Honor</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <label>Período: </label>
        <select 
          value={periodo} 
          onChange={(e) => setPeriodo(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        >
          <option value="1">Período 1</option>
          <option value="2">Período 2</option>
          <option value="3">Período 3</option>
          <option value="4">Período 4</option>
        </select>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={obtenerTodosEstudiantes}
          disabled={loading}
          style={{ 
            padding: '0.5rem 1rem', 
            marginRight: '1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Cargando...' : 'Obtener Todos'}
        </button>

        <button 
          onClick={obtenerPorPeriodo}
          disabled={loading}
          style={{ 
            padding: '0.5rem 1rem', 
            marginRight: '1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Cargando...' : 'Filtrar por Período'}
        </button>

        <button 
          onClick={probarConOrderBy}
          disabled={loading}
          style={{ 
            padding: '0.5rem 1rem',
            backgroundColor: '#ffc107',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Cargando...' : 'Probar OrderBy'}
        </button>
      </div>

      {error && (
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#f8d7da', 
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          marginBottom: '1rem',
          color: '#721c24'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
        <h3>Resultados ({estudiantes.length} estudiantes):</h3>
        
        {estudiantes.length === 0 ? (
          <p>No se encontraron estudiantes</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '0.5rem', border: '1px solid #ddd' }}>ID</th>
                <th style={{ padding: '0.5rem', border: '1px solid #ddd' }}>Nombre</th>
                <th style={{ padding: '0.5rem', border: '1px solid #ddd' }}>Grado</th>
                <th style={{ padding: '0.5rem', border: '1px solid #ddd' }}>Período</th>
                <th style={{ padding: '0.5rem', border: '1px solid #ddd' }}>Nivel</th>
                <th style={{ padding: '0.5rem', border: '1px solid #ddd' }}>Orden</th>
                <th style={{ padding: '0.5rem', border: '1px solid #ddd' }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {estudiantes.map((est) => (
                <tr key={est.id}>
                  <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{est.id}</td>
                  <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{est.nombre}</td>
                  <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{est.grado}</td>
                  <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{est.periodo}</td>
                  <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{est.nivel}</td>
                  <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>{est.orden}</td>
                  <td style={{ padding: '0.5rem', border: '1px solid #ddd' }}>
                    {est.imagen_url ? '✅' : '❌'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href="/admin" style={{ color: '#007bff' }}>← Volver al Admin</a>
        {' | '}
        <a href="/" style={{ color: '#007bff' }}>Ir al Cuadro de Honor</a>
      </div>
    </div>
  );
};

export default DebugCuadroHonor;
