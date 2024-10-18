import React from "react";

const InstitutionalHorizon = () => {
    return (
        <div className="institutional-horizon">
            <Card
                icon="🎯"
                title="Misión"
                text="El Liceo Pedagógico Nuevo Milenio, prepara estudiantes humanos, críticos, reflexivos y constructores de sus propios conocimientos. A través de una metodología activa y cooperativa, en constante innovación; formando líderes, basados en los principios, valores humanos y resaltando la excelencia educativa."
                color="#e3f2fd"
                borderColor="#42a5f5"
                textColor="#1e88e5"
            />
            <Card
                icon="🔭"
                title="Visión"
                text="Para el 2028, el Liceo Pedagógico Nuevo Milenio, continuará persistiendo, en estar entre los mejores colegios a nivel local, regional, territorial y nacional aproximando su Índice Sintético De Calidad En un MMA (Mejoramiento Mínimo Anual) 8.50; por la calidad de los servicios apoyado en el compromiso de su equipo humano quienes velarán por mantener un promedio avanzado en el desempeño, progreso, eficiencia y ambiente escolar de sus estudiantes."
                color="#fff3e0"
                borderColor="#ffb74d"
                textColor="#f57c00"
            />
        </div>
    );
};

const Card = ({ icon, title, text, color, borderColor, textColor }) => {
    return (
        <div className="card" style={{ backgroundColor: color, borderColor: borderColor }}>
            <div className="card-icon" style={{ color: textColor }}>
                {icon}
            </div>
            <h2 className="card-title" style={{ color: textColor }}>
                {title}
            </h2>
            <p className="card-text">
                {text}
            </p>
        </div>
    );
};

export default InstitutionalHorizon;
