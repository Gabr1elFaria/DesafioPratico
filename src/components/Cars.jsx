import React, { useState, useEffect } from 'react';
import api from '../services/api'

import './Cars.css'

function Cars (props) {
  
  const [cars, setCars] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await api.get('/carros/marcas');
      setCars(response.data);
    })();
  })

  let marcasCarro = [];
  marcasCarro = cars.map(function(cars){
    return marcasCarro = cars.nome;
  })

  return (
    <div  className={props.setSelected}>
      {marcasCarro.map((Carro) => (
        <div>
          <ul>
            <li>{Carro}</li>
          </ul>
        </div>
      ))}
    </div>
  )

  };

export default Cars;


      