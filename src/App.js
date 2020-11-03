import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Cards from './components/Cards/Cards';

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}
