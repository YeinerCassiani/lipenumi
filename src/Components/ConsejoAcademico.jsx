import React from "react";
import psicorientadora from "@assets/psicorientadora.jpeg";
import disciplina from "@assets/disciplina.jpeg";
import coord_academico from "@assets/coord_academico.jpeg";
import coord_preescolar from "@assets/coord_preescolar.jpeg";
import sec_academica from "@assets/sec_academica.jpeg";

const members = [
  {
    name: "Blanca Junco Espinosa",
    position: "Directora",
    image: "",
    text: "La Directora del Liceo Pedagógico Nuevo Milenio es una persona que encarna los principios y valores propios de la comunidad que representa. Profesional con capacidad de liderazgo, de administración, organizada e inquieta frente a las propuestas y cambios pedagógicos que favorece la dinamización y el avance del Proyecto Educativo Institucional. Del mismo modo es un excelente canal de comunicación y mediación entre los diferentes estamentos de la Comunidad Educativa. “Por una Educación Humanística, Creativa y Pertinente a las necesidades de la región y del país” junto a este lema, la Magister en pedagogía, Especialista en pedagogía del lenguaje, Licenciada en lenguas modernas y normalista superior, Blanca Rubiela Junco Espinosa Directora y fundadora de la institución, viene trabajando desde hace más de 25 años con este proyecto educativo.",
    email: "blancajunco@lipenumi.com.co",
  },
  {
    name: "Eddy Donato Sanchez",
    position: "Psicoorientadora",
    image: psicorientadora,
    text: "Departamento de Psico-orientación del Colegio cuenta con personas idóneas, altamente cualificadas, con capacidad de escucha, abiertas al diálogo, sensibles ante las necesidades de los Estudiantes, con excelente nivel de relaciones interpersonales; capaces, así mismo, de orientar procesos que garanticen una buena convivencia al interior de la Institución; de desarrollar su trabajo en equipo, con gran sentido de pertenencia y profesionalmente ético.Es un espacio en el cual se brinda asesoría psicológica a estudiantes y padres de familias en situaciones relacionadas con dificultades emocionales, que influyen en el proceso de formación integral de toda la comunidad educativa",
    email: "eddydonato@lipenumi.com.co",
  },
  {
    name: "Jorge Coronell Acosta",
    position: "Coordinador de Disciplina",
    image: disciplina,
    text: "El Coordinador de Convivencia se caracteriza por vivenciar la Filosofía, principios y valores que identifican a la Institución. Es una persona idónea, dinamizadora de los procesos de formación para una convivencia justa. Desde esta Oficina se orienta y pone en práctica todo el debido proceso siguiendo la ruta de atención integral para la convivencia. Se trabaja de manera Mediadora e imparcial en la toma de decisiones y así genera actitudes de escucha, respeto, tolerancia y autonomía. Ofrece un acompañamiento constante en la solución de conflictos, promoviendo y creando conciencia en los Estudiantes, Docentes y Padres de Familia, para asumir el fiel cumplimiento del Reglamento o Manual de Convivencia.",
    email: "jorgecoronell@lipenumi.com.co",
  },
  {
    name: "Angela Suesca Estupiñan",
    position: "Secretaria Académica",
    image: sec_academica,
    text: "La Secretaria Académica del Colegio El Liceo Pedagógico Nuevo Milenio, es una persona prudente. Tiene especial cuidado en la organización y distribución de documentos archivos. Se identifica con el Proyecto Educativo Institucional y su Filosofía. Es amable, tolerante y respetuosa con todos los miembros de la Comunidad Educativa.Posee actitud de servicio, trabajo en equipo, puntualidad, planeación y organización del trabajo, liderazgo, toma de decisiones, solución de problemas y desarrollo administrativo.",
    email: "angelasuesca@lipenumi.com.co",
  },
  {
    name: "Deuli Prado Mosquera",
    position: "Coordinador Académico",
    image: coord_academico,
    text: " El Coordinador Académico se caracteriza por ser humano, líder, autónomo, cercano, responsable, organizado, coherente en la planeación, organización y aplicación de las actividades. Con grandes capacidades mediadoras y comunicativas que posibilitan el diálogo y el trabajo en equipo, en la Comunidad Educativa.Desde esta oficina se hace un acompañamiento constante a los estudiantes en sus procesos pedagógicos a partir de los lineamientos trazados por el MEN y la dirección, que busca a través de su modelo pedagógico, la formación integral humana. De tal manera que fortalezcan en el desarrollo de competencias que les permitan su crecimiento personal y profesional",
    email: "deuliprado@lipenumi.com.co",
  },
  {
    name: "Yaneidys Coronell Acosta",
    position: "Coordinadora Preescolar",
    image: coord_preescolar,
    text: "La Coordinación de preescolar, brinda un servicio permanente de puertas abiertas en los procesos Académicos y de Convivencia de los estudiantes más pequeños de la institución; en beneficio de la formación Integral de valores, centrado en el placer de aprender jugando y ser felices, desarrollando y fortaleciendo la Formación Humana. Potenciando los talentos y destrezas de una forma personalizada e independiente. Basada en una metodología activa y creativa.  ",
    email: "yaneidyscoronell@lipenumi.com.co",
  },
];

const ConsejoAcademico = () => {
  return (
    <div className="consejo-directivo">
      {members.map((member, index) => (
        <div className="member" key={index}>
          <img
            src={member.image}
            alt={`${member.name}`}
            className="member-image"
          />
          <div className="member-info">
            <h3>{member.name}</h3>
            <a href={`mailto:${member.email}`}>{member.email}</a>
            <h4>{member.position}</h4>
            <p> {member.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConsejoAcademico;
