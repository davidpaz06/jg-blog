import { FC } from "react";
import "./Header.css";

interface Tab {
  nameSpanish: string;
  nameEnglish: string;
  href: string;
  class?: string;
}

const headerTabs: Tab[] = [
  { nameSpanish: "Inicio", nameEnglish: "Home", href: "hero-section" },
  {
    nameSpanish: "Misión y Visión",
    nameEnglish: "Mission & Vision",
    href: "mv-section",
  },
  { nameSpanish: "Historia", nameEnglish: "History", href: "history-section" },
  { nameSpanish: "Suma", nameEnglish: "Add", href: "cta-section" },
];

interface HeaderProps {
  isEnglish?: boolean;
}

const Header: FC<HeaderProps> = ({ isEnglish = false }) => {
  return (
    <div className={`header-container `}>
      {headerTabs.map((tab) => (
        <button
          key={tab.href}
          className={tab.class}
          onClick={() => {
            const section = document.getElementById(tab.href);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {isEnglish ? tab.nameEnglish : tab.nameSpanish}
        </button>
      ))}
    </div>
  );
};

export default Header;
