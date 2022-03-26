import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HeaderBanner from './components/HeaderBanner';
import CarModels from './components/CarModels';
import Accordions from './components/Accordions';
import MotorcycleModels from './components/MotorcycleModels';
import TruckModels from './components/TruckModels';


function App() {
  return (
    <Router>
      <div>{<HeaderBanner/>}</div>
      <Routes>
        <Route path="/" element={<Accordions/>} />
        <Route path="/carModels/:idBrandCar" element={<CarModels />}/>
        <Route path="/motorcycleModels/:idBrandMotorcycle" element={<MotorcycleModels />}/>
        <Route path="/truckModels/:idBrandTruck" element={<TruckModels />}/>
      </Routes>
    </Router>
  );
}

export default App;
