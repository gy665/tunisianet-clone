import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header_left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHRShHmpAdboWH8FHqhucns8w6S5HxcP04Q&s" alt='' className="header_logo" />
      </div>
      
       {/* Updated middle section */}
       <div className="header_middle">
        {/* Categories dropdown - left side */}
        <div className="categories_dropdown">
          <span>Toutes nos catégories</span>
          <span className="dropdown_arrow">▼</span>
        </div>
        
        {/* Search block - right side with yellow background */}
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
        <span className="header_icon">🛒</span>
        <span className="header_icon">👤</span>
        <span className="header_icon"><img src="https://img.icons8.com/color/512/settings--v2.png" alt=''className="header_settings"/></span>
      </div>
    </header>
  );
};

export default Header;