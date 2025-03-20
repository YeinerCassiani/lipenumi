import amor from "@assets/amor.png";
import autonomia from "@assets/autonomia.png";
import justicia from "@assets/justicia.png";
import servicio from "@assets/servicio.png";
import honestidad from "@assets/Honestidad.png";
import respecto from "@assets/respeto.png";
import tolerancia from "@assets/tolerancia.png";
import responsabilidad from "@assets/responsabilidad.png";
import cooperacion from "@assets/cooperacion.png";
const valor = [
  {
    nombre: "AMOR",
    descripcion:
      "Es necesario reconocer que todo en el mundo se mueve con base en este valor, por tal motivo, nuestras acciones deben estarorientadas hacia el amor a Dios, a los demás y a la naturaleza. Elreconocimiento de los valores generados por el amor como la caridad,la solidaridad, la ayuda, el compartir y el respeto nos llevarán auna convivencia pacífica.",
    imagen: amor,
  },
  {
    nombre: "AUTONOMÍA",
    descripcion:
      "El desarrollo integral de la persona necesita de autogobierno, de autocontrol y ser dueño de sí. Con base en la formación de riqueza e independencia intelectual, psicomotriz, afectiva, volitiva, espiritual y de conciencia. El ser humano es capaz de pensar, querer, decidir y obrar, por sí mismo de forma correcta, eficaz y oportunamente.",
    imagen: autonomia,
  },
  {
    nombre: "JUSTICIA",
    descripcion:
      "Lleva a considerar los medios necesarios para exigir y ejercer derechos y deberes cívicos, políticos y sociales.",
    imagen: justicia,
  },
  {
    nombre: "SERVICIO",
    descripcion:
      "El estudiante Milenista, se entrega generosamente a los demás en espíritu de colaboración y busca la promoción del hombre en el ejercicio de la educación o en el apoyo a la misma.",
    imagen: servicio,
  },
  {
    nombre: "HONESTIDAD",
    descripcion:
      "Comportarse de manera transparente con sus semejantes, es decir, sin ocultar nada, diciendo siempre la verdad y obrando en forma recta y clara. Es la base para la realización de cualquier proyecto humano.",
    imagen: honestidad,
  },
  {
    nombre: "RESPETO",
    descripcion:
      "Es la base fundamental para una convivencia sana y pacífica entre los miembros de la Comunidad Educativa. Implica tener una clara noción de los derechos fundamentales de cada persona y abarca todas las esferas de la vida, respeto a sí mismo, hacia los semejantes y a la naturaleza en general.",
    imagen: respecto,
  },
  {
    nombre: "TOLERANCIA",
    descripcion:
      "Reconocimiento a la otra persona como ser humano, con derecho a ser aceptado en su individualidad y su diferencia.",
    imagen: tolerancia,
  },
  {
    nombre: "RESPONSABILIDAD",
    descripcion:
      "Responder con habilidad y entereza a todos los compromisos adquiridos ante la familia, la Institución y la Comunidad Educativa.",
    imagen: responsabilidad,
  },
  {
    nombre: "COOPERACION",
    descripcion:
      "Para que los alumnos aprendan cooperando los profesores tienen que enseñar cooperando y solo necesitas tres cosas muy importantes: SABER, QUERER Y PODER.",
    imagen: cooperacion,
  },
];

function Valores() {
  return (
    <>
      <h2 style={{ margin: "20px 0" }}> Valores Institucionales </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {valor.map((valor) => (
          <div
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              borderRadius: "10px",
              width: "250px",
              margin: "10px",
              padding: "15px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
              fontSize: " 17px",
              color: "rgb(0, 0, 0)",
              lineHeight: "1.2",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img src={valor.imagen} style={{ margin: "5px 10px" }} alt="" />

            <p style={{ textAlign: "justify" }}>
              <b style={{ display: "flex", justifyContent: "center" }}>
                {valor.nombre}
              </b>
              <br /> {valor.descripcion}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Valores;
