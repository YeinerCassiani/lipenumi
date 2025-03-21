import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import "./App.css";
import { Button } from "antd";
import { Divider } from "antd";
import Footer from "./Components/Footer";
import { DollarOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { useState } from "react";
function App() {
  const [hoveredPrincipal, setHoveredPrincipal] = useState(false);
  const [hoveredPreescolar, setHoveredPreescolar] = useState(false);

  return (
    <>
      <Header />
      <NavBar />
      <Divider style={{ backgroundColor: "#295EA5" }} />
      <Footer />
      <Button
        type="primary"
        icon={!hoveredPrincipal && <WhatsAppOutlined />}
        style={{
          position: "fixed",
          bottom: 146,
          right: 24,
          width: hoveredPrincipal ? 180 : 60,
          height: hoveredPrincipal ? 50 : 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: hoveredPrincipal ? "#389e0d" : "#295EA5",
          border: "solid 1px #000",
          borderRadius: "40px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={() => setHoveredPrincipal(true)}
        onMouseLeave={() => setHoveredPrincipal(false)}
        onClick={() => window.open("https://wa.me/573003929873", "_blank")}
      >
        {hoveredPrincipal ? "Principal" : null}
      </Button>
      <Button
        type="primary"
        icon={!hoveredPreescolar && <WhatsAppOutlined />}
        style={{
          position: "fixed",
          bottom: 80,
          right: 24,
          width: hoveredPreescolar ? 180 : 60,
          height: hoveredPreescolar ? 50 : 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: hoveredPreescolar ? "#389e0d" : "#295EA5",
          border: "solid 1px #000",
          borderRadius: "40px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={() => setHoveredPreescolar(true)}
        onMouseLeave={() => setHoveredPreescolar(false)}
        onClick={() => window.open("https://wa.me/573103629794", "_blank")}
      >
        {hoveredPreescolar ? "Preescolar" : null}
      </Button>
      <Button
        type="primary"
        icon={<DollarOutlined />}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 180,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#295EA5",
          border: "solid 1px #000",
          borderRadius: "25px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#389e0d")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#295EA5")
        }
      >
        Pago de Matrícula
      </Button>
    </>
  );
}

export default App;
