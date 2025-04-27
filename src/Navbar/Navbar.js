import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    
    {
      name: "Informatique",
      columns: [
        {
          title: "Ordinateur Portable",
          items: [
            "PC Portable Gaming",
            "PC Portable Bureautique",
            "PC Portable Ultrabook",
            "PC Portable 2-en-1",
            "PC Portable Student"
          ]
        },
        {
          title: "Accessoires et Périphériques",
          items: [
            "Sacs & Housses",
            "Chargeurs",
            "Batteries",
            "Station d'accueil",
            "Refroidisseurs"
          ]
        },
        {
          title: "Ordinateur de Bureau",
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
      name: "Téléphonie & Tablette",
      columns: [
        {
          title: "Tablette tactile",
          items: [
            "Tablette",
            "Tablette Graphique",
            "Etui de protection pour tablette",
            "Chargeur et Câble pour tablette",
            "Film de protection pour tablette",
            "Divers pour tablette"
          ]
        },
        {
          title: "Accessoires Téléphones",
          items: [
            "Etui de protection pour Téléphones",
            "Protections écran",
            "Chargeurs sans fil",
            "Power Banks",
            "Kits mains libres"
          ]
        }
      ]
    },
    {
      name: "Stockage",
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
      name: "Impression",
      columns: [
        {
          title: "Imprimantes",
          items: [
            "Imprimante à réservoir intégré",
            "Imprimante et Multifonction Jet d'encre",
            "Imprimante et Multifonction Laser",
            "Imprimante professionnelle",
            "Imprimante point de vente"
          ]
        },
        {
          title: "Photocopieurs",
          items: [
            "Photocopieurs A4 | A3",
            "Accessoires photocopieurs",
            
          ]
        }
        ,
        {
          title: "Papier",
          items: [
            "Papier A4",
            "Papier A3",
            "Enveloppe"
            
          ]
        }
      ]
    },{
      name: "TV-Son-Photos",
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
      name: "Sécurité",
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
      name: "Bureautique",
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
      name: "Réseau & Connectiques",
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
        <li className="climatisation-item">
            <a href="/climatisation" className="climatisation-button">
              Climatisation
            </a>
          </li>
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