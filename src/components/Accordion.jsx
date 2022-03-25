import React, { useState } from "react";
import Chevron from "./Chevron.js";

import "./Accordion.css";

export default function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setSelected, setSelectedState] = useState("content");
  const [setRotate, setRotateState] = useState("icon");

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setSelectedState(setActive === "" ? "content show" : "content");
    setRotateState(setActive === "active" ? "icon" : "icon rotate");
  }

  return (
    <div className="section">
      <a className="a-button" href="#button"></a>
      <button
        id="button"
        className={`accordion ${setActive}`}
        onClick={toggleAccordion}
      >
        <p className="title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <article className={`${setShow}`}>
        <div></div>
      </article>
    </div>
  );
}
