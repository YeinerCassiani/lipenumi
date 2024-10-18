import React from "react";
import logo from "@assets/logo.png";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        maxHeight: "10em",
        justifyContent: "space-between",
      }}
    >
      <img
        src={logo}
        alt="Lipenumi Logo"
        style={{
          maxHeight: "100%",
          objectFit: "contain",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,250,255,1) 30%)",
          width: "15%",
          display: window.innerWidth <= 600 ? 'none' : 'flex',
        }}
      />
      <div
        style={{
          width: "85%",
          background:
            "linear-gradient(90deg, rgba(255,250,255,1) 0%, rgba(41,94,165,1) 30%, rgba(41,94,165,1) 70%, rgba(41,94,165,0) 100%",
          padding: "1em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: window.innerWidth <= 600 ? "4vw" : "2vw",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.2s",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          LICEO PEDAGÓGICO NUEVO MILENIO
        </h1>
        <h4
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: window.innerWidth <= 600 ? "2.5vw" : "0.8vw",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          Res. de Aprobación No. 0081 del 21 de Enero de 2021 DANE: 347001051741
        </h4>
        <h2
          style={{
            textAlign: "center",
            color: "#fff", // Color de relleno del texto
            fontSize: window.innerWidth <= 600 ? "3vw" : "1.5vw",
            fontFamily: "'Poppins', sans-serif",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Sombra en el texto
            fontStyle: "italic", // Texto en cursiva
            WebkitTextStroke: "1px red", // Borde rojo alrededor del texto
            MozTextStroke: "1px red", // Para compatibilidad en Firefox
          }}
        >
          INSCRIPCIONES Y MATRÍCULAS ABIERTAS
        </h2>
      </div>
    </div>
  );
};

export default Header;
