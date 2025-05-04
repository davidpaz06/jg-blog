import { FC } from "react";
import "./MVSection.css";
// import Drawing from "../../components/Drawing";

interface MVProps {
  isEnglish?: boolean;
}

const text = [
  {
    missionTitleSpanish: "Misión",
    missionDescriptionSpanish:
      "Inspirar a las personas a moverse y rendir homenaje a la vida de Juan Gómez, sumando kilómetros desde cualquier lugar del mundo.",
    visionTitleSpanish: "Visión",
    visionDescriptionSpanish:
      "Formar una comunidad unida por el deporte, el amor y la memoria para la prenvención de enfermedades cardiovasculares a través del movimiento y la solidaridad.",
  },
  {
    missionTitleEnglish: "Mission",
    missionDescriptionEnglish:
      "Inspire people to move and pay tribute to the life of Juan Gómez, adding kilometers from anywhere in the world.",
    visionTitleEnglish: "Vision",
    visionDescriptionEnglish:
      "To form a community united by sport, love, and memory for the prevention of cardiovascular diseases through movement and solidarity.",
  },
];

const MVSection: FC<MVProps> = ({ isEnglish }) => {
  return (
    <section id="mv-section" className="mv-section">
      <div className="mv-container">
        <div className="m-container">
          <div className="m-text">
            <h3 className="m-title">
              {isEnglish
                ? text[1].missionTitleEnglish
                : text[0].missionTitleSpanish}
            </h3>
            <p className="m-description">
              {isEnglish
                ? text[1].missionDescriptionEnglish
                : text[0].missionDescriptionSpanish}
            </p>
          </div>
        </div>

        <div className="v-container">
          <div className="v-text">
            <h3 className="v-title">
              {isEnglish
                ? text[1].visionTitleEnglish
                : text[0].visionTitleSpanish}
            </h3>
            <p className="v-description">
              {isEnglish
                ? text[1].visionDescriptionEnglish
                : text[0].visionDescriptionSpanish}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVSection;
