import React, { useState, useEffect } from "react";
import baseImage from "@assets/250X250.png";
import { obtenerEstudiantesPorPeriodo } from "../firebase/estudiantesService";
import { Select } from "antd";

const { Option } = Select;

const CuadroHonor = () => {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState("1");
  const [tab, setTab] = useState("preescolar");
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [periodos] = useState(["1", "2", "3", "4"]);

  useEffect(() => {
    cargarEstudiantes();
  }, [periodoSeleccionado]);

  const cargarEstudiantes = async () => {
    try {
      setLoading(true);
      const data = await obtenerEstudiantesPorPeriodo(periodoSeleccionado);
      setEstudiantes(data);
    } catch (error) {
      console.error('Error cargando estudiantes:', error);
      setEstudiantes([]);
    } finally {
      setLoading(false);
    }
  };

  // Separar estudiantes por nivel
  const preescolar = estudiantes.filter(est => est.nivel === 'preescolar');
  const basicaMedia = estudiantes.filter(est => est.nivel === 'basica');

  return (
    <div className="cuadro-honor">
      <h2 className="title">Cuadro de Honor</h2>
      <div style={{ marginBottom: 20 }}>
        <Select
          id="periodo-select"
          value={periodoSeleccionado}
          style={{ width: 160 }}
          onChange={value => setPeriodoSeleccionado(value)}
        >
          {periodos.map(periodo => (
            <Option key={periodo} value={periodo}>
              Período {periodo}
            </Option>
          ))}
        </Select>
      </div>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <button
          onClick={() => setTab("preescolar")}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderBottom: tab === "preescolar" ? '2px solid #333' : '2px solid #ccc',
            background: 'none',
            cursor: 'pointer',
            fontWeight: tab === "preescolar" ? 'bold' : 'normal'
          }}
        >
          Preescolar
        </button>
        <button
          onClick={() => setTab("basica")}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderBottom: tab === "basica" ? '2px solid #333' : '2px solid #ccc',
            background: 'none',
            cursor: 'pointer',
            fontWeight: tab === "basica" ? 'bold' : 'normal'
          }}
        >
          Básica y Media
        </button>
      </div>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Cargando estudiantes...</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          padding: '2rem 1rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
            {(tab === "preescolar" ? preescolar : basicaMedia).map((student, index) => (
              <div 
                key={student.id || index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  border: '1px solid #f0f0f0',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                {/* Decoración superior */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'
                }}></div>

                {/* Imagen del estudiante */}
                <div style={{
                  position: 'relative',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src={student.imagen_url || baseImage} 
                      alt={`${student.nombre}`} 
                      style={{
                        width: '112px',
                        height: '112px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '2px solid white'
                      }}
                      onError={(e) => {
                        e.target.src = baseImage;
                      }}
                    />
                  </div>
                  
                                    {/* Estrella dorada */}
                  <div style={{
                    position: 'absolute',
                    top: '-25px',
                    right: '50%',
                    transform: 'translateX(50%)',
                    fontSize: '30px',
                    filter: 'drop-shadow(0 2px 8px rgba(255, 215, 0, 0.5))',
                    animation: 'sparkle 2s ease-in-out infinite'
                  }}>
                    ⭐
                  </div>
                </div>

                {/* Información del estudiante */}
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.4rem',
                    fontWeight: '600',
                    color: '#2d3748',
                    lineHeight: '1.3'
                  }}>
                    {student.nombre}
                  </h3>
                  
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#667eea',
                    color: 'white',
                    padding: '0.3rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    letterSpacing: '0.5px'
                  }}>
                    {student.grado}
                  </div>
                </div>

                {/* Decoración inferior */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  marginTop: '1rem'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#667eea',
                    opacity: 0.7
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#764ba2',
                    opacity: 0.7
                  }}></div>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#667eea',
                    opacity: 0.7
                  }}></div>
                </div>

                {/* Efecto de brillo sutil */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'left 0.5s ease',
                  pointerEvents: 'none'
                }}></div>
              </div>
            ))}
            {(tab === "preescolar" ? preescolar : basicaMedia).length === 0 && (
              <div style={{ 
                gridColumn: '1 / -1',
                textAlign: 'center', 
                padding: '4rem 2rem',
                backgroundColor: 'white',
                borderRadius: '20px',
                border: '2px dashed #e2e8f0',
                color: '#64748b'
              }}>
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1rem',
                  opacity: 0.5
                }}>
                  🏆
                </div>
                <h3 style={{
                  margin: '0 0 1rem 0',
                  color: '#475569',
                  fontSize: '1.5rem'
                }}>
                  No hay estudiantes registrados
                </h3>
                <p style={{
                  margin: '0',
                  fontSize: '1.1rem'
                }}>
                  para {tab} en el Período {periodoSeleccionado}
                </p>
                {estudiantes.length > 0 && (
                  <small style={{ 
                    color: '#94a3b8',
                    fontSize: '0.9rem',
                    display: 'block',
                    marginTop: '1rem'
                  }}>
                    Hay {estudiantes.length} estudiantes en total, pero ninguno para el nivel {tab}
                  </small>
                )}
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default CuadroHonor;
