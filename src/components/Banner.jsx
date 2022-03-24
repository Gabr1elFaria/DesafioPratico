import React from "react";

import './Banner.css'
import img from '../img/img.png';

export default function Header() {
  return(
    <div className="banner">
      <img className="img" src={img}></img>
      <div className="ps">
        <p className="pFirst">Pesquise aqui o</p>
        <p className="pSecond"> seu veículo</p>
      </div>
    </div>
  )
}