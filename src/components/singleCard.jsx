import React from "react";
import "./singleCard.css";

export default function singleCard({ card, handleChoice, flipped, disabled, backImg }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img
          src={backImg}
          onClick={handleClick}
          className="back"
          alt="card-back"
        />
      </div>
    </div>
  );
}
