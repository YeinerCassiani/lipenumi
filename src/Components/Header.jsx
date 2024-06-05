import React from "react";
import  logo  from "@assets/logo.png";

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
          background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,250,255,1) 30%)",
          width: "15%",
        }}
      />
      <div
        style={{
          width: "85%",
          background:
            "linear-gradient(90deg, rgba(255,250,255,1) 0%, rgba(41,94,165,1) 30%, rgba(41,94,165,1) 70%, rgba(41,94,165,0) 100%",
            padding: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "2vw",
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
      </div>
    </div>
  );
};

export default Header;
