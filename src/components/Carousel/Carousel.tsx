import { FC, ReactNode, useState, useEffect } from "react";

export type CarouselItem = {
  id: number;
  content: ReactNode;
};

export type CarouselProps = {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number; // en milisegundos
  showIndicators?: boolean;
  showArrows?: boolean;
  renderItem?: (item: CarouselItem, index: number) => ReactNode;
};

const Carousel: FC<CarouselProps> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showIndicators = true,
  showArrows = true,
  renderItem,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, items.length]);

  return (
    <div className="carousel-container">
      {showArrows && (
        <button className="carousel-arrow prev" onClick={prevSlide}>
          ◀
        </button>
      )}
      <div className="carousel-slide">
        {renderItem
          ? renderItem(items[currentIndex], currentIndex)
          : items[currentIndex].content}
      </div>
      {showArrows && (
        <button className="carousel-arrow next" onClick={nextSlide}>
          ▶
        </button>
      )}
      {showIndicators && (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
