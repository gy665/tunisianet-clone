import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <header className="header">
      
      <div className="header_left">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHRShHmpAdboWH8FHqhucns8w6S5HxcP04Q&s" 
          alt="Tunisianet Logo" 
          className="header_logo" 
        />
      </div>
      
      <div className="header_middle">
        <div className="categories_dropdown">
          <span>Toutes nos catégories</span>
          <span className="dropdown_arrow">▼</span>
        </div>
        
        <div className="search_block">
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="search_input" 
          />
          <button className="search_button">
            <span className="search_icon">🔍</span>
          </button>
        </div>
      </div>
      
      <div className="header_right">
        <div className="icon_container">
          <img 
            src="https://img.icons8.com/color/512/settings--v2.png" 
            alt="Settings" 
            className="header_icon settings_icon" 
          />
        </div>
        <div className="icon_container">
          <img 
            src="https://static-00.iconduck.com/assets.00/user-icon-2046x2048-9pwm22pp.png" 
            alt="Account" 
            className="header_icon user_icon" 
          />
        </div>
        <div className="icon_container">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" 
            alt="Cart" 
            className="header_icon cart_icon" 
          />
        </div>

      
      </div>
    </header>
  );
};

export default Header;