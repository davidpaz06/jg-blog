import { FC } from "react";
import "./HistorySection.css";
import imageOne from "../../assets/img/juan-photo.jpg";
import imageThree from "../../assets/img/juan-photo-three.jpg";
import imgFour from "../../assets/img/jg-family.jpg";
import imgFive from "../../assets/img/jg-phrase.jpg";

interface HistoryProps {
  isEnglish?: boolean;
}

const text = [
  {
    titleSpanish: "Conoce a Juan Gómez",
    subtitleOne: "Juan Bautista Gomez Rivas (Juanchito) 1974-2015",
    historyOneSpanish: `Juanchito nació en Cabimas, Venezuela, donde vivió con sus padres y hermano hasta graduarse de bachiller. Continuó sus estudios en Maracaibo, en La Universidad del Zulia, en la Facultad de Medicina. Tras obtener su título de médico cirujano, se casó con Cristina, a quien conoció durante sus estudios. Juntos se trasladaron a São Paulo, Brasil, donde Juan realizó un postgrado en Urología. En 2004, después del nacimiento de su primera hija, Laura, regresaron a Venezuela, donde Juan trabajó como urólogo especializado en Endourología y cálculos renales.
En 2008 nació su segunda hija, Daniela quien llego para completar la familia de 4 
Juan continuó ejerciendo su profesión con un nivel de excelencia ejemplar, siempre comprometido con la resolución de cada caso, sin importar la hora, el día o la situación económica del paciente. 
A pesar de su dedicación profesional, Juan siempre mantuvo un equilibrio entre el trabajo y su familia, la cual fue siempre su prioridad.`,
    subtitleTwoSpanish: "Su pasión por el ejercicio",
    historyTwoSpanish: `Desde joven, siempre estuvo involucrado en una variedad de actividades tanto dentro como fuera de su entorno escolar. A lo largo de su vida, el ejercicio fue una prioridad constante. Durante su estancia en Brasil,, se integró a un grupo de ciclistas de montaña. Al regresar a Maracaibo, Venezuela, su amigo y colega urólogo Luis López lo invitó en el 2008 a participar en una carrera de 10 K en Caracas, experiencia que disfrutó enormemente y que marcó el inicio de su afición por el running y desde entonces comenzaron a correr juntos. Luego, él se unió al grupo de los polos runners, corriendo cada vez más. Su primer medio maratón tuvo lugar en 2013 y en 2014 completó un ultramaratón de 35 km en el páramo a más de 2,000 metros de altitud. En 2015, participó en su primer maratón de la CAF en Caracas. E hizo de Pacer en varias carreras en Maracaibo para animar a otros corredores a lograr su meta en un buen tiempo. 
Uno de sus sueños era participar en un maratón internacional, y había sido aceptado para el maratón de Chicago. Sin embargo, falleció un par de meses antes del evento. Pero, nuestro amigo y maratonista Ramón Rojas corrió en su honor. Desde entonces, decidimos rendir homenaje a su memoria cada año acumulando kilómetros cerca de la fecha de su partida.`,
    historyThreeSpanish: `En mayo de 2015, Juan se mudó con su familia a Chicago, ya que su esposa Cristina fue aceptada en un programa de residencia médica en medicina interna. Sin embargo, en agosto de ese mismo año, Juan falleció súbitamente de un infarto al miocardio.  

Juanchito fue una de esas personas inolvidables y  su presencia siempre dejaba una impresión duradera en quienes le rodeaban. Su constante búsqueda de lo positivo en cada circunstancia y su capacidad para destacar las cualidades especiales de cada individuo eran notables. Nos enseñó a vivir cada día al máximo y a celebrar cualquier pequeño logro. Su energía inagotable y su habilidad para encontrar tiempo para todo eran admirables. Su frase preferida “Lo mejor esta por venir”. Y hoy honramos su memoria celebrando la vida cada dia, dando lo mejor de nosotros y compartiendo su pasion  por el ejercicio.`,
  },
  {
    titleEnglish: "Meet Juan Gómez",
    historyOneEnglish: `Juanchito was born in Cabimas, Venezuela, where he lived with his parents and brother until graduating from high school. He continued his studies in Maracaibo at La Universidad del Zulia, in the Faculty of Medicine. After obtaining his degree as a surgeon, he married Cristina, whom he met during his studies. Together they moved to São Paulo, Brazil, where Juan completed a postgraduate degree in Urology. In 2004, after the birth of their first daughter, Laura, they returned to Venezuela, where Juan worked as a urologist specializing in Endourology and kidney stones.`,
    subtitleTwoEnglish: "His passion for exercise",
    historyTwoEnglish: `Since he was young, he was always involved in a variety of activities both inside and outside his school environment. Throughout his life, exercise was a constant priority. During his stay in Brazil, he joined a mountain biking group. Upon returning to Maracaibo, Venezuela, his friend and urology colleague Luis López invited him in 2008 to participate`,

    historyThreeEnglish: `In May 2015, Juan moved with his family to Chicago, as his wife Cristina was accepted into a medical residency program in internal medicine. However, in August of that same year, Juan suddenly passed away from a heart attack.`,
  },
];

const HistorySection: FC<HistoryProps> = ({ isEnglish }) => {
  return (
    <section id="history-section" className="history-container">
      <h2 className="history-title">
        {isEnglish ? text[1].titleEnglish : text[0].titleSpanish}
      </h2>

      <div className="history-content">
        <h3 className="history-subtitle">{text[0].subtitleOne}</h3>
        <p className="history-text">
          {isEnglish ? text[1].historyOneEnglish : text[0].historyOneSpanish}
        </p>
        <img src={imgFour} alt="Juan y su familia feliz" />
        <p className="history-text">
          {isEnglish
            ? text[1].historyThreeEnglish
            : text[0].historyThreeSpanish}
        </p>
        <img src={imgFive} alt="Frase de Juan" />

        <h3 className="history-subtitle">
          {isEnglish ? text[1].subtitleTwoEnglish : text[0].subtitleTwoSpanish}
        </h3>
        <p className="history-text">
          {isEnglish ? text[1].historyTwoEnglish : text[0].historyTwoSpanish}
        </p>
        <img src={imageOne} alt="Juan corriendo" />

        <img src={imageThree} alt="Juan nadando" />
      </div>
    </section>
  );
};

export default HistorySection;
