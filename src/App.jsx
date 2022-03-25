import './App.css';

import React from 'react';
import MotorcyclesAccordion from './components/MotorcyclesAccordion';
import CarsAccordion from './components/CarsAccordion';
import TrucksAccordion from './components/TrucksAccordion';
import Header from './components/Header';
import Banner from  './components/Banner';
import CarModels from './components/CarModels';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MotorcyclesAccordion title="Motos"/>
      <CarsAccordion title="Carros"/>
      <TrucksAccordion title="Caminhões" />
      {/* <CarModels /> */}
    </div>
  );
}

export default App;
