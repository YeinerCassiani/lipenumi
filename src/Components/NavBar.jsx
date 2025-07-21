import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import PrincipalPage from "./PrincipalPage";
import InstitutionalHorizon from "./InstitutionalHorizon";
import InstitutionalPrinciples from "./InstitutionalPrinciples";
import Contact from "./Contact";
import CuadroHonor from "./CuadroHonor";
import ConsejoAcademico from "./ConsejoAcademico";
import Simbolos from "./Simbolos";
import Descargas from "./Descargas";
import Historia from "./Historia";
import Valores from "./Valores";
import Inscripcion from "./Inscripcion";
import ProcesoInscripcion from "./ProcesoInscripcion";
import Requerimientos from "./Requerimientos";
import ProcesoMatricula from "./ProcesoMatricula";
import Psicorientacion from "./psicorientacion";
import Estudiantes from "./Estudiantes";
// Nuevos componentes:
import ConsejoDirectivo from "./ConsejoDirectivo";
import ConsejoEstudiantes from "./ConsejoEstudiantes";
import ComiteConvivencia from "./ComiteConvivencia";
import ComiteEvaluacion from "./ComiteEvaluacion";
import AsociacionPadres from "./AsociacionPadres";
import ConsejoAcademico2 from "./ConsejoAcademico2";
import ExperienciasPedagogicas from "./ExperienciasPedagogicas";
import Horarios from "./Horarios";

const { TabPane } = Tabs;

const bibliotecaImgs = Object.values(import.meta.glob('../assets/DEPENDENCIAS/BIBLIOTECA/*', { eager: true, as: 'url' }));
const direccionImgs = Object.values(import.meta.glob('../assets/DEPENDENCIAS/DIRECCION/*', { eager: true, as: 'url' }));
const laboratorioImgs = Object.values(import.meta.glob('../assets/DEPENDENCIAS/LABORATORIO/*', { eager: true, as: 'url' }));
const informaticaImgs = Object.values(import.meta.glob('../assets/DEPENDENCIAS/INFORMATICA/*', { eager: true, as: 'url' }));
const psicoorientacionImgs = Object.values(import.meta.glob('../assets/DEPENDENCIAS/PSICOORIENTACION/*', { eager: true, as: 'url' }));

