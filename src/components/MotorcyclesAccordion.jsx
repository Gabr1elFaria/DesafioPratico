import React, { useState } from 'react';
import Chevron from './Chevron';
import './Accordion.css'
import Motorcycles from './Motorcycles';

export default function Accordion (props) {
  
  const [setActive, setActiveState] = useState("");
  const [setSelected , setSelectedState] = useState("content");
  const [setRotate, setRotateState] = useState("icon");
  const [setShow, setShowState] = useState("article");

  function toggleAccordion(){
    setActiveState(setActive === "" ? "active" : "");
    setSelectedState(setActive === "" ? 'content show' : 'content');
    setRotateState( setActive === "active" ? "icon" : "icon rotate");
    setShowState(setActive === "" ? 'article-show' : 'article');
  }
 

return(
  <div className="section">
  <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
    <p className="title">{props.title}</p>
    <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
  </button>
  <article className={`${setShow}`}>
  <div><Motorcycles setSelected={`${setSelected}`} /></div>
  </article>
</div>
);
}
      
      