import React, { useState, useEffect } from 'react';
import api from '../services/api'

import './Trucks.css'

function Trucks (props) {


  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/caminhoes/marcas');
      setTrucks(response.data);
    })();
  })

  let truckBrand = {};
  truckBrand = trucks.map(function (trucks) {
    return (truckBrand = trucks);
  });

  let lowerCased = [];

  lowerCased = truckBrand.map(function (trucks) {
    return (lowerCased = trucks.nome.toLowerCase());
  });
  
  return(
    <div className="container">
      <div className={props.setSelected}>
        {lowerCased.map((Caminhao) => (
          <div className="list">
            <a className="a-list" href="">
              {Caminhao}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trucks;