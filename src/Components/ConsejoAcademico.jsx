import React from 'react';
import psicorientadora from "@assets/psicorientadora.jpeg";
import disciplina from "@assets/disciplina.jpeg";
import coord_academico from "@assets/coord_academico.jpeg";
import coord_preescolar from "@assets/coord_preescolar.jpeg";
import sec_academica from "@assets/sec_academica.jpeg";


const members = [
    {
        name: 'Eddy Donato Sanchez',
        position: 'Psicoorientadora',
        image: psicorientadora,
    },
    {
        name: 'Jorge Coronell Acosta',
        position: 'Coordinador de Disciplina',
        image: disciplina,
    },
    {
        name: 'Angela Suesca Estupiñan',
        position: 'Secretaria Académica',
        image: coord_academico,
    },
    {
        name: 'Deuli Prado Mosquera',
        position: 'Coordinador Académico',
        image: coord_preescolar,
    },
    {
        name: 'Yaneidys Coronell Acosta',
        position: 'Coordinadora Preescolar',
        image: sec_academica,
    },
];

const ConsejoAcademico = () => {
    return (
        <div className="consejo-directivo">
            {members.map((member, index) => (
                <div className="member" key={index}>
                    <img src={member.image} alt={`${member.name}`} className="member-image" />
                    <div className="member-info">
                        <h3>{member.name}</h3>
                        <h4>{member.position}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ConsejoAcademico;