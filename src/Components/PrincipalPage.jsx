import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Inscripciones from "@assets/INSCRIPCIONES.png";
import ISCE from "@assets/ISCE.png";
import Colegio from "@assets/colegio.png";
import Inscripcion from "./Inscripcion";
import ProcesoInscripcion from "./ProcesoInscripcion";
import Requerimientos from "./Requerimientos";

const contentStyle = {
  height: window.innerWidth <= 600 ? "25vh" : "70vh",
  width: window.innerWidth <= 600 ? "100%" : "80%",
  margin: "auto",
  background: "#364d79",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "40px",
  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const PrincipalPage = () => {
  const carouselRef = React.useRef();

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <>
      <div style={{ position: "relative", textAlign: "center" }}>
        <LeftOutlined
          style={{ ...arrowStyle, left: "10px" }}
          onClick={prevSlide}
        />
        <RightOutlined
          style={{ ...arrowStyle, right: "10px" }}
          onClick={nextSlide}
        />

        <Carousel effect="fade" autoplay ref={carouselRef}>
          <div>
            <img src={Colegio} style={contentStyle} alt="Colegio" />
          </div>
          <div>
            <img src={Inscripciones} style={contentStyle} alt="INSCRIPCIONES" />
          </div>
          <div>
            <img src={ISCE} style={contentStyle} alt="ISCE" />
          </div>
        </Carousel>

        <div style={{ marginTop: "40px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Cómo llegar
          </h2>
        </div>
      </div>
      <iframe
        title="Google Maps"
        width="80%"
        height="400"
        style={{
          border: "0",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1645.428591513316!2d-74.19943624568032!3d11.223787222318789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5999d45d42b%3A0xdb4ad7e36cd63d90!2sLiceo%20Pedag%C3%B3gico%20Nuevo%20Milenio!5e0!3m2!1ses!2sco!4v1742405762305!5m2!1ses!2sco"
      ></iframe>
    </>
  );
};

export default PrincipalPage;
