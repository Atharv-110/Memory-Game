import React from "react";
import { useState, useEffect } from "react";

import SingleCard from "./singleCard";

// images import
import backImg from "../assets/cover.png";
import Img1 from "../assets/img_1.png";
import Img2 from "../assets/img_2.png";
import Img3 from "../assets/img_3.png";
import Img4 from "../assets/img_4.png";
import Img5 from "../assets/img_5.png";
import Img6 from "../assets/img_6.png";

const cardImages = [
  { src: Img1, matched: false },
  { src: Img2, matched: false },
  { src: Img3, matched: false },
  { src: Img4, matched: false },
  { src: Img5, matched: false },
  { src: Img6, matched: false },
];

export default function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    // window.location.reload(true)
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    // console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        // console.log("cards match")
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
        // resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

//   console.log(cards);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
            backImg={backImg}
          />
        ))}
      </div>
      <button className="new-game-btn" onClick={shuffleCards}>
        New Game
      </button>
    </>
  );
}
