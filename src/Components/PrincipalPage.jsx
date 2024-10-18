import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Inscripciones from "@assets/INSCRIPCIONES.png";
import ISCE from "@assets/ISCE.png";
import Colegio from "@assets/colegio.png";

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
    <div style={{ position: "relative" }}>
      {/* Flechas personalizadas */}
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
    </div>
  );
};

export default PrincipalPage;
