import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './header.css';

const Slider = () => {
  const data = [
    "30-DAY SATISFACTION GUARANTEE",
    "FREE DELIVERY ON ORDERS BY $40.00",
    "50.000+ HAPPY CUSTUMERS",
    "100% MONEY BACK GUARANTEE",
  ];
  const [indice, setIndice] = useState(0);
  const amountText = data?.length;
  const nextText = () => {
    setIndice(indice === amountText - 1 ? 0 : indice + 1)
  }
  const previusText = () => {
    setIndice( indice === 0 ? amountText - 1 : indice-1)
  }
  
  return (
    <div className="containerSlider">
      <button onClick={previusText}>
        <AiOutlineArrowLeft />
      </button>
        {data.map( (text, index) => {
            return (
                <div>
                    {indice === index && (
                    <div key={index} className={indice === index ? "show" : "hide"}>
                        <p key={index}> {text}</p>
                    </div>
                    )}
                    
                </div>)
        })}
      <button onClick={nextText}>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Slider;
