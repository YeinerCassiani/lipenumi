import React from "react";
import Padres from "@assets/padres.jpg";

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
  width: "30%",
  float: "right",
  margin: "0 0 1em 2em",
  borderRadius: "10px"
};

const integrantes = [
  { cargo: "Directora", nombre: "Blanca Rubiela Junco Espinosa" },
  { cargo: "Presidenta", nombre: "Ana Milena Ramírez Carranza" },
  { cargo: "Vicepresidenta", nombre: "Keitty Gutiérrez González" },
  { cargo: "Secretaria", nombre: "Kelys Hernández Albus" },
  { cargo: "Tesorero", nombre: "Ana María Cantillo Acosta" },
  { cargo: "Fiscal", nombre: "Orlando Enrique Duarte Mendoza" },
  { cargo: "Vocal", nombre: "Leidy Peñaranda Guerrero" },
];

const padresVoceros = [
  { nivel: "Párvulo", nombre: "Lizeth Vibanco Luna" },
  { nivel: "Pre jardín", nombre: "Kimberly Pineda" },
  { nivel: "Jardín", nombre: "Daniela Toncell Gutierrez" },
  { nivel: "Transición", nombre: "Grellys Bermúdez Fandiño" },
  { nivel: "Primero", nombre: "Johanna Patricia Cortes Chacon" },
  { nivel: "Segundo", nombre: "Jorge Miguel Donado Barrios" },
  { nivel: "Tercero", nombre: "Laysed Rios Jacome" },
  { nivel: "Cuarto", nombre: "Orlando Enrique Duarte Mendoza" },
  { nivel: "Quinto", nombre: "Cesar Sanchez" },
  { nivel: "Sexto", nombre: "Ana Lorena Morales Pacheco" },
  { nivel: "Séptimo", nombre: "Leinis Herrera Morales" },
  { nivel: "Octavo", nombre: "Ana Maria Cantillo Acosta" },
  { nivel: "Noveno", nombre: "Keitty Gutiérrez González" },
  { nivel: "Decimo", nombre: "Maria José Orozco Meléndez" },
  { nivel: "Undécimo", nombre: "William Mendoza" },
];

const AsociacionPadres = () => (
  <div style={cardStyle}>
    <h1 style={{ textAlign: "left" }}>Asociación de Padres de Familia</h1>
    <img src={Padres} alt="Asociación de Padres de Familia" style={imgStyle} />
    <p style={{ textAlign: "left" }}>
      La Asociación de Padres de Familia de todo establecimiento educativo promoverá la constitución de una asociación de padres de familia, para lo cual podrá citar a una asamblea constitutiva y suministrará espacio o ayudas de la secretaría, quien llevará las actas de reuniones con todas las actividades planeadas y programadas con las iniciativas que los miembros de la asociación acuerden.
    </p>
    <h2 style={{ textAlign: "left" }}>Funciones</h2>
    <ul style={{ textAlign: "left" }}>
      <li>Velar por el cumplimiento del proyecto educativo institucional y su continua evaluación.</li>
      <li>Promover programas de formación de los padres para cumplir adecuadamente la tarea educativa que les corresponde.</li>
      <li>Promover el proceso de constitución del consejo de padres de familia, como apoyo a la función pedagógica que les compete.</li>
      <li>Organizar actividades como: Día de la mujer, Día del Niño, Día de la Familia, Día del Maestro, Día de la Gratitud, Día de los niños (31 de octubre).</li>
      <li>Organizar y contribuir al desarrollo de actividades concernientes al mejoramiento de los espacios físicos del colegio.</li>
    </ul>
    <h2 style={{ textAlign: "left" }}>Asociación de Padres de Familia Año 2025</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1em' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Cargo</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {integrantes.map((row, idx) => (
          <tr key={idx}>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.cargo}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.nombre}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2 style={{ textAlign: "left" }}>Padres Voceros de Cada Salón</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1em' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nivel o Curso</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {padresVoceros.map((row, idx) => (
          <tr key={idx}>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.nivel}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{row.nombre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AsociacionPadres; 