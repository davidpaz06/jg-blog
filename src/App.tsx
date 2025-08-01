import { FC, useState } from "react";
import HeroSection from "./views/HeroSection/HeroSection";
import MVSection from "./views/MVSection/MVSection";
import HistorySection from "./views/HistorySection/HistorySection";
import CTA from "./views/CTASection/CTA";
import HowTo from "./views/HowTo/HowTo";
import Cristips from "./views/Cristips/Cristips";
import "./App.css";

const App: FC = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const toggleLanguage = () => {
    setIsEnglish((prev) => !prev);
  };
  return (
    <>
      <HeroSection isEnglish={isEnglish} toggleLanguage={toggleLanguage} />
      <MVSection isEnglish={isEnglish} />
      <HowTo isEnglish={isEnglish} />
      <HistorySection isEnglish={isEnglish} />
      <CTA isEnglish={isEnglish} />
      <Cristips isEnglish={isEnglish} />
    </>
  );
};

export default App;
