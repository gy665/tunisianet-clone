import React, { useState, useEffect } from 'react';
import './Body.css';
import Promotion from '../components/Promotions/Promotions';

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/31ed7f74f2f8039d4deb1a34e246965fd989151d_logitech%20G.jpg")}`,
      alt: "Promotion 1"
    },
    {
      image: `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/5bfe5d37668b32055d3ce55828095c63ed4d1450_beko%20mal.jpg")}`,
      alt: "Promotion 2"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/13241fd00723fb9cd7dc52af1d0b291f2fcb24a4_asus%20promo.jpg")}`,
      alt: "Promotion 3"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/321484e1ebd756bdf6393edad26648545cb21679_12x%20sans%20interet.jpg")}`,
      alt: "Promotion 4"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/4d77a532ec955f61ceeb15ceaa53c81b540e143c_Banni%C3%A8re-1580X460.jpg")}`,
      alt: "Promotion 5"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/a48c48d07e3ef15ef9e648fc707c7d01e64581d2_hyperX%20Banner.jpg")}`,
      alt: "Promotion 6"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/f7e1bb415313007e83c9bc24b3dec7a9559cb820_msi%20ecran.jpg")}`,
      alt: "Promotion 7"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="body">
      {/* Carousel Section */}
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
  
  {/* Add these arrow buttons */}
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
<Promotion />

      {/* Ads Section (unchanged) */}
      <section className="ads">
        <img src="https://www.tunisianet.com.tn/img/cms/banners-promo/promo1.jpg" alt="Pub 1" />
        <img src="https://www.tunisianet.com.tn/img/cms/banners-promo/promo2.jpg" alt="Pub 2" />
      </section>

      
    </main>
  );
};

export default Body;