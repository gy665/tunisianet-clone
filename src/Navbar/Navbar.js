import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: "Informatique",
      columns: [
        {
          title: "PC Portables",
          items: [
            "PC Portable Gaming",
            "PC Portable Bureautique",
            "PC Portable Ultrabook",
            "PC Portable 2-en-1",
            "PC Portable Student"
          ]
        },
        {
          title: "Accessoires",
          items: [
            "Sacs & Housses",
            "Chargeurs",
            "Batteries",
            "Station d'accueil",
            "Refroidisseurs"
          ]
        }
      ]
    },
    {
      name: "Téléphonie & Tablette",
      columns: [
        {
          title: "Smartphones",
          items: [
            "Android",
            "iOS",
            "Reconditionnés",
            "5G",
            "Entrée de Gamme"
          ]
        },
        {
          title: "Accessoires",
          items: [
            "Étuis & Coques",
            "Protections écran",
            "Chargeurs sans fil",
            "Power Banks",
            "Kits mains libres"
          ]
        }
      ]
    },
    {
      name: "TV & Audio",
      columns: [
        {
          title: "Téléviseurs",
          items: [
            "4K UHD",
            "Smart TV",
            "OLED",
            "TV Gaming",
            "TV Murale"
          ]
        },
        {
          title: "Audio",
          items: [
            "Barres de son",
            "Home Cinéma",
            "Casques",
            "Enceintes",
            "Micros"
          ]
        }
      ]
    },
    {
      name: "Electroménager",
      columns: [
        {
          title: "Gros Électroménager",
          items: [
            "Réfrigérateurs",
            "Lave-linge",
            "Lave-vaisselle",
            "Cuisinières",
            "Congélateurs"
          ]
        },
        {
          title: "Petit Électroménager",
          items: [
            "Robots cuisine",
            "Cafetières",
            "Friteuses",
            "Grill",
            "Mixeurs"
          ]
        }
      ]
    },
    {
      name: "Composants",
      columns: [
        {
          title: "Composants PC",
          items: [
            "Processeurs",
            "Cartes graphiques",
            "RAM",
            "Cartes mères",
            "SSD"
          ]
        },
        {
          title: "Périphériques",
          items: [
            "Écrans",
            "Claviers",
            "Souris",
            "Webcams",
            "Imprimantes"
          ]
        }
      ]
    },
    {
      name: "Accessoires",
      columns: [
        {
          title: "Informatique",
          items: [
            "Souris",
            "Claviers",
            "Casques",
            "Tapis de souris",
            "Hubs USB"
          ]
        },
        {
          title: "Connectique",
          items: [
            "Câbles HDMI",
            "Adaptateurs",
            "Chargeurs",
            "Docks",
            "Switchs réseau"
          ]
        }
      ]
    },
    {
      name: "Promotions",
      columns: [
        {
          title: "Offres spéciales",
          items: [
            "Packs économiques",
            "Soldes",
            "Dernières pièces",
            "Remises volume",
            "Anciens modèles"
          ]
        },
        {
          title: "Occasions",
          items: [
            "Reconditionnés",
            "Démonstration",
            "Retours magasin",
            "Garantie étendue",
            "Économisez jusqu'à 50%"
          ]
        }
      ]
    }
  ];

  return (
    <nav className="category-navbar">
      <div className="nav-container">
        <ul className="main-categories">
          {categories.map((category, index) => (
            <li 
              key={index}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <span className="category-name">{category.name}</span>
              
              {activeCategory === index && (
                <div className="mega-menu-container">
                  <div className="mega-menu">
                    {category.columns.map((column, colIndex) => (
                      <div key={colIndex} className="menu-column">
                        <h4>{column.title}</h4>
                        <ul>
                          {column.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <button className="menu-item">
                                <span className="menu-item-text">{item}</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;