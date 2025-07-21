import React from "react";

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

const representantes = [
  { cargo: "Directora", nombres: "Blanca Rubiela Junco Espinosa" },
  { cargo: "Coordinador académico", nombres: "Deuli Miguel Prado Mosquera" },
  { cargo: "Secretaria Académica", nombres: "Angela Licet Suesca Estupiñan" },
  { cargo: "Jefe área matemática", nombres: "Deuli Miguel Prado Mosquera" },
  { cargo: "Jefe área Ciencias Sociales", nombres: "Yulis Vanessa Ortiz Yepes" },
  { cargo: "Jefe área de Lenguaje", nombres: "Diana Palma Manjarrez" },
  { cargo: "Jefe área de Ciencias Naturales", nombres: "Maria Alejandra Higuera Ortiz" },
  { cargo: "Jefe área inglés", nombres: "Eddy Donato Sánchez" },
  { cargo: "Jefe área Tec. E informática", nombres: "Jorge Armando Coronell Acosta" },
  { cargo: "Jefe área Ética y valores y religión", nombres: "Lourdes Fontalvo Torres" },
  { cargo: "Jefe área Edu. Física Recreación y deporte", nombres: "Jhon Bornachera Trujillo" },
  { cargo: "Jefe área Artística", nombres: "Jhon Alex Velez Acosta" },
  { cargo: "Filosofía", nombres: "Giovanys Escobar Benitez" },
  { cargo: "Proyectos Transversales", nombres: "Yolimar Mendez Gutierrez" },
  { cargo: "Jefe Salón Transición", nombres: "Yaneidys Coronell Acosta" },
  { cargo: "Jefe Salón Jardín", nombres: "Ana Isabela Ruiz Cortes" },
  { cargo: "Jefe Salón Prejardin", nombres: "Zuris Paola Pineda Vizcaino" },
  { cargo: "Jefe Salón párvulo", nombres: "Maria Jose Orozco Melendez" },
];

const ConsejoAcademico2 = () => (
  <div style={cardStyle}>
    <h1 style={{ textAlign: "left" }}>Consejo Académico</h1>
    <p style={{ textAlign: "left" }}>
      Como instancia superior para participar en la orientación pedagógica de la institución.
    </p>
    <h2 style={{ textAlign: "left" }}>Funciones del Consejo Académico</h2>
    <ul style={{ textAlign: "left" }}>
      <li>Servir de órgano consultor del Consejo Directivo en la revisión de la propuesta del Proyecto Educativo Institucional.</li>
      <li>Estudiar el currículo y propiciar su continuo mejoramiento, introduciendo las modificaciones o los ajustes, de acuerdo con el procedimiento previsto en la ley y sus decretos reglamentarios.</li>
      <li>Organizar el plan de estudios y orientar su ejecución.</li>
      <li>Participar en la evaluación institucional.</li>
      <li>Organizar los consejos de docentes para la evaluación periódica de los estudiantes y promoción, asignarles sus funciones y supervisar el proceso general de evaluación.</li>
      <li>Recibir y decidir los reclamos de los estudiantes sobre la evaluación educativa.</li>
      <li>Liderar los procesos de formación y actualización docente.</li>
      <li>Dinamizar los procesos de investigación de la institución.</li>
      <li>Las demás funciones afines o complementarias con las anteriores que le atribuya el Proyecto Educativo Institucional.</li>
    </ul>
    <h2 style={{ textAlign: "left" }}>Representantes del consejo académico 2025</h2>
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

export default ConsejoAcademico2; 