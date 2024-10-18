import React from "react";
import POBLACION_ESTUDIANTIL from "@docs/POBLACION_ESTUDIANTIL.docx";
import logoDoc from "@assets/doc.png"; // Asegúrate de que esta ruta sea correcta

const documents = [
  { id: 1, name: "Población Estudiantil", url: POBLACION_ESTUDIANTIL },
];

const Descargas = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {documents.map((doc) => (
        <div key={doc.id} style={{ margin: "10px 0" }}>
            <span style={{ fontSize: "18px" }}>{doc.name}</span> {/* Aumentar el tamaño del texto */}
          <a
            href={doc.url}
            download
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <img
              src={logoDoc}
              alt="Documento"
              style={{ width: "5vw", height: "10vh", marginRight: "8px" }} // Aumentar el tamaño del ícono
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Descargas;
