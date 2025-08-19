import React from "react";
import logo from "@assets/logo.png";
import Bandera from "@assets/bandera.png";
import himnoAudio from "@assets/HIMNO PEDAGOGICO.mp3";

const Simbolos = () => {
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
    <div style={cardStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "2em",
          margin: "0 1em",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            textAlign: "center",
          }}
        >
          <h2>Logo</h2>
          <img src={logo} alt="Logo" style={{ margin: "1em 0" }} />
          <p style={{ textAlign: "justify" }}>
            Contiene los siguientes símbolos:
          </p>
          <ul style={{ textAlign: "justify" }}>
            <li>
              <p>
                Un libro abierto representa el énfasis hacia la lectura y la
                escritura significativa.{" "}
              </p>
            </li>
            <li>
              <p>
                El globo terráqueo que representa la tendencia pedagógica de
                preparar hombres para la vida, capaces de transcender mediante
                el conocimiento de su cultura regional, nacional, y mundial.
              </p>
            </li>
          </ul>
        </div>

        {/* Bandera */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            textAlign: "center",
          }}
        >
          <h2>Bandera</h2>
          <img src={Bandera} alt="Bandera" style={{ margin: "1em 0" }} />
          <p style={{ textAlign: "justify" }}>
            Desde 2001, se diseñó la bandera del colegio fondo blanco, el cual
            representa la tan anhelada paz que proclamamos los colombianos y en
            especial los estudiantes de todos los rincones del País. Llevará el
            escudo en el centro con el mapamundi y un libro abierto que tiene un
            eslogan que dice "Un mundo abierto al conocimiento"
          </p>
        </div>

        {/* Himno */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            textAlign: "center",
          }}
        >
          <h2>Himno</h2>
          
          {/* Botón de descarga del himno */}
          <div style={{ marginBottom: "1em" }}>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = himnoAudio;
                link.download = 'Himno_Pedagogico_Lipenumi.mp3';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                transition: "background-color 0.3s"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
            >
              ♫ Descargar Himno
            </button>
          </div>

          <h3>CORO</h3>
          <h5 style={{ margin: "0.5em", fontSize: "1.1em" }}>
            DIOS TE SALVE PLANTEL MILENISTA,<br/>
            GUIA DEL DIARIO QUE HACER CUAL ANTORCHA,<br/>
            ILUMINA NUESTRAS VIDAS BUSCANDO:<br/>
            EDUCAR, FORMAR Y VENCER.
          </h5>
          <p style={{ fontSize: "1em", margin: "0.5em 0" }}>
            <strong>I</strong><br/>
            Escalando en la vida Innovando también,<br/>
            Gritaremos todos unidos:<br/>
            ¡"Somos hombres y mujeres de bien"!
          </p>
          <p style={{ fontSize: "1em", margin: "0.5em 0" }}>
            <strong>II</strong><br/>
            Valoramos al prójimo, A nuestra familia también,<br/>
            Logrando la excelencia Serviremos a Santa Marta,<br/>
            al país y al mundo También.
          </p>
          <p style={{ fontSize: "1em", margin: "0.5em 0" }}>
            <strong>III</strong><br/>
            Cual labriegos sembramos Semillas de paz,<br/>
            amor y hermandad "Para que cese la guerra<br/>
            Y triunfe la paz"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Simbolos;
