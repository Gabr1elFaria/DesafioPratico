import React, { useState, useEffect } from "react";
import api from "../services/api";
import { NavLink as Link } from "react-router-dom";

import './MainComponents.css'

function Cars(props) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("/carros/marcas");
      setCars(response.data);
    })();
  },[]);

  let carBrand = {};
  carBrand = cars.map(function (cars) {
    return (carBrand = cars);
  });

  return (
    <div className="container">
      <div className={props.setSelected} >
      <ul className="list">
        {carBrand.map(car => {
          return (
            <li className="li-list" key={car.codigo} >
              <Link to={`/carModels/${car.codigo}`} >
              <span>{car.nome.toLowerCase()}</span>
              </Link>
            </li>
          )
        })}
        </ul >
      </div>
    </div>
  );
}

export default Cars;
