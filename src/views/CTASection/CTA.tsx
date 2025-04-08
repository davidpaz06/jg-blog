import { FC } from "react";
import "./CTA.css";

const CTA: FC = () => {
  return (
    <section id="cta-section" className="cta-container">
      <div className="cta-content">
        <h2 className="cta-title">¿Estás listo para unirte?</h2>
        <a href="https://www.youtube.com" className="cta-button">
          Súmate aquí
        </a>
        <p className="cta-description">
          Haz clic aquí para sumar tus kilómetros desde donde estés.
        </p>
      </div>
    </section>
  );
};

export default CTA;
