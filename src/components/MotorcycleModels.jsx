import React, { useState, useEffect } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

import "./MainModels.css";

function MotorcycleModels(props) {
  const [models, setModels] = useState([]);
  const { idBrandMotorcycle } = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get(
        `/motos/marcas/${idBrandMotorcycle}/modelos`
      );
      setModels(response.data.modelos);
    })();
  }, []);

  let names = {};
  names = models.map(function (models) {
    return (names = models);
  });

  let motorcycles = {};

  motorcycles = names.map(function (motorcycle) {
    return (motorcycles = motorcycle.nome);
  });

  motorcycles.reverse();

  return (
    <article className="flexbox">
      <div className="box">
        {motorcycles.map((motorcycle) => (
          <div>
            <ul className="lista">
              <li className="li-lista">{motorcycle}</li>
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}

export default MotorcycleModels;
