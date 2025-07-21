import React from "react";
import ConsejoDirectivo2 from "@assets/ConsejoDirectivo2.jpg";

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
  width: "22%",
  float: "right",
  margin: "0 0 1em 2em",
  borderRadius: "10px"
};

const representantes = [
  { cargo: "Rectora", nombres: "Blanca Rubiela Junco Espinosa" },
  { cargo: "Repre. padres de familia (Preescolar)", nombres: "Kelys Hernández Albus, Karina Rangel Zuñiga" },
  { cargo: "Repre. padres de familia (Básica y media)", nombres: "Jorge Donado Barrios, Mary Sanchez Vega, Leinis Herrera Morales, Anyela Montenegro Bocanegra" },
  { cargo: "Rep. Docentes", nombres: "Zuris Paola Pineda Vizcaino, Maria Alejandra Higuera Ortiz" },
  { cargo: "Rep. de los estudiantes", nombres: "Personero Estudiantil" },
  { cargo: "Rep. de los Ex alumnos", nombres: "Valentina Roa Suesca" },
  { cargo: "Rep. Sector Productivo", nombres: "Alfonso Acevedo" },
];

const ConsejoDirectivo = () => (
  <div style={cardStyle}>
    <h1 style={{ textAlign: "left" }}>Consejo Directivo</h1>
    <p style={{ textAlign: "left" }}>
      Los integrantes del Consejo Directivo se caracterizan por ser ecuánimes, imparciales, tolerantes; por su capacidad de escucha y de visión amplia de la vida. Se identifican con la Filosofía del Colegio, apoyan el Reglamento o Manual de Convivencia y animan el Proyecto Educativo Institucional.
      <img src={ConsejoDirectivo2} alt="Consejo Directivo" style={imgStyle} />
      Su gestión está encaminada a mediar entre todos los Estamentos de la Comunidad Educativa, a generar progreso social, ético y moral; a mejorar calidad de vida y relaciones interpersonales cálidas; a establecer estímulos y sanciones para una sana convivencia dentro de la Comunidad Milenista.
    </p>
    <h2 style={{ textAlign: "left" }}>Funciones del Consejo Directivo</h2>
    <ul style={{ textAlign: "left" }}>
      <li>Tomar las decisiones que afecten el funcionamiento de la institución, excepto las que sean competencia de otra autoridad.</li>
      <li>Servir de instancia para resolver los conflictos que se presenten entre docentes y administrativos con los alumnos.</li>
      <li>Adoptar el manual de convivencia y el reglamento de la institución.</li>
      <li>Fijar los criterios para la asignación de cupos disponibles para la admisión de nuevos alumnos.</li>
      <li>Asumir la defensa y garantía de los derechos de toda la comunidad educativa.</li>
      <li>Aprobar el plan anual de actualización académica del personal docente presentado por el Rector.</li>
      <li>Participar en la planeación y evaluación del proyecto educativo institucional, del currículo y del plan de estudios.</li>
      <li>Estimular y controlar el buen funcionamiento de la institución educativa.</li>
      <li>Establecer estímulos y sanciones para el buen desempeño académico y social del alumno.</li>
      <li>Participar en la evaluación de los docentes, directivos docentes y personal administrativo de la institución.</li>
      <li>Recomendar criterios de participación de la institución en actividades comunitarias, culturales, deportivas y recreativas.</li>
      <li>Establecer el procedimiento para permitir el uso de las instalaciones en la realización de actividades educativas, culturales, recreativas, deportivas y sociales.</li>
      <li>Promover las relaciones de tipo académico, deportivo y cultural con otras instituciones educativas.</li>
      <li>Fomentar la conformación de asociaciones de padres de familia y de estudiantes.</li>
      <li>Aprobar el presupuesto de ingresos y gastos de los recursos propios y los provenientes de pagos legalmente autorizados.</li>
    </ul>
    <h2 style={{ textAlign: "left" }}>Representantes Consejo Directivo 2025</h2>
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

export default ConsejoDirectivo; 