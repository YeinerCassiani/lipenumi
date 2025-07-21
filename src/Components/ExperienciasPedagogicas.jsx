import React from "react";

// Importa todos los archivos de la carpeta EXPERIENCIAS
const archivos = Object.entries(import.meta.glob('../assets/EXPERIENCIAS/*', { eager: true, as: 'url' }));

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '32px',
  margin: '2em 0',
  padding: '0 4em',
};

const cardStyle = {
  border: '1px solid #eee',
  borderRadius: '16px',
  overflow: 'hidden',
  background: '#fff',
  boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  transition: 'transform 0.2s',
};

function esVideo(nombre) {
  return nombre.match(/\.(mp4|webm|ogg)$/i);
}

const ExperienciasPedagogicas = () => (
  <div style={{ maxWidth: 1400, margin: '0 auto', padding: '2em 0' }}>
    <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Experiencias Pedagógicas</h1>
    <div style={gridStyle}>
      {archivos.map(([nombre, src], idx) => (
        <div key={"exp-"+idx} style={cardStyle}>
          {esVideo(nombre) ? (
            <video
              src={src}
              controls
              style={{ width: '100%', height: 400, borderRadius: '16px 16px 0 0', background: '#000' }}
            />
          ) : (
            <img
              src={src}
              alt={`experiencia-foto-${idx}`}
              style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: '16px 16px 0 0' }}
            />
          )}
        </div>
      ))}
    </div>
    <p style={{textAlign:'center', marginTop:32, color:'#888'}}>Comparte tus experiencias pedagógicas con fotos y videos tipo reels. ¡Haz visible tu creatividad!</p>
  </div>
);

export default ExperienciasPedagogicas; 