import React from "react";
import baseImage from "@assets/250X250.png";

const students = [
  {
    name: "Ana García",
    grade: "5to Grado",
    mention: "Excelencia Académica",
    image: baseImage,
  },
  {
    name: "Lucía Ramírez",
    grade: "4to Grado",
    mention: "Esfuerzo y Superación",
    image: baseImage,
  },
  {
    name: "Carlos Pérez",
    grade: "5to Grado",
    mention: "Liderazgo",
    image: baseImage,
  },
  {
    name: "Camilo Montes",
    grade: "4to Grado",
    mention: "Responsabilidad",
    image: baseImage,
  },
];

const CuadroHonor = () => {
  return (
    <div className="cuadro-honor">
      <h2 className="title">Cuadro de Honor</h2>
      <div className="student-grid">
        {students.map((student, index) => (
          <div className="student-card" key={index}>
            <img src={student.image} alt={`${student.name}`} className="student-image" />
            <div className="student-info">
              <h3 className="student-name">{student.name}</h3>
              <p className="student-grade">{student.grade}</p>
              <p className="student-mention">{student.mention}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuadroHonor;