const dependenciaGrid = (imagenes) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(320px, 1fr))', gap: '24px', margin: '2em 0', padding: '0 4em' }}>
    {imagenes.map((src, idx) => (
      <div key={idx} style={{ border: '1px solid #eee', borderRadius: '12px', overflow: 'hidden', background: '#fafafa', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
        <img
          src={src}
          alt={`dependencia-img-${idx}`}
          style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }}
        />
      </div>
    ))}
  </div>
);

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("1");

  // Mapeo de rutas a claves de pestañas
  const routeToKey = {
    "/": "1",
    "/institucional": "2",
    "/gobierno-escolar": "3",
    "/gestion": "4",
    "/dependencias": "5",
    "/descargas": "6",
    "/contacto": "7",
    "/inscripciones": "8",
    "/horarios": "9",
  };

  useEffect(() => {
    // Obtener la ruta actual y asignar la pestaña correspondiente
    const path = window.location.pathname;
    setActiveTab(routeToKey[path] || "1"); // Si no coincide, usa "1" por defecto
  }, []);

  const onChange = (key) => {
    setActiveTab(key);
  };

  let content;
  switch (activeTab) {
    case "1":
      content = <PrincipalPage />;
      break;
    case "2":
      content = (
        <Tabs defaultActiveKey="2-1" centered className="custom-sub-tabs">
          <TabPane tab="Estudiantes" key="2-1">
            <Estudiantes />
          </TabPane>
          <TabPane tab="Historia" key="2-2">
            <Historia />
          </TabPane>
          <TabPane tab="Horizonte Institucional" key="2-3">
            <InstitutionalHorizon />
          </TabPane>
          <TabPane tab="Simbolos" key="2-4">
            <Simbolos />
          </TabPane>
          <TabPane tab="Valores" key="2-5">
            <Valores />
          </TabPane>
          <TabPane tab="Principios" key="2-6">
            <InstitutionalPrinciples />
          </TabPane>
        </Tabs>
      );
      break;
    case "3":
      content = (
        <Tabs defaultActiveKey="3-1" centered className="custom-sub-tabs">
          <TabPane tab="Consejo Directivo" key="3-1">
            <ConsejoDirectivo />
          </TabPane>
          <TabPane tab="Consejo Académico" key="3-2">
            <ConsejoAcademico2 />
          </TabPane>
          <TabPane tab="Consejo Estudiantes" key="3-3">
            <ConsejoEstudiantes />
          </TabPane>
          <TabPane tab="Comité de convivencia Escolar" key="3-4">
            <ComiteConvivencia />
          </TabPane>
          <TabPane tab="Comité de evaluación y promoción" key="3-5">
            <ComiteEvaluacion />
          </TabPane>
          <TabPane tab="Asociación de Padres de familia" key="3-6">
            <AsociacionPadres />
          </TabPane>
        </Tabs>
      );
      break;
    case "4":
      content = (
        <Tabs defaultActiveKey="4-1" centered className="custom-sub-tabs">
          <TabPane tab="Consejo Académico" key="4-1">
            <ConsejoAcademico />
          </TabPane>
          <TabPane tab="Cuadro de Honor" key="4-2">
            <CuadroHonor />
          </TabPane>
          <TabPane tab="Experiencias Pedagógicas" key="4-3">
            <ExperienciasPedagogicas/>
          </TabPane>
        </Tabs>
      );
      break;
    case "5":
      content = (
        <Tabs defaultActiveKey="5-1" centered className="custom-sub-tabs">
          <TabPane tab="Dirección" key="5-1">
            {dependenciaGrid(direccionImgs)}
          </TabPane>
          <TabPane tab="Biblioteca" key="5-2">
            {dependenciaGrid(bibliotecaImgs)}
          </TabPane>
          <TabPane tab="Laboratorio" key="5-3">
            {dependenciaGrid(laboratorioImgs)}
          </TabPane>
          <TabPane tab="Informática" key="5-4">
            {dependenciaGrid(informaticaImgs)}
          </TabPane>
          <TabPane tab="Psicoorientación" key="5-5">
            {dependenciaGrid(psicoorientacionImgs)}
          </TabPane>
        </Tabs>
      );
      break;
    case "6":
      content = <Descargas />;
      break;
    case "7":
      content = <Contact />;
      break;
    case "8":
      content = (
        <Tabs defaultActiveKey="8-1" centered className="custom-sub-tabs">
          <TabPane tab="General" key="8-1">
            <Inscripcion />
          </TabPane>
          <TabPane tab="Inscripción" key="8-2">
            <ProcesoInscripcion />
          </TabPane>
          <TabPane tab="Matricula" key="8-3">
            <ProcesoMatricula />
          </TabPane>
          <TabPane tab="Requisitos" key="8-4">
            <Requerimientos />
          </TabPane>
        </Tabs>
      );
      break;
    case "9":
      content = <Horarios />;
      break;
    default:
      content = null;
  }

  return (
    <div>
      <Tabs
        activeKey={activeTab} // Se actualiza con la URL
        centered
        onChange={onChange}
        className="custom-tabs"
        tabBarStyle={{ flexWrap: "wrap" }} // Permitir que las pestañas se envuelvan
      >
        <TabPane tab="INICIO" key="1" />
        <TabPane tab="INSTITUCIONAL" key="2" />
        <TabPane tab="GOBIERNO ESCOLAR" key="3" />
        <TabPane tab="GESTIÓN" key="4" />
        <TabPane tab="DEPENDENCIAS" key="5" />
        <TabPane tab="DESCARGAS" key="6" />
        <TabPane tab="CONTÁCTO" key="7" />
      </Tabs>
      <div className="custom-content">{content}</div>
    </div>
  );
};

export default NavBar;
