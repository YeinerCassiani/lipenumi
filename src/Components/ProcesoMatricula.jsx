import React from "react";

const ProcesoMatricula = () => {
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
            marginBottom: "20px",
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
            PROCESO DE MATRICULA
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
            Haber terminado el proceso de inscripción y tener la orden de
            matrícula.
          </li>
          <li>
            Entregar en físico el Recibo de Pago de Matrícula o enviar el
            Boucher de pago al teléfono corporativo. 3245819759.
          </li>
          <li>
            Las matrículas se realizarán de forma presencial en las
            instalaciones del Colegio, de acuerdo al cronograma especificado por
            la institución.
          </li>
          <li>
            El Día de Matrícula deberán asistir los padres de familia o
            acudientes quienes responderán por los costos educativos del
            aspirante; los cuales deberán firmar un contrato de matrícula,
            pagaré, carta de instrucciones y la ficha de matrícula.
          </li>
          <li>
            Al proceso de matrícula debe asistir los estudiantes de: Básica
            Primaria, Básica Secundaría y media para que firmen la matrícula y
            reciban instrucciones sobre el manual de convivencia.
          </li>
          <li>
            Entregar todos los documentos solicitados como requisitos en una
            Carpeta plástica de color azul colgante tamaño oficio.
          </li>
          <li>
            Tenga en cuenta que el horario de atención para el proceso de
            matrícula es de 7:00 am a 12:30 m, se atenderá (1) un solo acudiente
            por turno y de acuerdo al orden de llegada. Por favor venir con
            tiempo y paciencia.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ProcesoMatricula;
