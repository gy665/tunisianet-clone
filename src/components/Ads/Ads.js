import React, { useState, useEffect } from 'react';
import './Ads.css';

const Ads = () => {
  const brands = [
    'https://www.tunisianet.com.tn/modules/wblogoslider/views/img/e892dbd79887420ab520e13d98b411002e9b7eac_marque_acer.png',
    'https://www.tunisianet.com.tn/modules/wblogoslider/views/img/e8c341e49f558c584e689f4ecf003335ea343665_marque_dell.png',
    'https://www.tunisianet.com.tn/modules/wblogoslider/views/img/69be67b14825e97210c3840388e599bfd68d7237_marque_apple.png',
    'https://www.tunisianet.com.tn/modules/wblogoslider/views/img/1184daa1300142c0e943202d9743e3f3d76bc034_180705-CBG-Adjusted-HUAWEI-logo-(Vertical&Horizontal%EF%BC%89-qu-06.png',
    'https://www.tunisianet.com.tn/modules/wblogoslider/views/img/2617db8253af14d8ab6c118e97c9a08e282020c6_marque_samsung.png',
    'https://www.tunisianet.com.tn/modules/wblogoslider/views/img/8db5bbb06960daeb77b6412f1e4f0c0a63275b0f_marque_msi.png',
    'https://www.tunisianet.com.tn/modules/wblogoslider/views/img/d2459ec74fad18dfaa1aad282c4bb9da5054ad43_marque_hp.png',
    'https://www.tunisianet.com.tn/modules/wblogoslider/views/img/08c934caf40880d89ad321b8626278474cf2b204_marque_lenovo.png'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % brands.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [brands.length]);

  // Clone first few brands to create seamless loop
  const displayBrands = [...brands, ...brands.slice(0, 8)];

  return (
    <section className="brands-carousel">
      <div className="brands-container">
        <div 
          className="brands-track" 
          style={{ transform: `translateX(-${currentIndex * 140}px)` }}
        >
          {displayBrands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand} alt={`Brand ${index % brands.length}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ads;