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

const { TabPane } = Tabs;

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("1");

  // Mapeo de rutas a claves de pestañas
  const routeToKey = {
    "/": "1",
    "/institucional": "2",
    "/gestion": "3",
    "/dependencias": "4",
    "/descargas": "5",
    "/contacto": "6",
    "/inscripciones": "7",
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
          <TabPane tab="Historia" key="2-1">
            <Historia />
          </TabPane>
          <TabPane tab="Horizonte Institucional" key="2-2">
            <InstitutionalHorizon />
          </TabPane>
          <TabPane tab="Simbolos" key="2-3">
            <Simbolos />
          </TabPane>
          <TabPane tab="Valores" key="2-4">
            <Valores />
          </TabPane>
          <TabPane tab="Principios" key="2-5">
            <InstitutionalPrinciples />
          </TabPane>
        </Tabs>
      );
      break;
    case "3":
      content = (
        <Tabs defaultActiveKey="3-1" centered className="custom-sub-tabs">
          <TabPane tab="Consejo Académico" key="3-1">
            <ConsejoAcademico />
          </TabPane>
          <TabPane tab="Cuadro de Honor" key="3-2">
            <CuadroHonor />
          </TabPane>
          <TabPane tab="Experiencias Pedagógicas" key="3-3">
            <></>
          </TabPane>
        </Tabs>
      );
      break;
    case "4":
      content = (
        <Tabs defaultActiveKey="4-1" centered className="custom-sub-tabs">
          <TabPane tab="Dirección" key="4-1">
            <></>
          </TabPane>
          <TabPane tab="Biblioteca" key="4-2">
            <></>
          </TabPane>
          <TabPane tab="Laboratorio" key="4-3">
            <></>
          </TabPane>
          <TabPane tab="Informática" key="4-4">
            <></>
          </TabPane>
          <TabPane tab="Psicoorientación" key="4-5">
            <Psicorientacion />
          </TabPane>
        </Tabs>
      );
      break;
    case "5":
      content = <Descargas />;
      break;
    case "6":
      content = <Contact />;
      break;
    case "7":
      content = (
        <Tabs defaultActiveKey="7-1" centered className="custom-sub-tabs">
          <TabPane tab="General" key="7-1">
            <Inscripcion />
          </TabPane>
          <TabPane tab="Inscripción" key="7-2">
            <ProcesoInscripcion />
          </TabPane>
          <TabPane tab="Matricula" key="7-3">
            <ProcesoMatricula />
          </TabPane>
          <TabPane tab="Requisitos" key="7-4">
            <Requerimientos />
          </TabPane>
        </Tabs>
      );
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
        <TabPane tab="GESTIÓN" key="3" />
        <TabPane tab="DEPENDENCIAS" key="4" />
        <TabPane tab="DESCARGAS" key="5" />
        <TabPane tab="CONTÁCTO" key="6" />
      </Tabs>
      <div className="custom-content">{content}</div>
    </div>
  );
};

export default NavBar;
