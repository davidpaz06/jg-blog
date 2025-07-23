import type { FC } from "react";
import "./HowTo.css";

const HowTo: FC = () => {
  return (
    <div className="how-to-container">
      <h1>¿Cómo participar en el reto?</h1>

      <div className="block step1">
        <h2>1. Muévete:</h2>
        <p>Camina, corre o pedalea. ¡Todo cuenta! </p>
      </div>
      <div className="block step2">
        <h2>2. Registra tus kilómetros:</h2>
        <p>
          {" "}
          Usa tu app favorita o dispositivo para seguir tu actividad (si no
          tienes como sumar kilómetros calcula por cada 10 minutos 1 km){" "}
        </p>
      </div>
      <div className="block step3">
        <h2>3. Comparte tu avance en el link:</h2>
        <p>
          {" "}
          ¡Mientras más kilómetros acumules, más impactas tu salud y bienestar!{" "}
        </p>
      </div>
    </div>
  );
};

export default HowTo;
