import React, { useState } from "react";
import Principios from "@assets/principios.png";
const InstitutionalPrinciples = () => {
  const principles = [
    {
      title: "RESPETO A LA DIGNIDAD HUMANA",
      content:
        "El acto educativo se fundamenta en el reconocimiento y aceptación de las diferencias individuales de todos y cada uno de los miembros de la comunidad educativa.",
    },
    {
      title: "PARTICIPACIÓN DEMOCRÁTICA",
      content:
        "Busca construir ambientes que favorezcan la convivencia armónica y el crecimiento integral de todos y cada uno de los miembros de la comunidad; con el fin de incentivar en ellos un compromiso personal, serio y responsable.",
    },
    {
      title: "EQUIDAD",
      content:
        "Se manifiesta en cada persona del Colegio, como una actitud explícita en el convivir, que permite dar a cada uno lo que le corresponde y lo que necesita para desarrollarse plenamente y vivir con dignidad.",
    },
    {
      title: "LIBERTAD",
      content:
        "El Liceo Pedagógico Nuevo Milenio, favorece el desarrollo de la libertad de cada persona, de conformidad con el papel que en ésta desempeña. Cada individuo se encuentra en esta Institución por su propia voluntad y opta por aquello que desea y asume las consecuencias de sus decisiones.",
    },
    {
      title: "SERVICIO SOCIAL",
      content:
        "El Liceo Pedagógico Nuevo Milenio, se preocupa porque la comunidad educativa disfrute de un ambiente sano y propicio para el aprendizaje de valores y el respeto hacia las diferencias, aportando al PEI y comprometidos con la eficiencia y eficacia de los aprendizajes, formando estudiantes útiles para la sociedad.",
    },
    {
      title: "AUTONOMÍA",
      content:
        "La Institución busca orientar a todos sus integrantes en el libre desarrollo de la personalidad y en la capacidad para asumir con libertad y responsabilidad sus derechos y sus deberes.",
    },
    {
      title: "EXCELENCIA",
      content:
        "Es una meta de la Institución que implica que cada miembro de la comunidad se compromete libremente a dar lo mejor de “sí”, trascendiendo los límites del compromiso.",
    },
  ];

  return (
    <div className="institutional-principles">
      <div className="card-icon">
        <img src={Principios} style={{ width: "15%" }} alt="Principios" />
      </div>
      <h2>PRINCIPIOS INSTITUCIONALES</h2>
      <br />
      {principles.map((principle, index) => (
        <CollapsibleCard
          key={index}
          title={principle.title}
          content={principle.content}
        />
      ))}
    </div>
  );
};

const CollapsibleCard = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-card">
      <div className="card-header" onClick={toggleOpen}>
        <h3>{title}</h3>
        <button>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <div className="card-content">{content}</div>}
    </div>
  );
};

export default InstitutionalPrinciples;
