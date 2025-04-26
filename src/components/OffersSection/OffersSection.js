// OffersSection.js
import React from 'react';
import './OffersSection.css';

function OffersSection() {
  return (
    <section className="offers-section">
      <div className="section-header">
        <h2>PAIEMENT 36 MOIS</h2>
      </div>
      
      <div className="product-card">
        <div className="installment-badge">36 MOIS</div>
        <h3>GIGABYTE Laptop</h3>
        <p className="monthly-price">101.64 DT/mois</p>
      </div>
    </section>
  );
}
export default OffersSection;