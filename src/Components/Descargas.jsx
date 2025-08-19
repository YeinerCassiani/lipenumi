import React from "react";
import POBLACION_ESTUDIANTIL from "@docs/POBLACION_ESTUDIANTIL.docx";
import logoDoc from "@assets/doc.png";
import logoPdf from "@assets/PDF.png";
import RESUMEN_MANUAL_CONVIVENCIA from "@assets/RESUMEN MANUAL DE CONVIVENCIA.pdf";
import SISTEMA_EVALUACION from "@assets/SISTEMA INSTITUCIONAL DE EVALUACION LPNM.pdf";
import RUTA_ATENCION from "@assets/RUTA DE ATENCION INTEGRAL.pdf";
import LICENCIA_FUNCIONAMIENTO from "@assets/Licencia Funcionamiento Resolucion 0081 del 21 enero -2021.pdf";

const documents = [
  { id: 1, name: "Población Estudiantil", url: POBLACION_ESTUDIANTIL, type: "docx", icon: logoDoc },
  { id: 2, name: "Resumen Manual de Convivencia", url: RESUMEN_MANUAL_CONVIVENCIA, type: "pdf", icon: logoPdf },
  { id: 3, name: "Sistema Institucional de Evaluación", url: SISTEMA_EVALUACION, type: "pdf", icon: logoPdf },
  { id: 4, name: "Ruta de Atención Integral", url: RUTA_ATENCION, type: "pdf", icon: logoPdf },
  { id: 5, name: "Licencia de Funcionamiento", url: LICENCIA_FUNCIONAMIENTO, type: "pdf", icon: logoPdf },
];

const Descargas = () => {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "3rem",
    color: "#2c3e50",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "#34495e",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#7f8c8d",
    marginBottom: "2rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    padding: "1rem",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    border: "1px solid #e9ecef",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
  };

  const iconContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem",
  };

  const iconStyle = {
    width: "60px",
    height: "60px",
    objectFit: "contain",
  };

  const documentNameStyle = {
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#2c3e50",
    marginBottom: "1rem",
    textAlign: "center",
    lineHeight: "1.4",
  };

  const fileTypeStyle = {
    display: "inline-block",
    padding: "0.3rem 0.8rem",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: "600",
    textTransform: "uppercase",
    marginBottom: "1rem",
  };

  const downloadButtonStyle = {
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "0.8rem 1.5rem",
    borderRadius: "25px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
  };

  const downloadButtonHoverStyle = {
    backgroundColor: "#2980b9",
    transform: "scale(1.02)",
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h1 style={titleStyle}>📚 Documentos Institucionales</h1>
        <p style={subtitleStyle}>
          Descarga los documentos oficiales del Colegio Lipenumi
        </p>
      </div>

      <div style={gridStyle}>
        {documents.map((doc) => (
          <div
            key={doc.id}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = cardHoverStyle.transform;
              e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = cardStyle.boxShadow;
            }}
          >
            <div style={iconContainerStyle}>
              <img
                src={doc.icon}
                alt={`Icono ${doc.type}`}
                style={iconStyle}
              />
            </div>

            <h3 style={documentNameStyle}>{doc.name}</h3>

            <div style={{
              ...fileTypeStyle,
              backgroundColor: doc.type === "pdf" ? "#e74c3c" : "#27ae60",
              color: "white"
            }}>
              {doc.type.toUpperCase()}
            </div>

            <a
              href={doc.url}
              download
              style={{
                ...downloadButtonStyle,
                textDecoration: "none",
                display: "block"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = downloadButtonHoverStyle.backgroundColor;
                e.target.style.transform = downloadButtonHoverStyle.transform;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = downloadButtonStyle.backgroundColor;
                e.target.style.transform = "scale(1)";
              }}
            >
              📥 Descargar Documento
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Descargas;
