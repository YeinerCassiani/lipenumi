import React from "react";

const Requerimientos = () => {
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
    <div>
      <div style={cardStyle}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              paddingTop: "20px",
              fontStyle: "italic",
              borderBottom: "1px dashed #000",
              width: "fit-content",
            }}
          >
            REQUISITOS MATRICULA
          </h1>
        </div>
        <ul
          style={{
            justifyContent: "flex-start",
            textAlign: "justify",
            paddingLeft: "20px",
            fontSize: "1.1em",
          }}
        >
          <h3>ALUMNOS NUEVOS</h3>

          <li>
            <p>Formulario de inscripción diligenciado.</p>
          </li>
          <li>
            <p>
              Fotocopia del registro Civil o tarjeta de tarjeta de identidad
              (Mayores de 7 años)
            </p>
          </li>
          <li>
            <p>
              Fotocopia de esquema de vacunación completo incluyendo Covid a
              partir de los 4 años si la tiene.
            </p>
          </li>
          <li>
            <p>Certificado médico con talla y peso</p>
          </li>
          <li>
            <p>Examen Visual y auditivo.</p>
          </li>
          <li>
            <p>
              Constancia de trabajo actualizada del padre de familia o acudiente
              que responde por los costos educativos
            </p>
          </li>
          <li>
            <p>
              Fotocopia de la cedula de Ciudadanía de los dos padres o
              acudientes.
            </p>
          </li>
          <li>
            <p>Paz y Salvo.</p>
          </li>
          <li>
            <p>
              Fotocopia del observador del alumno o certificado de conducta.
            </p>
          </li>
          <li>
            <p>Informe académico final- Boletín.</p>
          </li>
          <li>
            <p>Certificado de notas finales a partir de grado Quinto</p>
          </li>
          <li>
            <p>4 fotos con el uniforme.</p>
          </li>
          <li>
            <p>Carpeta plástica azul colgante.</p>
          </li>
        </ul>
        <div style={{ margin: "20px 0", textAlign: "justify" }}>
          <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
            IMPORTANTE: En caso de contar con un diagnóstico que evidencie una
            situación de discapacidad o condición especial, debe ser informada y
            entregar a la institución los soportes respectivos (Historia
            clínica, recomendaciones del especialista, certificado y cronograma
            de terapias).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Requerimientos;
