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
          <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      
      <div className="header_right">
        <div className="icon_container">
        <i class="bi bi-gear"></i>

        </div>
        <div className="icon_container">
        <i class="fa-regular fa-user"></i>
        </div>
        <div className="icon_container">
        <i class="bi bi-bag"></i>
        </div>

      
      </div>
    </header>
  );
};

export default Header;