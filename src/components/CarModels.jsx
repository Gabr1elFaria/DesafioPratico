import React, { useState, useEffect} from "react";
import api from "../services/api";

import './CarModels.css';

export default function(props){

  const [models, setModels] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await api.get('/carros/marcas/59/modelos');
      setModels(response.data.modelos);
    })();
  })


   let names = {};
   names = models.map(function(models){
    return names = models;
  })

  let carsName = {};

  carsName = names.map(function(car){
    return carsName = car.nome
  })
 
  carsName.reverse();

  return (
    <div className='container'>
      <div className={props.setSelected}>
      {carsName.map((Carro) => (
        <div>
          <ul>
            <li>{Carro}</li>
          </ul>
        </div>
      ))}
    </div>
    </div>
  );
}
