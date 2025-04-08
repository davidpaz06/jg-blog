import { FC } from "react";
// import Carousel from "../../components/Carousel/Carousel";
import "./HistorySection.css";
import imageOne from "../../assets/img/juan-photo.jpg";
import imageThree from "../../assets/img/juan-photo-three.jpg";

// const imageItems = [
//   { id: 1, content: <img src={imageOne} alt="History 1" /> },
//   { id: 2, content: <img src={imageTwo} alt="History 2" /> },
// ];

const HistorySection: FC = () => {
  return (
    <section id="history-section" className="history-container">
      {/* <Carousel
        items={imageItems}
        autoPlay={true}
        autoPlayInterval={4000}
        showIndicators={true}
        showArrows={true}
      /> */}
      <h2 className="history-title">Conoce a Juan Gómez</h2>

      <div className="history-content">
        <img src={imageOne} alt="Juan corriendo" />
        <p className="history-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          fugit. Exercitationem cumque iusto reprehenderit laborum aspernatur a
          accusantium beatae consequuntur, illum mollitia minus impedit deleniti
          praesentium dolores perspiciatis ipsum vero!
        </p>

        <img src={imageThree} alt="Juan nadando" />
      </div>
    </section>
  );
};

export default HistorySection;
