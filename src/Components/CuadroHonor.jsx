import React, { useState } from "react";
import baseImage from "@assets/250X250.png";
import honorRollData from "../honorRollData";
import { Select } from "antd";

const { Option } = Select;

const periodos = Object.keys(honorRollData);

const CuadroHonor = () => {
  const [periodoSeleccionado, setPeriodoSeleccionado] = useState(periodos[0]);
  const [tab, setTab] = useState("preescolar");
  const estudiantes = honorRollData[periodoSeleccionado];

  // Separar estudiantes
  const preescolar = estudiantes.slice(0, 4);
  const basicaMedia = estudiantes.slice(4);

  return (
    <div className="cuadro-honor">
      <h2 className="title">Cuadro de Honor</h2>
      <div style={{ marginBottom: 20 }}>
        <Select
          id="periodo-select"
          value={periodoSeleccionado}
          style={{ width: 160 }}
          onChange={value => setPeriodoSeleccionado(value)}
        >
          {periodos.map(periodo => (
            <Option key={periodo} value={periodo}>
              {periodo}
            </Option>
          ))}
        </Select>
      </div>
      <div style={{ display: 'flex', marginBottom: 20 }}>
        <button
          onClick={() => setTab("preescolar")}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderBottom: tab === "preescolar" ? '2px solid #333' : '2px solid #ccc',
            background: 'none',
            cursor: 'pointer',
            fontWeight: tab === "preescolar" ? 'bold' : 'normal'
          }}
        >
          Preescolar
        </button>
        <button
          onClick={() => setTab("basica")}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderBottom: tab === "basica" ? '2px solid #333' : '2px solid #ccc',
            background: 'none',
            cursor: 'pointer',
            fontWeight: tab === "basica" ? 'bold' : 'normal'
          }}
        >
          Básica y Media
        </button>
      </div>
      <div className="student-grid">
        {(tab === "preescolar" ? preescolar : basicaMedia).map((student, index) => (
          <div className="student-card" key={index}>
            <img src={student.image} alt={`${student.name}`} className="student-image" />
            <div className="student-info">
              <h3 className="student-name">{student.name}</h3>
              <p className="student-grade">{student.grade}</p>
              {/* <p className="student-mention">{student.mention}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CuadroHonor;
