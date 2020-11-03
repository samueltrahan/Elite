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
        <Cards
          image={Pic01}
          title="About Elite & React"
          paragraph="Elite is a React application template that can be used to display projects or information..."
        />
        <Cards
          image={Pic02}
          title="Welcome to Elite & React"
          paragraph="Check out the process it took to build this application and some of the features that you need to know to customize this site."
        />
        <Cards
          image={Pic03}
          title="Getting Started with Elite & React"
          paragraph="Welcome! I know you're looking for a site to display your work.  Check out this section for some details on how to get started and things you can do to make this site your own."
        />
      </div>
      <Footer />
    </div>
  );
}
