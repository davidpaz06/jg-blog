import type { FC } from "react";
import "./Cristips.css";
import { FaInstagram } from "react-icons/fa";

interface CristipsProps {
  isEnglish?: boolean;
}

const text = [
  {
    titleSpanish:
      "Conoce tips prácticos para mejorar tu salud física, mental y emocional, escritos por nuestra colaboradora",
  },
  {
    titleEnglish:
      "Discover practical tips to improve your physical, mental, and emotional health, written by our collaborator",
  },
];

const Cristips: FC<CristipsProps> = ({ isEnglish }) => {
  return (
    <div className="cristips-container">
      <a
        href="https://www.instagram.com/dr.cristips/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram id="ig" /> @dr.cristips
      </a>

      <h2> {isEnglish ? text[1].titleEnglish : text[0].titleSpanish} </h2>
    </div>
  );
};

export default Cristips;
