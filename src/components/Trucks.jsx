import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import api from "../services/api";

import "./MainComponents.css";

function Trucks(props) {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/caminhoes/marcas");
      setTrucks(response.data);
    })();
  }, []);

  let truckBrand = {};
  truckBrand = trucks.map(function (trucks) {
    return (truckBrand = trucks);
  });

  return (
    <div className="container">
      <div className={props.setSelected}>
        <ul className="list">
          {truckBrand.map((truck) => {
            return (
              <li className="li-list" key={truck.codigo}>
                <Link to={`/truckModels/${truck.codigo}`}>
                  <span>{truck.nome.toLowerCase()}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Trucks;
