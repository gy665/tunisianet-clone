import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <main className="body">
      <section className="banner">
        <img src="https://www.tunisianet.com.tn/img/cms/slideshow/slide-1.jpg" alt="Promo principale" />
      </section>

      <section className="ads">
        <img src="https://www.tunisianet.com.tn/img/cms/banners-promo/promo1.jpg" alt="Pub 1" />
        <img src="https://www.tunisianet.com.tn/img/cms/banners-promo/promo2.jpg" alt="Pub 2" />
      </section>

      <section className="products">
        <h3>Produits phares</h3>
        <div className="product-grid">
          {[1, 2, 3, 4].map(id => (
            <div key={id} className="product-card">
              <img src="https://via.placeholder.com/150" alt="Produit" />
              <h4>Produit {id}</h4>
              <p>Prix: 999 DT</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Body;
