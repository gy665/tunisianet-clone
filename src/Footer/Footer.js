import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="tunisianet-footer">
      {/* Social Media Section - Exact Tunisianet Style */}
      <div className="social-section">
        <div className="social-container">
        <div className="social-icons">
            {/* Facebook */}
            <a href="https://facebook.com/tunisianet.tn" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/tunisianet" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>

            {/* Instagram - New Working URL */}
            <a href="https://instagram.com/tunisianet.tn" target="_blank" rel="noopener noreferrer">
              <img src="https://simpleicons.org/icons/instagram.svg
" alt="Instagram" />
            </a>

            {/* YouTube - New Working URL */}
            <a href="https://youtube.com/c/TunisianetOfficiel" target="_blank" rel="noopener noreferrer">
              <img src="https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png" alt="YouTube" />
            </a>

            {/* Pinterest - New Working URL */}
            <a href="https://pinterest.com/tunisianet" target="_blank" rel="noopener noreferrer">
              <img src="https://www.freepnglogos.com/uploads/pinterest-logo-p-png-0.png" alt="Pinterest" />
            </a>

            {/* LinkedIn - New Working URL */}
            <a href="https://linkedin.com/company/tunisianet" target="_blank" rel="noopener noreferrer">
              <img src="https://www.svgrepo.com/show/922/linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>


     {/* Delivery Info Box - Exactly like Tunisianet website */}
     <div className="delivery-info-container">
        <div className="delivery-info-box">
          <div className="delivery-features">
            <div className="delivery-feature">
              <img src="https://www.tunisianet.com.tn/modules/blockreassurance/views/img/img_perso/livraison_reassurance_tunisianet.png" alt="Fast Delivery" />
              <div className="feature-text">
                
                <p>Livraison en 24h(**) Hors confinement</p>
              </div>
            </div>

            <div className="delivery-feature">
              <img src="https://www.tunisianet.com.tn/modules/blockreassurance/views/img/img_perso/ouverture_reassurance_tunisianet.png" alt="Secure Payment" />
              <div className="feature-text">
                
                <p>Ouvert tous les jours de 8h00 à 19h00</p>
              </div>
            </div>

            <div className="delivery-feature">
              <img src="https://www.tunisianet.com.tn/modules/blockreassurance/views/img/img_perso/contact_reassurance_tunisianet.png" alt="Customer Support" />
              <div className="feature-text">
                
                <p>Contactez-nous au +216 31 31 00 00</p>
              </div>
            </div>
          </div>

          <div className="delivery-note">
          (**) Livraison sur le grand Tunis & Commande passée avant 14h sinon le lendemain matin
          </div>
        </div>
      </div>




           {/* New Multi-Column Footer Section */}
<div className="footer-columns-container">
  <div className="footer-columns">
    {/* Column 1: Notre Société */}
    <div className="footer-column">
      <h3>NOTRE SOCIÉTÉ</h3>
      <ul>
        <li><button aria-label="Contact us">Contactez-nous</button></li>
        <li><button aria-label="À propos">À propos</button></li>
        <li><button aria-label="Nos Magasins">Nos Magasins</button></li>
      </ul>
    </div>

    {/* Column 2: Informations Légales */}
    <div className="footer-column">
      <h3>INFORMATIONS LÉGALES</h3>
      <ul>
        <li><button aria-label="Livraison">Livraison</button></li>
        <li><button aria-label="Conditions d'utilisation">Conditions d'utilisation</button></li>
        <li><button aria-label="Paiement sécurisé">Paiement sécurisé</button></li>
      </ul>
    </div>

    {/* Column 3: Your Account */}
    <div className="footer-column">
      <h3>YOUR ACCOUNT</h3>
      <ul>
        <li><button aria-label="Personal Info">Personal Info</button></li>
        <li><button aria-label="Orders">Orders</button></li>
        <li><button aria-label="Credit slips">Credit slips</button></li>
        <li><button aria-label="Addresses">Addresses</button></li>
      </ul>
    </div>

    {/* Column 4: Contact */}
    <div className="footer-column">
      <h3>CONTACT</h3>
      
      <address>
      Tunisianet<br />
        10 Rue Saint Augustin<br />
        1002 Tunis<br />
        Tunisia<br />
        <br />
        <button onClick={() => window.location.href = 'tel:+21631310000'} aria-label="Contact us">+216 31 31 00 00</button><br />
        <button onClick={() => window.location.href = 'tel:+21632406608'} aria-label="Contact us">+216 32 40 66 08</button><br />
        <button onClick={() => window.location.href = 'mailto:contact@tunisianet.com.tn'} aria-label="Contact us">contact@tunisianet.com.tn</button>
      </address>
    </div>
  </div>
</div>


      {/* Copyright */}
      <div className="copyright">
          <div className="container">
            <p>© 2025 - Tunisianet™</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;