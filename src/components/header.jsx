import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../index.css";

export default function header() {
  return (
    <div className="header">
      <div className="left">
        <button className="pause-btn">
          <i class="fa-solid fa-pause"></i>
        </button>
      </div>
      <div className="middle">
        <h1 className="game-title">Memory Game</h1>
      </div>
      <div className="right">
        {/* <CountdownCircleTimer /> */}
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={"#000000"}
        //   colorsTime={[60, 30]}
          size={65}
          strokeWidth={6}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
