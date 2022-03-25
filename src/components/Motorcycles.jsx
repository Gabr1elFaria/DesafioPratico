import React, { useState, useEffect } from 'react';
import api from '../services/api'

import './Motorcycles.css'

function Motorcycle (props) {
  
  const [motorcycle, setMotorcycle] = useState([]);
  
  useEffect(() => {
    (async () => {
      const response = await api.get('/motos/marcas');
      setMotorcycle(response.data);
    })();
  })

  let motBrand = {};
  motBrand = motorcycle.map(function(motorcycle){
    return motBrand = motorcycle;
  })

  let lowerCased = [];

  lowerCased = motBrand.map(function(motorcycle){
    return lowerCased = motorcycle.nome.toLowerCase()
  })



  return (
    <div className="container">
    <div  className={props.setSelected}>
    {lowerCased.map((Moto) => (
        <div className="list">
          <a className="a-list" href="">
            {Moto}
          </a>
        </div>
      ))}
    </div>
    </div>
  )

  };

export default Motorcycle;


      