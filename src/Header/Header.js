import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header_left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHRShHmpAdboWH8FHqhucns8w6S5HxcP04Q&s" alt='' className="header_logo" />
      </div>
      
      <div className="header_middle">
        {/* Catalogue dropdown - now on LEFT */}
        <div className="header_catalogue" onClick={() => console.log('Catalogue clicked')}>
          <span>Toutes nos catégories</span>
          <span className="dropdown_icon">▼</span>
        </div>
        
        {/* Search bar with icon - now on RIGHT */}
        <div className="header_search_container">
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="header_search" 
          />
          <div 
            className="search_icon" 
            onClick={() => console.log('Search clicked')}
          >
            🔍
          </div>
        </div>
      </div>
          
      
      <div className="header_right">
        <span className="header_icon">🛒</span>
        <span className="header_icon">👤</span>
      </div>
    </header>
  );
};

export default Header;