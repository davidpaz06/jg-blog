import { FC } from "react";
import "./CTA.css";

interface CTAProps {
  isEnglish?: boolean;
}

const text = [
  {
    titleSpanish: "¿Estás listo para unirte?",
    buttonSpanish: "Súmate aquí",
    descriptionSpanish:
      "Haz clic aquí para sumar tus kilómetros desde donde estés.",
  },
  {
    titleEnglish: "Are you ready to join?",
    buttonEnglish: "Join here",
    descriptionEnglish:
      "Click here to add your kilometers from wherever you are.",
  },
];

const CTA: FC<CTAProps> = ({ isEnglish }) => {
  return (
    <section id="cta-section" className="cta-container">
      <div className="cta-content">
        <h2 className="cta-title">
          {isEnglish ? text[1].titleEnglish : text[0].titleSpanish}
        </h2>
        <a href="https://www.youtube.com" className="cta-button">
          {isEnglish ? text[1].buttonEnglish : text[0].buttonSpanish}
        </a>
        <p className="cta-description">
          {isEnglish ? text[1].descriptionEnglish : text[0].descriptionSpanish}
        </p>
      </div>
    </section>
  );
};

export default CTA;
