import type { FC } from "react";
import "./Cristips.css";
import { FaInstagram } from "react-icons/fa";

const Cristips: FC = () => {
  return (
    <div className="cristips-container">
      <a
        href="https://www.instagram.com/dr.cristips/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram id="ig" /> @dr.cristips
      </a>

      <h2>
        {" "}
        Conoce tips prácticos para mejorar tu salud física, mental y emocional,
        escritos por nuestra colaboradora{" "}
      </h2>
    </div>
  );
};

export default Cristips;
