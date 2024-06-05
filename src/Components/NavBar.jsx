import React, { useState } from "react";
import { Tabs } from "antd";
import PrincipalPage from "./PrincipalPage";
import InstitutionalHorizon from "./InstitutionalHorizon";
import InstitutionalPrinciples from "./InstitutionalPrinciples";
import Contact from "./Contact";

const items = [
  {
    key: "1",
    label: "INICIO",
  },
  {
    key: "2",
    label: "INSTITUCIONAL",
  },
  {
    key: "3",
    label: "GESTIÓN",
  },
  {
    key: "4",
    label: "DEPENDENCIAS",
  },
  {
    key: "5",
    label: "DESCARGAS",
  },
  {
    key: "6",
    label: "CONTÁCTO",
  },
];

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
        <>
          <InstitutionalHorizon />
          <InstitutionalPrinciples />
        </>
      );
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
        items={items}
        onChange={onChange}
        className="custom-tabs"
      />
      <div className="custom-content">{content}</div>
    </div>
  );
};

export default NavBar;
