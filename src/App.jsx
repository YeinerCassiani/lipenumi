  import Header from "./Components/Header";
  import NavBar from "./Components/NavBar";
  import "./App.css";
  import { Button } from "antd";
  import { Divider } from "antd";
  import Footer from "./Components/Footer";
  import { DollarOutlined, WhatsAppOutlined, SettingOutlined } from "@ant-design/icons";
  import { useState } from "react";
  import Santillana from "@assets/santillana.png";
  import Horarios from "@assets/horarios.jpg";
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
            bottom: 280,
            right: 24,
            width: hoveredPrincipal ? 167 : 60,
            height: hoveredPrincipal ? 50 : 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: hoveredPrincipal ? "#389e0d" : "#295EA5",
            border: "solid 1px #000",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setHoveredPrincipal(true)}
          onMouseLeave={() => setHoveredPrincipal(false)}
          onClick={() => window.open("https://wa.me/573245819759", "_blank")}
        >
          {hoveredPrincipal ? "Principal" : null}
        </Button>
        <Button
          type="primary"
          icon={!hoveredPreescolar && <WhatsAppOutlined />}
          style={{
            position: "fixed",
            bottom: 210,
            right: 24,
            width: hoveredPreescolar ? 167 : 60,
            height: hoveredPreescolar ? 50 : 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: hoveredPreescolar ? "#389e0d" : "#295EA5",
            border: "solid 1px #000",
            borderRadius: "10px",
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
        <div>
          <h2 style={{
            position: "fixed",
            bottom: 165,
            right: 24,
            cursor: "pointer",
            color: "#000",
            fontStretch: "ultra-condensed",
            fontSize: "14px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "10px 10px 0 0",
          }}>PLATAFORMA EDUCATIVA</h2>
        <a href="https://identity.santillanaconnect.com/login/?client_id=neds_client_compartir_colombia_pro&next=/connect/authorize%3Fresponse_type%3Dcode%26client_id%3Dneds_client_compartir_colombia_pro%26scope%3Dopenid%2Bprofile%2Bemail%2Brole%2Bexternal.info%2Bneds%252Ffull_access%26state%3Dy0cXDaGNWmGCIScPlUJsfTgxcnB1xXRJKudCvUbDjRY%253D%26redirect_uri%3Dhttps%253A%252F%252Fedi-compartir-co.stn-neds.com%252Fts%252Flogin%252Foauth2%252Fcode%252Fcompartirco%26code_challenge_method%3DS256%26nonce%3DLiAzH0LJUja8_K-_xYQKAaSr-bho0DWtWcExXIUSbXE%26code_challenge%3Dj01kTsgakczMNW9AkuARaINv4BwpgzqMA7v-Jhogprs">
          <img
            src={Santillana}
            alt="Santillana"
            style={{
              // rectangulo
              width: "167px",
              height: "50px",
              borderRadius: "0 0 10px 10px ",
              position: "fixed",
              bottom: 115,
              right: 24,
              cursor: "pointer",
            }}
          />
        </a>
        </div>
        <div>
        <a href="/horarios">
          <img
            src={Horarios}
            alt="Horarios"
            style={{
              // rectangulo
              width: "167px",
              height: "80px",
              borderRadius: " 10px ",
              position: "fixed",
              bottom: 20,
              right: 24,
              cursor: "pointer",
            }}
          />
        </a>
        </div>

        {/* Botón de acceso al panel admin */}
        <Button
          type="text"
          icon={<SettingOutlined />}
          style={{
            position: "fixed",
            top: 10,
            right: 10,
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid #ddd",
            borderRadius: "50%",
            fontSize: "16px",
            opacity: 0.5,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.backgroundColor = "#295EA5";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.5";
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
            e.currentTarget.style.color = "initial";
          }}
          onClick={() => window.location.href = '/gestion'}
        />
        
        {/* <Button
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
        </Button> */}
      </>
    );
  }

  export default App;
