import React from "react";
import logo from "@assets/logo.png";
import Bandera from "@assets/bandera.png";

const Simbolos = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 20em",
        gap: "2em",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Logo</h2>
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
              preparar hombres para la vida, capaces de transcender mediante el
              conocimiento de su cultura regional, nacional, y mundial.
            </p>
          </li>
        </ul>
      </div>

      <img src={logo} alt="Logo" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Bandera</h2>
        <p style={{ textAlign: "justify" }}>
          Desde 2001, se diseñó la bandera del colegio fondo blanco, el cual
          representa la tan anhelada paz que proclamamos los colombianos y en
          especial los estudiantes de todos los rincones del País. Llevará el
          escudo en el centro con el mapamundi y un libro abierto que tiene un
          eslogan que dice “Un mundo abierto al conocimiento
        </p>
      </div>

      <img src={Bandera} alt="Bandera" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 7em",
          gridColumn: "1 / span 2",
        }}
      >
        <h2 style={{ margin: "1em " }}>Himno</h2>
        <h2>CORO</h2>
        <h4 style={{ margin: "0.7em" }}>
          CORO DIOS TE SALVE PLANTEL MILENISTA, GUIA DEL DIARIO QUE HACER CUAL
          ANTORCHA, ILUMINA NUESTRAS VIDAS BUSCANDO: EDUCAR, FORMAR Y VENCER.
        </h4>
        <i>I</i>
        <p>
          Escalando en la vida Innovando también, Gritaremos todos unidos: ¡”
          Somos hombres y mujeres de bien”!
        </p>
        <i>II</i>
        <p>
          Valoramos al prójimo, A nuestra familia también, Logrando la
          excelencia Serviremos a Santa Marta, al país y al mundo También.
        </p>
        <i>III</i>
        <p>
          Cual labriegos sembramos Semillas de paz, amor y hermandad “Para que
          cese la guerra Y triunfe la paz”
        </p>
        <h2>CORO</h2>
        <h4 style={{ margin: "0.7em" }}>
          CORO DIOS TE SALVE PLANTEL MILENISTA, GUIA DEL DIARIO QUE HACER CUAL
          ANTORCHA, ILUMINA NUESTRAS VIDAS BUSCANDO: EDUCAR, FORMAR Y VENCER.
        </h4>
      </div>
    </div>
  );
};

export default Simbolos;
