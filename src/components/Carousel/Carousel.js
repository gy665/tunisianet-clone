// src/components/Carousel/Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css'; // We'll move the CSS too

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="carousel">
      <div className="slides-container">
        <div 
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        className="carousel-arrow left"
        onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button 
        className="carousel-arrow right"
        onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </section>
  );
};

export default Carousel;