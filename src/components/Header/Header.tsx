import { FC, useState, useEffect, useRef } from "react";
import "./Header.css";

const headerTabs: { name: string; href: string; class?: string }[] = [
  { name: "Inicio", href: "hero-section" },
  { name: "Misión y Visión", href: "mv-section" },
  { name: "Historia", href: "history-section" },
  { name: "Suma KM", href: "cta-section", class: "cta-button" },
];

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = headerTabs.map((tab) => document.getElementById(tab.href));

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    sections.forEach((section) => {
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        sections.forEach((section) => {
          if (section) observerRef.current?.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <div
      className={`header-container ${isScrolled ? "scrolled" : ""} ${
        activeSection ? `active-${activeSection}` : ""
      }`}
    >
      {headerTabs.map((tab) => (
        <button
          key={tab.name}
          className={`${tab.class} ${
            activeSection === tab.href ? "active-tab" : ""
          }`}
          onClick={() => {
            const section = document.getElementById(tab.href);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Header;
