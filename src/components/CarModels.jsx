import React, { useState, useEffect} from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

import "./MainModels.css";

function CarModels(props) {
  const [models, setModels] = useState([]);
  const { idBrandCar } = useParams();
  
  useEffect(() => {
    (async () => {
      const response = await api.get(`/carros/marcas/${idBrandCar}/modelos`);
      setModels(response.data.modelos);
    })();
  },[])


   let names = {};
   names = models.map(function(models){
    return names = models;
  })

  let cars = {};

  cars = names.map(function (car) {
    return (cars = car.nome);
  });
 
  cars.reverse();

  return (
    <div>
    <article className="flexbox">
      <div className="box">
          {cars.map((car) => (
            <div>
              <ul className="lista">
                <li  className="li-lista">{car}</li>
              </ul>
            </div>
          ))}
      </div>
    </article>
    </div>
  );
}

export default CarModels;