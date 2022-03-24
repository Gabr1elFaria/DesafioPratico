import './App.css';

import React from 'react';
import MotorcyclesAccordion from './components/MotorcyclesAccordion';
import CarsAccordion from './components/CarsAccordion';
import TrucksAccordion from './components/TrucksAccordion';
import Header from './components/Header';
import Banner from  './components/Banner';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MotorcyclesAccordion title="Motos"/>
      <CarsAccordion title="Carros"/>
      <TrucksAccordion title="Caminhões" />
      
    </div>
  );
}

export default App;
