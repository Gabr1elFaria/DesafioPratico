import React, { useState, useEffect } from "react";
import api from "../services/api";

import "./Cars.css";

function Cars(props) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/carros/marcas");
      setCars(response.data);
    })();
  });

  let carBrand = {};
  carBrand = cars.map(function (cars) {
    return (carBrand = cars);
  });

  return (
    <div className="container">
      <div className={props.setSelected}>
        {carBrand.map((Carro) => (
          <div className="list">
            <a className="a-list" href="">
              {Carro.nome.toLowerCase()}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
