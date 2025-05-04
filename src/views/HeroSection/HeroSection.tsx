import { FC, useState } from "react";

import "./HeroSection.css";
import Header from "../../components/Header/Header";
import heroImage from "../../assets/img/juan.png";
import img from "../../assets/img/juan-photo-two.jpg";
import imgTwo from "../../assets/img/jg.jpg";
import imgThree from "../../assets/img/juan-bycicle.jpg";
import imgFour from "../../assets/img/jg-marathon.jpg";
import imgSix from "../../assets/img/jg-medal.jpg";
import { MdOutlineTranslate } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

interface HeroProps {
  isEnglish?: boolean;
  toggleLanguage?: () => void;
}

const HeroSection: FC<HeroProps> = ({ isEnglish, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleRedirect = () => {
    window.location.href = "/";
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const text = [
    {
      titleSpanish: "Suma KM por Juan Gómez",
      sectionSpanish: "Por cada kilómetro que sumamos, honramos su historia.",
      descriptionSpanish:
        "Esta iniciativa nace para rendir homenaje a Juan Gómez, un apasionado del deporte y la vida. Desde cualquier lugar del mundo, puedes sumar kilómetros en su memoria y ser parte de este legado que sigue avanzando.",
      campaignTitleSpanish: "¿Qué es Suma KM por Juan Gómez?",
      campaignSpanish:
        "Esta es una campaña de bienestar que iniciamos en el 2016 en memoria de Juan, quien falleció de un ataque cardíaco a la edad de 41 años. Juan tenía hiperlipidemia familiar y niveles elevados de Lipoproteina(a) #lpa, un factor de riesgo para la enfermedades cardiovasculares, independientemente de los niveles de colesterol.",
    },
    {
      titleEnglish: "Add KM for Juan Gómez",
      sectionEnglish: "For each kilometer we add, we honor his story.",
      descriptionEnglish:
        "This initiative was born to pay tribute to Juan Gómez, a passionate about sports and life. From anywhere in the world, you can add kilometers in his memory and be part of this legacy that continues to move forward.",
      campaignTitleEnglish: "What is Add KM for Juan Gómez?",
      campaignEnglish:
        "This is a wellness campaign that we started in 2016  in memory of Juan, who passed away from a heart attack at the age of 41.  Juan had familial hyperlipidemia and elevated levels of Lipoprotein(a) #lpa an independent risk factor for cardiovascular diseases, regardless of cholesterol levels.",
    },
  ];

  return (
    <section id="hero-section" className="hero-container">
      <div className="hero-header">
        <h2 className="header-title" onClick={handleRedirect}>
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

      <div className={`campaign ${isOpen ? "open" : ""}`}>
        <div className={`campaign-container `}>
          <div className="campaign-header" onClick={handleToggle}>
            <IoIosArrowDown className={`arrow left ${isOpen ? "open" : ""}`} />
            <h2 className="campaign-title">
              {isEnglish
                ? text[1].campaignTitleEnglish
                : text[0].campaignTitleSpanish}
            </h2>
            <IoIosArrowDown className={`arrow right ${isOpen ? "open" : ""}`} />
          </div>

          <p>{isEnglish ? text[1].campaignEnglish : text[0].campaignSpanish}</p>
          <img src={imgTwo} alt="Juan en el hospital" />
        </div>

        <div className={`campaign-gallery ${isOpen ? "open" : ""}`}>
          <img src={imgThree} alt="Juan en bicicleta" className="img-three" />
          <img
            src={imgFour}
            alt="Juan corriendo un maratón"
            className="img-four"
          />
          <img src={img} alt="Juan y su familia" className="img-five" />
          <img src={imgSix} alt="Juan con su medalla" className="img-six" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
