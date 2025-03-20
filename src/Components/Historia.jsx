import react from "react";

function Historia() {
  const cardStyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    margin: "10px auto", // Ajusta el margen para centrar
    width: "80%", // Ajusta el ancho
    backgroundColor: "white",
    padding: "2em",
  };
  return (
    <>
      <div style={cardStyle}>
        <h1> Reseña Historica </h1>
        <i style={{ color: "rgb(137,137,137)" }}>
          ” Para que cualquier cosa suceda, primero hay que hacer algo”
        </i>
        <br />
        <i
          style={{
            textAlign: "end",
            color: "rgb(137,137,137)",
          }}
        >
          ALBERT EINSTEIN
        </i>
        <p style={{ textAlign: "justify", margin: " 10px 90px" }}>
          Esta institución Educativa, Nace como la prolongación de un proyecto
          de vida de su creadora Mg, Esp. Lic. Blanca Rubiela Junco, quien
          siempre soñó con un instrumento para guiar y educar a muchas
          generaciones, sobre la base del amor y las buenas costumbres basado en
          el lema “Por una Educación Humanística, Creativa y Pertinente a las
          necesidades de la Región y del País en constante cambio “ Recibe el
          nombre de Nuevo Milenio, porque inicio labores en el año 2000 y Liceo
          porque en la antigua Grecia era el lugar en donde se reunían los
          grandes pensadores como Aristóteles a discutir y reflexionar y
          estudiar. Primera directora y fundadora, Esp. Lic. Magíster en
          educación, Blanca Rubiela Junco Espinosa. Él 90 % de los Exalumnos del
          Liceo Pedagógico Nuevo Milenio han tenido éxito académico profesional,
          laboral y deportivo El colegio inicio con 47 estudiantes hijos de 47
          familias que creyeron en el proyecto educativo institucional y en su
          fundadora. En la trayectoria de 24 años de servicio se han alcanzado
          grandes metas de calidad gracias al compromiso vocacional de la
          directora, docentes, padres de familias y estudiantes. Tales Como:
        </p>
        <h1 style={{ margin: "10px" }}> Reconocimiento Y Logros </h1>
        <ul style={{ textAlign: "left", margin: "0 90px" }}>
          <li>
            En marzo de 2013 Premio Supérate con el Saber, al Estudiante
            Leonardo Gonzales Gil en el Área de Ciencias Naturales
          </li>
          <li>
            En 2013, el colegio alcanzó el nivel Superior en Pruebas Saber.
          </li>
          <li>
            El 26 agosto Del 2014, alcanzamos el tercer puesto a nivel nacional
            en el área de Lenguaje y clasificamos entre los 33 colegios pilos
            del País.
          </li>
          <li>
            En el 2015, El Liceo Pedagógico Nuevo Milenio alcanzó, un Índice
            Sintético de Calidad Educativa superior al local, territorial y
            nacional de 8.41.
          </li>
          <li>
            En el 2016, nuevamente se obtuvo un Índice Sintético de Calidad
            Educativa superior al local, territorial y nacional de 7.63.
          </li>
          <li>
            En el 2017, el ICSE fue de 8.23 superior al territorial y nacional,
            adicionalmente estuvimos en la semi-final de Supérate con el Saber
            2.0 Dariana Del Rosario Manjarres Donado.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Historia;
