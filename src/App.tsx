import { FC } from "react";
import HeroSection from "./views/HeroSection/HeroSection";
import MVSection from "./views/MVSection/MVSection";
import HistorySection from "./views/HistorySection/HistorySection";
import CTA from "./views/CTASection/CTA";
import "./App.css";

const App: FC = () => {
  return (
    <>
      <HeroSection />
      <MVSection />
      <HistorySection />
      <CTA />
    </>
  );
};

export default App;
