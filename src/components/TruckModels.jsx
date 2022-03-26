import React, { useState, useEffect } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

import "./MainModels.css";

function TruckModels(props) {
  
  const [models, setModels] = useState([]);
  const { idBrandTruck } = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/caminhoes/marcas/${idBrandTruck}/modelos`);
      setModels(response.data.modelos);
    })();
  }, []);

  let names = {};
  names = models.map(function (models) {
    return (names = models);
  });

  let trucks = {};

  trucks = names.map(function (truck) {
    return (trucks = truck.nome);
  });

  trucks.reverse();

  return (
    <article className="flexbox">
      <div className="box">
        {trucks.map((truck) => (
          <div>
            <ul className="lista">
              <li className="li-lista">{truck}</li>
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

export default TruckModels;
