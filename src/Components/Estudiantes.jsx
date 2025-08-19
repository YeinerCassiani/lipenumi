import React from "react";
import Estudiantes1 from "@assets/estudiantes1.jpg";
import Estudiantes2 from "@assets/estudiantes2.png";

function Estudiantes() {
  const imgStyleRight = {
    float: "right",
    margin: "0 0 1em 2em",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  };
  const imgStyleLeft = {
    float: "left",
    margin: "0 2em 1em 0",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
  };
  const cardStyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    margin: "10px auto",
    width: "80%",
    backgroundColor: "white",
    padding: "2em",
    overflow: "hidden"
  };
  return (
    <>
      <div style={cardStyle}>
        <h1> ESTUDIANTES </h1>
        <p style={{ textAlign: "justify", margin: "10px 90px" }}>
          A partir de nuestro enfoque humanista de nuestro Proyecto Educativo Institucional, concebimos a nuestros estudiantes, como un ser humano único, susceptible de ser potencializado para alcanzar su desarrollo personal. Formado con autonomía responsable, con eje central de su proceso de formación integral, para decidir y asumir con libertad las dimensiones psicosociales, para adquirir conocimientos científicos y comprometerse con la construcción de un proyecto de vida que le permita aportar de forma crítica el desarrollo de una sociedad más justa, desde la perspectiva de los valores, como principios orientadores de su condición de ser humano y prepararlos para el mundo laboral.
          <img src={Estudiantes1} alt="Estudiantes" style={imgStyleRight} />
        </p>
        <h1 style={{ margin: "10px" }}> PERFIL DEL ESTUDIANTE MILENISTA </h1>
        <p style={{ textAlign: "justify", margin: "10px 90px" }}>
          Los estudiantes Milenistas, deben ser protagonistas de su propia educación, asumiendo los criterios formativos qué el colegio les ofrece, con el ánimo de propiciar su crecimiento y madurez personal, partiendo de la realidad socioeconómica y cultural. Por lo tanto, los estudiantes deben ser:
          <img src={Estudiantes2} alt="Estudiantes" style={imgStyleLeft} />
        </p>
        <ol
          style={{
            textAlign: "left",
            margin: "0 90px",
            listStyleType: "lower-alpha",
          }}
        >
          <li>
            Autónomos, responsables y comprometidos con la sociedad en que viven.
          </li>
          <li>Ser poseedores de un alto nivel de autoestima.</li>
          <li>
            Profesar los valores de honestidad, responsabilidad, participación, solidaridad y respeto entre otros.
          </li>
          <li>
            Proyectar gran sentido de pertenencia y compromiso frente a la institución.
          </li>
          <li>
            Compartir conocimientos y desarrollar relaciones humanas positivas.
          </li>
          <li>
            Emplear moderadamente los recursos naturales y la conservación del medio ambiente.
          </li>
          <li>
            Tomar y ejecutar decisiones que conlleven a un mejoramiento de su bienestar y el de su entorno.
          </li>
          <li>
            Ser analítico, crítico y constructivo dentro del quehacer educativo.
          </li>
          <li>
            Portarse de una manera adecuada dentro y fuera de la institución.
          </li>
          <li>
            Acatar con respeto los llamados de atención y seguir las normas de éste manual.
          </li>
          <li>
            Respetar a sus compañeros, profesores y demás personal administrativo y de servicios.
          </li>
          <li>
            Promover y practicar a diario en sus relaciones interpersonales el decálogo sobre NO AL BULLYING
          </li>
        </ol>
      </div>
    </>
  );
}

export default Estudiantes;
