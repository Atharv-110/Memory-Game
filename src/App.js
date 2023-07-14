// import { useEffect, useState } from "react";
import "./App.css";
// import Header from "./components/header";
import Game from "./components/game";
import Summary from "./components/summary";
import Instruction from "./components/instruction";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { useState } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route exact path="/instruction" element={<Instruction />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
