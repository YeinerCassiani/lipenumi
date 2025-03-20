import img from "@assets/inscripcion2025.png";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React from "react";

const Inscripcion = () => {
  const styleContent = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: " 0 20px ",
  };

  const styleContent2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: " 0 8em ",
  };

  const cardStyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    margin: "10px auto", // Ajusta el margen para centrar
    width: "90%", // Ajusta el ancho
    backgroundColor: "white",
  };

  const imgStyle = {
    width: "55%",
    height: "auto",
    borderRadius: "5px",
  };

  return (
    <div style={cardStyle}>
      <div>
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
            INSCRIPCIONES Y MATRÍCULAS 2025
          </h1>
        </div>
        <p
          style={{
            justifyContent: "start",
            textAlign: "justify",
            margin: "0 10%",
            fontSize: "1.2em",
          }}
        >
          Estimados padres de familia. Si desea formar parte de nuestra gran
          familia Milenista, los invitamos a tener en cuenta la siguiente
          información:
        </p>
      </div>

      <div style={styleContent}>
        <div style={{ margin: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                margin: " 0 20px",
              }}
            >
              CONTAMOS CON CUPOS PARA TODOS LOS NIVELES Y GRADOS OFRECIDOS POR
              EL COLEGIO
            </h2>
            <img src={img} alt="Inscripción 2025" style={imgStyle} />
          </div>
        </div>
      </div>
      <div style={styleContent2}>
        <h2
          style={{
            justifyContent: "start",
            textAlign: "justify",
            margin: "10px 20px",
          }}
        >
          SERVICIOS QUE OFRECEMOS:
        </h2>
        <ul
          style={{
            justifyContent: "start",
            textAlign: "justify",
            margin: "0 20px",
            paddingBottom: "20px",
            lineHeight: "1.8",
            fontSize: "1.2em",
          }}
        >
          <li>
            <p>Preescolar, Básica y media</p>
          </li>
          <li>
            <p>Educación personalizada.</p>
          </li>
          <li>
            <p>Inglés intensificado desde preescolar.</p>
          </li>
          <li>
            <p>Talleres de lectura, escritura, ingles conversacional, etc.</p>
          </li>
          <li>
            <p>25 años de experiencia</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inscripcion;
