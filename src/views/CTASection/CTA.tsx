import { FC } from "react";
import "./CTA.css";
import Banner from "../../components/Banner/Banner";

interface CTAProps {
  isEnglish?: boolean;
}

const text = [
  {
    titleSpanish: "¿Estás listo para sumar KM este año?",
    subtitleSpanish:
      "A partir del 01 de agosto, comienza la cuenta de los KM con una meta de 10.000 KM",
    buttonSpanish: "Suma KM",
    descriptionSpanish: "En este enlace puedes registrar tus KM sumados.",
  },
  {
    titleEnglish: "Ready to add KM this year?",
    subtitleEnglish:
      "Starting from August 1st, the KM count begins with a goal of 10,000 KM",
    buttonEnglish: "Add KM",
    descriptionEnglish: "You can register your added KM at this link.",
  },
];

const CTA: FC<CTAProps> = ({ isEnglish }) => {
  return (
    <>
      <Banner />
      <section id="cta-section" className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            {isEnglish ? text[1].titleEnglish : text[0].titleSpanish}
          </h2>
          <p className="cta-subtitle">
            {isEnglish ? text[1].subtitleEnglish : text[0].subtitleSpanish}
          </p>
          <a
            href="https://www.addforwellness.org/Home/Total"
            className="cta-button"
          >
            {isEnglish ? text[1].buttonEnglish : text[0].buttonSpanish}
          </a>
          <p className="cta-description">
            {isEnglish
              ? text[1].descriptionEnglish
              : text[0].descriptionSpanish}
          </p>
        </div>
      </section>
    </>
  );
};

export default CTA;
