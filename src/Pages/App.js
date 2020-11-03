import React from 'react';
import './App.css';
import Header from '../components/header/Header';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';
import Pic01 from '../Assets/elite.png';
import Pic02 from '../Assets/elite-react.png';
import Pic03 from '../Assets/getting-started.png';

export default function App() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="card-position">
        <Cards image={Pic01} title="About Elite & React" />
        <Cards image={Pic02} title="Welcome to Elite & React" />
        <Cards image={Pic03} title="Getting Started with Elite & React" />
      </div>
      <Footer />
    </div>
  );
}
