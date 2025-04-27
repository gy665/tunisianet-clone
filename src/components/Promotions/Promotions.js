import React from 'react';
import './Promotions.css';

const Promotions = () => {
  const promotionImages = [
    `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/ps_imagegrid/images/0e8a991bbf304fde932658e5a932b8e2589fb0ac_gigabyte%20g6kf.jpg")}`,
    `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/ps_imagegrid/images/93bb610c1db656b6ca9600c4f1541f33c42576eb_ecran%20lg.jpg")}`,
    `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/ps_imagegrid/images/5e15398013c0b8e5e88fd87bfa3a91fe1adcf0d7_SMART%209.jpg")}`,
    `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/ps_imagegrid/images/85e6aae6af2aa77c71883b6e65e5f20219d79baa_l11050.jpg")}`,
    `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/ps_imagegrid/images/ef8fe26ab315893e12b25e44894d9c8a2a41d40f_gaming%20azur%20redragon.jpg")}`,
    `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/ps_imagegrid/images/adc26af4332f74ab70865d3b2dd5bf15e8ddacac_du7000.jpg")}`,
    `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/ps_imagegrid/images/e5ce5a79a3db49863e80d8eeb6652e1414d8ca73_12x.jpg")}`,
    `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/ps_imagegrid/images/9947f8c72b7db8e2f0b4112f609b38ffd5657b51_tcl%20tab%2011.jpg")}`
  ];

  return (
    <section className="tunisianet-promotions">
      <div className="promotions-grid">
        {promotionImages.map((imageUrl, index) => (
          <div key={index} className="promotion-card">
            <img 
              src={imageUrl} 
              alt={`Promotion ${index + 1}`}
              className="promotion-image" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;