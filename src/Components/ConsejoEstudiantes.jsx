import React from "react";
import ConsejoEstudiantes2 from "@assets/ConsejoEstudiantes2.png";

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  borderRadius: "5px",
  margin: "10px auto",
  width: "80%",
  backgroundColor: "white",
  padding: "2em",
  overflow: "hidden"
};

const imgStyle = {
  width: "40%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto"
};

const ConsejoEstudiantes = () => (
  <div style={cardStyle}>
    <h1 style={{ textAlign: "left" }}>Consejo de Estudiantes</h1>
    <p style={{ textAlign: "left" }}>
      Es el máximo órgano colegiado que asegura y garantiza el continuo ejercicio de la participación por parte de los estudiantes.
    </p>
    <h2 style={{ textAlign: "left" }}>Integrantes del Consejo de Estudiantes</h2>
    <ul style={{ textAlign: "left" }}>
      <li>Un vocero de cada uno de los cursos de primero a undécimo, elegidos por los estudiantes mediante votación secreta.</li>
      <li>Un vocero único de Preescolar elegido por los estudiantes que cursan Transición.</li>
    </ul>
    <h2 style={{ textAlign: "left" }}>Personero de los Estudiantes</h2>
    <p style={{ textAlign: "left" }}>
      El Personero de los Estudiantes será el encargado de promover el ejercicio de los deberes y derechos de los estudiantes, consagrado en la Constitución Política, las leyes, los reglamentos y el manual de convivencia de la comunidad educativa del Colegio y contará con la colaboración de un Vicepersonero que será elegido en la misma fórmula electoral del personero.
    </p>
    <p style={{ textAlign: "left" }}>
      El personero y Contralor de los estudiantes será elegido dentro de los treinta días calendario siguiente al de iniciación de clases de un período lectivo anual. Para tal efecto la directora convocará a todos los estudiantes matriculados con el fin de elegirlos por el sistema de mayoría simple y mediante voto secreto.
    </p>
    <img src={ConsejoEstudiantes2} alt="Consejo de Estudiantes" style={imgStyle} />
  </div>
);

export default ConsejoEstudiantes; 