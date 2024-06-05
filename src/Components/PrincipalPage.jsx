import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "60vh",
  color: "#fff",
  margin: "auto",
  background: "#364d79",
};

import Inscripciones from "@assets/INSCRIPCIONES.png";
import ISCE from "@assets/ISCE.png";

const PrincipalPage = () => {
  return (
    <div>
      <Carousel effect="fade" autoplay>
        <div>
          <img src={Inscripciones} style={contentStyle} alt="INSCRIPCIONES" />
        </div>
        <div>
            <img src={ISCE} style={contentStyle} alt="ISCE" />
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
