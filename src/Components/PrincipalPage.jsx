import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "60vh",
  color: "#fff",
  margin: "auto",
  background: "#364d79",
};
const PrincipalPage = () => {
  return (
    <div>
      <Carousel effect="fade" autoplay>
        <div>
          <img src="src\assets\INSCRIPCIONES.png" style={contentStyle} alt="INSCRIPCIONES" />
        </div>
        <div>
            <img src="src\assets\ISCE.png" style={contentStyle} alt="ISCE" />
        </div>
        <div>
            <img src="src\assets\ISCE3.png" style={contentStyle} alt="ISCE" />
        </div>
        <div>
            <img src="src\assets\ISCE3.png" style={contentStyle} alt="ISCE" />
        </div>
      </Carousel>
    </div>
  );
};

export default PrincipalPage;
