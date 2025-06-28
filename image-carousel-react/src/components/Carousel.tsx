import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

interface CarouselProps {
  images: string[];
  autoplay?: boolean;
  interval?: number;
}

const useCarousel = (images: string[], autoplay: boolean, interval: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const preloadImages = useCallback(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoplay) {
      const slideInterval = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval);
    }
  }, [autoplay, interval, nextSlide]);

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  };
};

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoplay = false,
  interval = 3000,
}) => {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(
    images,
    autoplay,
    interval
  );

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="carousel" aria-roledescription="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="carousel-item" key={index} aria-hidden={index !== currentIndex}>
            <img src={src} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="carousel-button prev" aria-label="Previous Slide">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button onClick={nextSlide} className="carousel-button next" aria-label="Next Slide">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Carousel);
