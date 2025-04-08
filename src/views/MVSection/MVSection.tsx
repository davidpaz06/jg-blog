import { FC } from "react";
import "./MVSection.css";
// import Drawing from "../../components/Drawing";
const MVSection: FC = () => {
  return (
    <section id="mv-section" className="mv-section">
      <div className="mv-container">
        <div className="m-container">
          <div className="m-text">
            <h3 className="m-title">Misión</h3>
            <p className="m-description">
              Inspirar a las personas a moverse y rendir homenaje a la vida de
              Juan Gómez, sumando kilómetros desde cualquier lugar del mundo.
            </p>
          </div>
        </div>

        <div className="v-container">
          <div className="v-text">
            <h3 className="v-title">Visión</h3>
            <p className="v-description">
              Formar una comunidad unida por el deporte, el amor y la memoria,
              que mantenga vivo su ejemplo a través del movimiento y la
              solidaridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVSection;
