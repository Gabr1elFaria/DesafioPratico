import React from "react";
import MotorcycleAccordion from './MotorcycleAccordion';
import CarsAccordion from './CarsAccordion';
import TrucksAccordion from './TrucksAccordion';

function Accordions(){
  return(
    <>
      <CarsAccordion title="Carros" />
      <MotorcycleAccordion title="Motos"/> 
      <TrucksAccordion title="Caminhões" />
    </>
  )
}

export default Accordions;