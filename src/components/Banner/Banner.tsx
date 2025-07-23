import type { FC } from "react";
import "./Banner.css";

const Banner: FC = () => {
  return (
    <div className="banner">
      <h1>¡Súmate al reto de sumar kilómetros por tu bienestar!</h1>
      <p>
        Haz ejercicio, acumula kilómetros y participa en nuestra campaña
        saludable.
      </p>
      {/* <button>Descubre cómo participar</button> */}
    </div>
  );
};

export default Banner;
