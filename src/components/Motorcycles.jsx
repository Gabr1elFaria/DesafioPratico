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

  let marcasMotos = [];
  marcasMotos = motorcycle.map(function(motorcycle){
    return marcasMotos = motorcycle.nome.toLowerCase();
  })



  return (
      <div  className={props.setSelected}>
        {marcasMotos.map((Moto) => (
          <div>
            <ul>
              <li>{Moto}</li>
            </ul>
          </div>
        ))}
      </div>
  )

  };

export default Motorcycle;


      