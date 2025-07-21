import React from "react";
import Atencion from "@assets/atencion1.jpg";

function Horarios() {
  return (
    <div style={{ maxWidth: 700, margin: "2em auto", border: "3px solid #ffb800", borderRadius: 24, padding: "2em", background: "#fff" }}>
      <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: 24 }}>
        HORARIO DE ATENCIÓN PADRES <br /> DOCENTES
      </h2>
      <div style={{ background: "#e6f3fa", borderRadius: 8, padding: "1em", textAlign: "center", margin: "0 auto 2em auto", maxWidth: 400 }}>
        <div style={{ fontWeight: "bold" }}>De Lunes a Viernes de 2:00 pm a 6:00 pm</div>
        <div style={{ fontWeight: "bold", marginTop: 8 }}>Vía WhatsApp</div>
      </div>

      <div style={{ border: "3px solid #ffb800", borderRadius: 24, padding: "2em", marginTop: 32 }}>
        <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: 16 }}>
          HORARIO DE ATENCIÓN PADRES | PSICOORIENTACIÓN
        </h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <img
            src={Atencion}
            alt="Atención"
            style={{ width: 240, borderRadius: 16 }}
          />
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 16 }}>
          <thead>
            <tr style={{ background: "#e6f3fa" }}>
              <th style={{ border: "1px solid #bbb", padding: 8, fontWeight: "bold" }}></th>
              <th style={{ border: "1px solid #bbb", padding: 8, fontWeight: "bold" }}>LUNES</th>
              <th style={{ border: "1px solid #bbb", padding: 8, fontWeight: "bold" }}>MARTES</th>
              <th style={{ border: "1px solid #bbb", padding: 8, fontWeight: "bold" }}>MIÉRCOLES</th>
              <th style={{ border: "1px solid #bbb", padding: 8, fontWeight: "bold" }}>JUEVES</th>
              <th style={{ border: "1px solid #bbb", padding: 8, fontWeight: "bold" }}>VIERNES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: "1px solid #bbb", padding: 8, background: "#e6f3fa" }}>1</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>6:30 – 7:15</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #bbb", padding: 8, background: "#e6f3fa" }}>2</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #bbb", padding: 8, background: "#e6f3fa" }}>3</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>8:00 – 8:45</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>8:00 – 8:45</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #bbb", padding: 8, background: "#e6f3fa" }}>4</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>8:45 – 9:30</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>8:45 – 9:30</td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #bbb", padding: 8, background: "#e6f3fa" }}>5</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>10:00 – 10:45</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}></td>
            </tr>
            <tr>
              <td style={{ border: "1px solid #bbb", padding: 8, background: "#e6f3fa" }}>6</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>10:45 – 11:30</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>10:45 – 11:30</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>10:45 – 11:30</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>10:45 – 11:30</td>
              <td style={{ border: "1px solid #bbb", padding: 8 }}>10:45 – 11:30</td>
            </tr>
          </tbody>
        </table>
        <div style={{ fontStyle: "italic", fontSize: 15, marginTop: 12 }}>
          <b>NOTA:</b> Para poder ser atendido, debe avisar previamente a la Directora, al Director de grupo o la secretaria y así poder programar la cita.
        </div>
      </div>
    </div>
  );
}

export default Horarios;