import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import api from "../services/api";

import "./MainComponents.css";

function Motorcycle(props) {
  const [motorcycle, setMotorcycle] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/motos/marcas");
      setMotorcycle(response.data);
    })();
  },[]);

  let motBrand = {};
  motBrand = motorcycle.map(function (motorcycle) {
    return (motBrand = motorcycle);
  });

  return (
    <div className="container">
      <div className={props.setSelected}>
        <ul className="list">
          {motBrand.map((motorcycle) => {
            return (
              <li className="li-list" key={motorcycle.codigo}>
                <Link to={`/motorcycleModels/${motorcycle.codigo}`}>
                  <span>{motorcycle.nome.toLowerCase()}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Motorcycle;
