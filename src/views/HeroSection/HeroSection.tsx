import { FC } from "react";

import "./HeroSection.css";
import Header from "../../components/Header/Header";
import heroImage from "../../assets/img/juan.png";
import img from "../../assets/img/juan-photo-two.jpg";
import { MdOutlineTranslate } from "react-icons/md";
interface HeroProps {
  isEnglish?: boolean;
  toggleLanguage?: () => void;
}

const HeroSection: FC<HeroProps> = ({ isEnglish, toggleLanguage }) => {
  const text = [
    {
      titleSpanish: "Suma KM por Juan Gómez",
      sectionSpanish: "Por cada kilómetro que sumamos, honramos su historia.",
      descriptionSpanish:
        "Esta iniciativa nace para rendir homenaje a Juan Gómez, un apasionado del deporte y la vida. Desde cualquier lugar del mundo, puedes sumar kilómetros en su memoria y ser parte de este legado que sigue avanzando.",
    },
    {
      titleEnglish: "Add KM for Juan Gómez",
      sectionEnglish: "For each kilometer we add, we honor his story.",
      descriptionEnglish:
        "This initiative was born to pay tribute to Juan Gómez, a passionate about sports and life. From anywhere in the world, you can add kilometers in his memory and be part of this legacy that continues to move forward.",
    },
  ];

  return (
    <section id="hero-section" className="hero-container">
      <div className="hero-header">
        <h2 className="header-title">
          {isEnglish ? text[1].titleEnglish : text[0].titleSpanish}
        </h2>
        <Header isEnglish={isEnglish} />
      </div>

      <div className="lang-button" onClick={toggleLanguage}>
        <span className="lang-button-icon">
          <MdOutlineTranslate
            style={{
              fontSize: "20px",
            }}
          />
        </span>
        <span className="lang-button-text">{isEnglish ? "EN" : "ES"}</span>
      </div>

      <div className="hero-content">
        <div className="image-container">
          <img src={heroImage} alt="Juan Gomez" className="hero-image" />
        </div>
        <div className="text-container">
          <h1 className="hero-title">
            {isEnglish ? text[1].sectionEnglish : text[0].sectionSpanish}
          </h1>
          <p className="hero-description">
            {isEnglish
              ? text[1].descriptionEnglish
              : text[0].descriptionSpanish}
          </p>

          <img src={img} alt="Juan y su familia" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
