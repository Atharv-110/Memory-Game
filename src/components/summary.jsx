import React from "react";
import Celebration from "../assets/celebration.png";
import { useNavigate } from "react-router-dom";

export default function Summary() {
  const navigate = useNavigate()
    return (
    <div className="summary-card">
      <h2>You are doing great!</h2>
      <div className="score">
        <img src={Celebration} alt="" />
        <div className="score-text">
          <h1>200</h1>
          <p>Total Score</p>
        </div>
        <img src={Celebration} alt="" />
      </div>
      <div className="stats">
        <div className="left-stats">
          <p>Level Reached</p>
          <h3>8</h3>
        </div>
        <div className="right-stats">
          <p>Time Taken</p>
          <h3>
            8 <span>Mins</span>
          </h3>
        </div>
      </div>
      <p className="score-note">
        You Can Improve your skill, <br/>Keep practicing it in the higher level
      </p>
      <button onClick={()=>navigate(-1)}>Back to game</button>
    </div>
  );
}
