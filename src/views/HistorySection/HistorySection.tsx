import { FC } from "react";
import "./HistorySection.css";
import imageOne from "../../assets/img/juan-photo.jpg";
import imageThree from "../../assets/img/juan-photo-three.jpg";

interface HistoryProps {
  isEnglish?: boolean;
}

const text = [
  {
    titleSpanish: "Conoce a Juan Gómez",
    descriptionSpanish:
      "Esta iniciativa nace para rendir homenaje a Juan Gómez, un apasionado del deporte y la vida. Desde cualquier lugar del mundo, puedes sumar kilómetros en su memoria y ser parte de este legado que sigue avanzando.",
  },
  {
    titleEnglish: "Meet Juan Gómez",
    descriptionEnglish:
      "This initiative was born to pay tribute to Juan Gómez, a passionate about sports and life. From anywhere in the world, you can add kilometers in his memory and be part of this legacy that continues to move forward.",
  },
];

const HistorySection: FC<HistoryProps> = ({ isEnglish }) => {
  return (
    <section id="history-section" className="history-container">
      <h2 className="history-title">
        {isEnglish ? text[1].titleEnglish : text[0].titleSpanish}
      </h2>

      <div className="history-content">
        <img src={imageOne} alt="Juan corriendo" />
        <p className="history-text">
          {isEnglish ? text[1].descriptionEnglish : text[0].descriptionSpanish}
        </p>

        <img src={imageThree} alt="Juan nadando" />
      </div>
    </section>
  );
};

export default HistorySection;
