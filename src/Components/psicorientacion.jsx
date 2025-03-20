import React from "react";

const Psicorientacion = () => {
  const cardStyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    margin: "10px auto", // Ajusta el margen para centrar
    width: "80%", // Ajusta el ancho
    backgroundColor: "white",
    padding: "2em",
  };
  return (
    <div style={cardStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "0 2em",
        }}
      >
        <ul style={{ textAlign: "justify", lineHeight: "2" }}>
          <li>
            <b>Asesoría psicológica individual:</b> Es la principal herramienta
            para fortalecer la salud mental, orientando a las familias y
            estudiantes en sus dificultades.
          </li>
          <li>
            <b>Intervenciones grupales:</b> Actividades dinámicas y lúdicas que
            se realizan con los diferentes grupos de acuerdo a sus necesidades a
            partir de diferentes proyectos.
          </li>
          <li>
            <b>Escuela de padres:</b> Espacios de formación para padres de
            familia, con temáticas propias a la salud mental y su rol como
            cuidadores.
          </li>
          <li>
            También se orienta a los docentes para la implementación de
            adecuaciones curriculares con los estudiantes que tienen necesidades
            educativas especiales.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Psicorientacion;
