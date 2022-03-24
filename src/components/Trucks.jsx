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

  let marcasCaminhao = [];
  marcasCaminhao = trucks.map(function(trucks){
    return marcasCaminhao = trucks.nome.toLowerCase()
  })
  
  return(
    <div  className={props.setSelected}>
      {marcasCaminhao.map((Caminhao) => (
        <div>
          <ul>
            <li>{Caminhao}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Trucks;