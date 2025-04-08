import { FC } from "react";
import "./HeroSection.css";
import Header from "../../components/Header/Header";
import heroImage from "../../assets/img/juan.png";
import img from "../../assets/img/juan-photo-two.jpg";

const HeroSection: FC = () => {
  return (
    <section id="hero-section" className="hero-container">
      <div className="hero-header">
        <h2 className="header-title">Suma KM por Juan Gómez</h2>
        <Header />
      </div>

      <div className="hero-content">
        <div className="image-container">
          <img src={heroImage} alt="Juan Gomez" className="hero-image" />
        </div>
        <div className="text-container">
          <h1 className="hero-title">
            Por cada kilómetro que sumamos, honramos su historia.
          </h1>
          <p className="hero-description">
            Esta iniciativa nace para rendir homenaje a Juan Gómez, un
            apasionado del deporte y la vida. Desde cualquier lugar del mundo,
            puedes sumar kilómetros en su memoria y ser parte de este legado que
            sigue avanzando.
          </p>

          <img src={img} alt="Juan y su familia" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
