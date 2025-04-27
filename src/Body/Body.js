import React from 'react';
import './Body.css';
import Promotion from '../components/Promotions/Promotions';
import Carousel from '../components/Carousel/Carousel';
import Ads from '../components/Ads/Ads';


const Body = () => {
  

  const slides = [
    {
      image: `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/31ed7f74f2f8039d4deb1a34e246965fd989151d_logitech%20G.jpg")}`,
      alt: "Promotion 1"
    },
    {
      image: `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/5bfe5d37668b32055d3ce55828095c63ed4d1450_beko%20mal.jpg")}`,
      alt: "Promotion 2"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/13241fd00723fb9cd7dc52af1d0b291f2fcb24a4_asus%20promo.jpg")}`,
      alt: "Promotion 3"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/321484e1ebd756bdf6393edad26648545cb21679_12x%20sans%20interet.jpg")}`,
      alt: "Promotion 4"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/4d77a532ec955f61ceeb15ceaa53c81b540e143c_Banni%C3%A8re-1580X460.jpg")}`,
      alt: "Promotion 5"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/a48c48d07e3ef15ef9e648fc707c7d01e64581d2_hyperX%20Banner.jpg")}`,
      alt: "Promotion 6"
    },
    {
      image:  `https://images.weserv.nl/?url=${encodeURIComponent("https://www.tunisianet.com.tn/modules/wbimageslider/views/img/f7e1bb415313007e83c9bc24b3dec7a9559cb820_msi%20ecran.jpg")}`,
      alt: "Promotion 7"
    }
  ];

 

  return (
    <main className="body">
      <Carousel slides={slides} />
      <Promotion />

      <Ads />
  
      
    </main>
  );
};

export default Body;