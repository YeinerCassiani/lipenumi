import React, { useState, useEffect } from 'react';
import { 
  obtenerEstudiantes, 
  crearEstudiante, 
  actualizarEstudiante, 
  eliminarEstudiante 
} from '../firebase/estudiantesService';
import { cerrarSesion } from '../firebase/authService';

const AdminPanel = ({ onLogout }) => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    grado: '',
    periodo: '1',
    nivel: 'preescolar',
    orden: 1,
    imagen_url: ''
  });

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  const cargarEstudiantes = async () => {
    try {
      const data = await obtenerEstudiantes();
      setEstudiantes(data);
    } catch (error) {
      console.error('Error cargando estudiantes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingStudent) {
        await actualizarEstudiante(editingStudent.id, formData);
      } else {
        await crearEstudiante(formData);
      }
      
      await cargarEstudiantes();
      resetForm();
    } catch (error) {
      console.error('Error guardando estudiante:', error);
    }
  };

  const handleEdit = (estudiante) => {
    setEditingStudent(estudiante);
    setFormData({
      nombre: estudiante.nombre,
      grado: estudiante.grado,
      periodo: estudiante.periodo,
      nivel: estudiante.nivel,
      orden: estudiante.orden,
      imagen_url: estudiante.imagen_url || ''
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este estudiante?')) {
      try {
        await eliminarEstudiante(id);
        await cargarEstudiantes();
      } catch (error) {
        console.error('Error eliminando estudiante:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      grado: '',
      periodo: '1',
      nivel: 'preescolar',
      orden: 1,
      imagen_url: ''
    });
    setEditingStudent(null);
    setShowForm(false);
  };

  const handleLogout = async () => {
    try {
      await cerrarSesion();
      onLogout();
    } catch (error) {
      console.error('Error cerrando sesión:', error);
    }
  };

  const subirImagen = async (file) => {
    const formDataImg = new FormData();
    formDataImg.append('imagen', file);
    
    try {
      const response = await fetch('https://lipenumi.com.co/admin/upload.php', {
        method: 'POST',
        body: formDataImg
      });
      
      const result = await response.json();
      if (result.success) {
        setFormData(prev => ({ ...prev, imagen_url: result.url }));
      } else {
        alert('Error subiendo imagen: ' + result.error);
      }
    } catch (error) {
      console.error('Error subiendo imagen:', error);
      alert('Error subiendo imagen');
    }
  };

  // Estilos
  const containerStyle = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f8f9fa'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    margin: '0.5rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  const primaryButton = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: 'white'
  };

  const successButton = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    color: 'white'
  };

  const dangerButton = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: 'white'
  };

  const tableStyle = {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    margin: '0.5rem 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    boxSizing: 'border-box'
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Cargando...</h2>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1>🎓 Panel de Administración - Cuadro de Honor</h1>
        <div>
          <button 
            style={primaryButton}
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancelar' : '+ Nuevo Estudiante'}
          </button>
          <button 
            style={dangerButton}
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      {showForm && (
        <div style={formStyle}>
          <h3>{editingStudent ? 'Editar Estudiante' : 'Nuevo Estudiante'}</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label>Nombre completo:</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData(prev => ({ ...prev, nombre: e.target.value }))}
                  style={inputStyle}
                  required
                />
              </div>
              
              <div>
                <label>Grado:</label>
                <input
                  type="text"
                  value={formData.grado}
                  onChange={(e) => setFormData(prev => ({ ...prev, grado: e.target.value }))}
                  style={inputStyle}
                  placeholder="Ej: 5°, Jardín, 11°"
                  required
                />
              </div>
              
              <div>
                <label>Período:</label>
                <select
                  value={formData.periodo}
                  onChange={(e) => setFormData(prev => ({ ...prev, periodo: e.target.value }))}
                  style={inputStyle}
                  required
                >
                  <option value="1">Período 1</option>
                  <option value="2">Período 2</option>
                  <option value="3">Período 3</option>
                  <option value="4">Período 4</option>
                </select>
              </div>
              
              <div>
                <label>Nivel:</label>
                <select
                  value={formData.nivel}
                  onChange={(e) => setFormData(prev => ({ ...prev, nivel: e.target.value }))}
                  style={inputStyle}
                  required
                >
                  <option value="preescolar">Preescolar</option>
                  <option value="basica">Básica y Media</option>
                </select>
              </div>
              
              <div>
                <label>Orden en cuadro:</label>
                <input
                  type="number"
                  value={formData.orden}
                  onChange={(e) => setFormData(prev => ({ ...prev, orden: parseInt(e.target.value) }))}
                  style={inputStyle}
                  min="1"
                  max="20"
                  required
                />
              </div>
              
              <div>
                <label>Subir foto:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      subirImagen(e.target.files[0]);
                    }
                  }}
                  style={inputStyle}
                />
                {formData.imagen_url && (
                  <img 
                    src={formData.imagen_url} 
                    alt="Preview" 
                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginTop: '0.5rem' }}
                  />
                )}
              </div>
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <button type="submit" style={successButton}>
                {editingStudent ? 'Actualizar' : 'Crear'} Estudiante
              </button>
              <button type="button" onClick={resetForm} style={buttonStyle}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={tableStyle}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ backgroundColor: '#f8f9fa' }}>
            <tr>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Foto</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Nombre</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Grado</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Período</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Nivel</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Orden</th>
              <th style={{ padding: '1rem', textAlign: 'left' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante) => (
              <tr key={estudiante.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '1rem' }}>
                  {estudiante.imagen_url ? (
                    <img 
                      src={estudiante.imagen_url} 
                      alt={estudiante.nombre}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }}
                    />
                  ) : (
                    <div style={{ width: '50px', height: '50px', backgroundColor: '#ddd', borderRadius: '50%' }}></div>
                  )}
                </td>
                <td style={{ padding: '1rem' }}>{estudiante.nombre}</td>
                <td style={{ padding: '1rem' }}>{estudiante.grado}</td>
                <td style={{ padding: '1rem' }}>{estudiante.periodo}</td>
                <td style={{ padding: '1rem' }}>{estudiante.nivel}</td>
                <td style={{ padding: '1rem' }}>{estudiante.orden}</td>
                <td style={{ padding: '1rem' }}>
                  <button 
                    onClick={() => handleEdit(estudiante)}
                    style={{ ...buttonStyle, backgroundColor: '#ffc107', color: '#000' }}
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => handleDelete(estudiante.id)}
                    style={dangerButton}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {estudiantes.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            No hay estudiantes registrados. ¡Agrega el primero!
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
