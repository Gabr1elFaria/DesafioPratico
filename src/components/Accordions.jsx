import React from "react";
import MotorcyclesAccordion from './MotorcyclesAccordion';
import CarsAccordion from './CarsAccordion';
import TrucksAccordion from './TrucksAccordion';

function Accordions(){
  return(
    <>
      <CarsAccordion title="Carros" />
      <MotorcyclesAccordion title="Motos"/> 
      <TrucksAccordion title="Caminhões" />
    </>
  )
}

export default Accordions;