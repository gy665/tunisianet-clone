import React from 'react';
import './Promotions.css';

const promotions = [
  {
    id: 1,
    title: "PC Portable HP 15",
    price: "1 299,000 DT",
    oldPrice: "1 499,000 DT",
    image: "https://www.tunisianet.com.tn/123456-large_default/pc-portable-hp-15.jpg"
  },
  {
    id: 2,
    title: "Smartphone Samsung A15",
    price: "699,000 DT",
    oldPrice: "799,000 DT",
    image: "https://www.tunisianet.com.tn/654321-large_default/smartphone-samsung-a15.jpg"
  },
  {
    id: 3,
    title: "TV LG 55'' 4K",
    price: "2 299,000 DT",
    oldPrice: "2 599,000 DT",
    image: "https://www.tunisianet.com.tn/789456-large_default/tv-lg-55-4k.jpg"
  },
];

const Promotions = () => {
  return (
    <div className="promotions">
      <h2 className="promo-title">Offres & Promotions</h2>
      <div className="promo-grid">
        {promotions.map(item => (
          <div className="promo-card" key={item.id}>
            <img src={item.image} alt={item.title} className="promo-image" />
            <h3 className="promo-name">{item.title}</h3>
            <div className="promo-prices">
              <span className="promo-new">{item.price}</span>
              <span className="promo-old">{item.oldPrice}</span>
            </div>
            <button className="promo-button">Voir Détail</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
