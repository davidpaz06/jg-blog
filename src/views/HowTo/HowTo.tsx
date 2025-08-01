import type { FC } from "react";
import "./HowTo.css";

interface HowToProps {
  isEnglish?: boolean;
}

const text = [
  {
    questionSpanish: "¿Cómo participar en el reto?",
    step1SpanishH2: "1. Muévete:",
    step1Spanish: "Camina, corre o pedalea. ¡Todo cuenta!",
    step2SpanishH2: "2. Registra tus kilómetros:",
    step2Spanish:
      "Usa tu app favorita o dispositivo para seguir tu actividad (si no tienes como sumar kilómetros calcula por cada 10 minutos 1 km)",
    step3SpanishH2: "3. Comparte tu avance en el link:",
    step3Spanish:
      "¡Mientras más kilómetros acumules, más impactas tu salud y bienestar!",
  },
  {
    questionEnglish: "How to participate in the challenge?",
    step1EnglishH2: "1. Move:",
    step1English: "Walk, run, or cycle. Every bit counts!",
    step2EnglishH2: "2. Log your kilometers:",
    step2English:
      "Use your favorite app or device to track your activity (if you can't log kilometers, calculate 1 km for every 10 minutes of activity)",
    step3EnglishH2: "3. Share your progress at the link:",
    step3English:
      "The more kilometers you accumulate, the more you impact your health and well-being!",
  },
];

const HowTo: FC<HowToProps> = ({ isEnglish }) => {
  return (
    <div className="how-to-container">
      <h1>{isEnglish ? text[1].questionEnglish : text[0].questionSpanish}</h1>

      <div className="block step1">
        <h2>{isEnglish ? text[1].step1EnglishH2 : text[0].step1SpanishH2}</h2>
        <p>{isEnglish ? text[1].step1English : text[0].step1Spanish}</p>
      </div>
      <div className="block step2">
        <h2>{isEnglish ? text[1].step2EnglishH2 : text[0].step2SpanishH2}</h2>
        <p>{isEnglish ? text[1].step2English : text[0].step2Spanish}</p>
      </div>
      <div className="block step3">
        <h2>{isEnglish ? text[1].step3EnglishH2 : text[0].step3SpanishH2}</h2>
        <p>{isEnglish ? text[1].step3English : text[0].step3Spanish}</p>
      </div>
    </div>
  );
};

export default HowTo;
