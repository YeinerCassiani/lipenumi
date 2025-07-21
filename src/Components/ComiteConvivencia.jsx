import React from "react";
import ComiteConvivencia2 from "@assets/ComiteConvivencia2.png";

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
  { cargo: "Representantes de los profesores", nombres: "Yaneidys Maria Coronell Acosta, Yolimar Mendez Gutierrez" },
  { cargo: "Representantes de los padres de familia", nombres: "Laysed Rios Jacome, Anyela Montenegro Bocanegra" },
  { cargo: "Representantes del consejo de estudiantes", nombres: "Diego Mendoza Daza, Gabriela Ortiz Rodríguez" },
];

const ComiteConvivencia = () => (
  <div style={cardStyle}>
    <h1 style={{ textAlign: "left" }}>Comité de Convivencia Escolar</h1>
    <img src={ComiteConvivencia2} alt="Comité de Convivencia Escolar" style={imgStyle} /> 
    <p style={{ textAlign: "left" }}>
      En el decreto 1965 se reglamenta la Ley 1620 de 2013, que crea el Sistema Nacional de Convivencia Escolar y Formación para el Ejercicio de los Derechos Humanos, la Educación para la Sexualidad y la Prevención y Mitigación de la Violencia Escolar. Con base a este documento, se creó el Manual de Procedimiento y protocolo de la institución el cual hace parte del Comité de Convivencia Escolar.
    </p>
    <h2 style={{ textAlign: "left" }}>Objetivos del Comité</h2>
    <ul style={{ textAlign: "left" }}>
      <li>Garantizar la protección integral de los niños, niñas y adolescentes en los espacios educativos.</li>
      <li>Hacer seguimiento y presentar informes de todos los casos que haya conocido el comité.</li>
      <li>Fomentar y fortalecer la educación en y para la paz, las competencias ciudadanas, el desarrollo de la identidad, la participación, la responsabilidad democrática, la valoración de las diferencias y el cumplimiento de la ley.</li>
      <li>Activar la Ruta de Atención Integral para la Convivencia Escolar, frente a situaciones específicas de conflicto, acoso escolar, conductas de alto riesgo o vulneración de derechos sexuales y reproductivos.</li>
    </ul>
    <h2 style={{ textAlign: "left" }}>Representantes Comité de Convivencia Escolar 2025</h2>
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
    <p style={{ textAlign: "left" }}>
      <b>Agregar Documento de la Ruta de Atención Integral de convivencia Escolar (PDF).</b>
    </p>
  </div>
);

export default ComiteConvivencia; 