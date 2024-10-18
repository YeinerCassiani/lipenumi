import React, { useState } from "react";
import { Tabs } from "antd";
import PrincipalPage from "./PrincipalPage";
import InstitutionalHorizon from "./InstitutionalHorizon";
import InstitutionalPrinciples from "./InstitutionalPrinciples";
import Contact from "./Contact";
import CuadroHonor from "./CuadroHonor";
import ConsejoAcademico from "./ConsejoAcademico";
import Simbolos from "./Simbolos";
import Descargas from "./Descargas";

const { TabPane } = Tabs;

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("1");

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
            <div></div>
          </TabPane>
          <TabPane tab="Horizonte Institucional" key="2-2">
            <InstitutionalHorizon />
          </TabPane>
          <TabPane tab="Simbolos" key="2-3">
            <Simbolos />
          </TabPane>
          <TabPane tab="Valores" key="2-4">
            <div></div>
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
    case "5":
      content = <Descargas />;
      break;
    case "6":
      content = <Contact />;
      break;
    default:
      content = null;
  }

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        centered
        onChange={onChange}
        className="custom-tabs"
        tabBarStyle={{ flexWrap: 'wrap' }} // Permitir que las pestañas se envuelvan
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
