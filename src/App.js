// import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header";
import Game from "./components/game";


function App() {
  
  return (
    <>
      <Header />
      <div className="App">
        <Game />
      </div>
    </>
  );
}

export default App;
