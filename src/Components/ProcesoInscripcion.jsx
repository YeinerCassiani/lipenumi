import React from "react";

const ProcesoInscripcion = () => {
  const cardStyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    margin: "10px auto", // Ajusta el margen para centrar
    width: "90%", // Ajusta el ancho
    backgroundColor: "white",
    padding: "2em",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
        margin: "20px",
      }}
    >
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
              margin: "20px 30px",
              paddingTop: "20px",
              fontStyle: "italic",
              borderBottom: "1px dashed #000",
              width: "fit-content",
            }}
          >
            PROCESO DE INSCRIPCIÓN.
          </h1>
        </div>

        <ol
          style={{
            justifyContent: "flex-start",
            textAlign: "justify",
            paddingLeft: "20px",
            fontSize: "1.1em",
          }}
        >
          <li>
            <p>
              <b>Pago de inscripción.</b> Para adquirir e iniciar el proceso de
              inscripción deberá cancelar el formulario en la oficina de
              secretaría.
            </p>
          </li>
          <li>
            <p>
              <b>Diligenciar el formulario de inscripción.</b> Entregar a la
              oficina de la institución el formulario diligenciado junto con los
              siguientes documentos:
            </p>
            <ul
              style={{
                textAlign: "justify",
                marginLeft: "40px",
                marginTop: "10px",
              }}
            >
              <li>
                <p>
                  Registro civil y/o Tarjeta de Identidad (mayores de 7 años).
                </p>
              </li>
              <li>
                <p>Formulario de procedencia.</p>
              </li>
              <li>
                <p>Último informe o boletín académico.</p>
              </li>
              <li>
                <p>Certificado de conducta o fotocopia del observador.</p>
              </li>
            </ul>
          </li>
          <li style={{ marginTop: "10px" }}>
            <p>
              <b>Entrevista con la Psicorientadora.</b> Después de entregar la
              documentación, se le asignara una cita con la Psicorientadora y/o
              Directora. ¡Importante! Deben asistir los padres y el aspirante.
            </p>
          </li>

          <li>
            <p>
              <b>Examen de Diagnóstico de ingreso:</b> Mientras los padres
              realizan la entrevista, el aspirante presentara un examen
              diagnóstico de ingreso. El aspirante debe asistir con lápiz,
              borrador, sacapuntas y colores.
              <p
                style={{
                  marginTop: "10px",
                  marginLeft: "40px",
                  fontWeight: "bold",
                }}
              >
                Nota: No es un examen de admisión, solo es una prueba para
                observar el nivel que tienen los niños en Matematicas y lenguaje
                y así poder nivelarlos en el primer periodo.
              </p>
            </p>
          </li>
          <li style={{ marginTop: "10px" }}>
            <p>
              <b>Entrega de resultados.</b> Después del anterior proceso se
              citan a los padres de familia para entregarles la orden de
              matrícula.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ProcesoInscripcion;
