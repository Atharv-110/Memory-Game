import React from "react";
import { useState, useEffect } from "react";

import Swal from "sweetalert2";

// import Summary from "../components/summary";

import { useNavigate } from "react-router-dom";

import "../App.css";

import SingleCard from "./singleCard";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

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
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [suc, setSuc] = useState(0);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const [isPlaying, setPlaying] = useState(true);
  const handlePause = () => {
    const body = document.querySelector("body");

    setPlaying(false);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Go to Home",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Resume",
    }).then((result) => {
      if (result.isConfirmed) {
        setPlaying(true);
      } else {
        setPlaying(true);

        // setReset(true)
      }
    });
    body.classList.remove("swal2-height-auto");
  };

  const Complete = () => {
    const body = document.querySelector("body");
    // console.log(suc)
    if (suc === 6) {
      Swal.fire(
        "Congratulations!",
        // 'You clicked the button!',
        "You Have completed the game"
      );
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Times Up",
      }).then(() => {
        window.location.reload(false);
      });
    }
    body.classList.remove("swal2-height-auto");
  };

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
    const body = document.querySelector("body");

    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setSuc((prevsuc) => prevsuc + 1);
        if (suc === 5) {
          setPlaying(false);
          Swal.fire("Congratulations!", "You Have completed the game").then(
            () => {
              navigate("/summary");
            }
          );
        } else {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.src === choiceOne.src) {
                return { ...card, matched: true };
              } else {
                return card;
              }
            });
          });
          resetTurn();
        }
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
    body.classList.remove("swal2-height-auto");
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
      

      <div className="header" num="num">
        <div className="left">
          <button onClick={handlePause} className="pause-btn">
            <i className="fa-solid fa-pause"></i>
          </button>
        </div>
        <div className="middle">
          <h1 className="game-title">Memory Game</h1>
        </div>
        <div className="right">
          {/* <CountdownCircleTimer /> */}
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={60}
            // initialRemainingTime={63}
            colors={"#000000"}
            //   colorsTime={[60, 30]}
            size={65}
            strokeWidth={6}
            onComplete={() => Complete()}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      </div>

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
