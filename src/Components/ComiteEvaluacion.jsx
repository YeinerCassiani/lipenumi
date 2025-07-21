import React from "react";
import ComiteEvaluacion2 from "@assets/ComiteEvaluacion2.jpg";

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  borderRadius: "5px",
  margin: "10px auto",
  width: "80%",
  backgroundColor: "white",
  padding: "2em",
  overflow: "hidden",
  textAlign: "left"
};

const imgStyle = {
  width: "20%",
  float: "right",
  margin: "0 0 1em 2em",
  borderRadius: "10px"
};

const representantes = [
  { cargo: "Directora", nombres: "Blanca Rubiela Junco Espinosa" },
  { cargo: "Orientador Escolar (Psicóloga)", nombres: "Eddy Donato Sánchez" },
  { cargo: "Coordinador de convivencia", nombres: "Jorge Armando Coronell Acosta" },
  { cargo: "Coordinadores Académicos (Preescolar)", nombres: "Yaneidys Maria Coronell Acosta" },
  { cargo: "Coordinadores Académicos (Básica y media)", nombres: "Deuli Miguel Prado Mosquera" },
  { cargo: "Representantes de los profesores (Preescolar)", nombres: "Ana Isabela Ruiz Cortes" },
  { cargo: "Representantes de los profesores (Básica y media)", nombres: "Lourdes Fontalvo Torres" },
  { cargo: "Representantes padres de familia (Preescolar)", nombres: "Lola Mary Hernandez Garcia" },
  { cargo: "Representantes padres de familia (Básica y media)", nombres: "Ana Ramírez Carranza" },
];

const ComiteEvaluacion = () => (
  <div style={cardStyle}>
    <h1 style={{ textAlign: "left" }}>Comité de Evaluación y Promoción</h1>
    <p style={{ textAlign: "left" }}>
      El comité de evaluación y promoción, se encarga de estudiar, analizar y tomar decisiones acerca de la evaluación y promoción de los estudiantes de acuerdo con la consecución de logros, el desarrollo de competencias y desempeños significativos en cada una de las áreas estipuladas en el plan de estudios durante los cuatro periodos académicos.
    </p>
    <img src={ComiteEvaluacion2} alt="Comité de Evaluación y Promoción" style={imgStyle} />
    <h2 style={{ textAlign: "left" }}>Funciones</h2>
    <ul style={{ textAlign: "left" }}>
      <li>La comisión de evaluación y promoción, se reunirá al finalizar cada período escolar y se analizarán los casos de estudiantes con desempeño bajo o básico y se harán recomendaciones generales o particulares.</li>
      <li>La comisión analizará las condiciones del estudiante y remitirá a la instancia que corresponda para citar a reunión a padres de familia o acudiente junto con el estudiante.</li>
      <li>Se analizarán los casos de educandos con desempeño excepcionalmente alto para recomendar actividades especiales de motivación o promoción anticipada.</li>
      <li>Todas las decisiones, observaciones y recomendaciones de las comisiones se consignarán en actas.</li>
      <li>Hacer firmar las actas de compromiso a los estudiantes, padres de familia y docentes de los estudiantes que deben presentar planes de mejoramiento.</li>
      <li>Hacer seguimiento académico a los estudiantes que presentan serios problemas de aprendizaje.</li>
    </ul>
    <h2 style={{ textAlign: "left" }}>Representantes comité de evaluación y promoción año 2025</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1em' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Cargo</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nombre(s)</th>
        </tr>
      </thead>
      <tbody>
        {representantes.map((row, idx) => (
          <tr key={idx}>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.cargo}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.nombres}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComiteEvaluacion; 