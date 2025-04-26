/*import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  'https://www.tunisianet.com.tn/img/cms/slideshow/slide-1.jpg',
  'https://www.tunisianet.com.tn/img/cms/slideshow/slide-2.jpg',
  'https://www.tunisianet.com.tn/img/cms/slideshow/slide-3.jpg',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000); // Change every 4 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="Slider" className="slider-image" />
    </div>
  );
};

export default Slider;
*/