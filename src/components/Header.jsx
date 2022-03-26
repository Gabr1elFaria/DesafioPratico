import React from "react";

import "./Header.css";
import home from '../img/home.png'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-component">
      <Link to="/">
        <img title="Ir para a página principal" className="image" src={home} />
      </Link>
      <a
        className="a-header"
        href="https://doutormultas.com.br/"
        title="Ir para Doutor Multas"
      >
        Doutormultas
      </a>
    </div>
  );
}
