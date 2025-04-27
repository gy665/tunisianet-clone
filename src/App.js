import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Body from './Body/Body';
import Footer from './Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
