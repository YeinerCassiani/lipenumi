import React from "react";

const students = [
  {
    name: "Ana García",
    grade: "5to Grado",
    mention: "Excelencia Académica",
    image: "https://via.placeholder.com/250",
  },
  {
    name: "Lucía Ramírez",
    grade: "4to Grado",
    mention: "Esfuerzo y Superación",
    image: "https://via.placeholder.com/250",
  },
  {
    name: "Carlos Pérez",
    grade: "5to Grado",
    mention: "Liderazgo",
    image: "https://via.placeholder.com/250",
  },
  {
    name: "Camilo Montes",
    grade: "4to Grado",
    mention: "Responsabilidad",
    image: "https://via.placeholder.com/250",
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
