import React, { useState } from "react";

// import sweetalert2
import Swal from "sweetalert2";
// import 'sweetalert2/dist/sweetalert2.css';

// countdown timer import from react-countdown-circle-timer
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// css import
import "../App.css";

export default function Header() {

  const [isPlaying, setPlaying] = useState(true);
  const handlePause = () => {
    const body = document.querySelector("body")
    
    setPlaying(false)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText:'Go to Home',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Resume',
    }).then((result) => {
      if (result.isConfirmed) {
        setPlaying(true)
      } else {
        setPlaying(true)

        // setReset(true)
      }
    })
    body.classList.remove("swal2-height-auto")
  }
  
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
          // onComplete={}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
    </>
  );
}
