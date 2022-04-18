import React from "react";
import { useAppState } from "./context";
import Game from "./components/Board";

import "./App.css";

function App() {
  const { state } = useAppState();
  return (
    <div className="app">
      <header>
        <h1 className="title">Bowling Score Board</h1>
      </header>
      <p className="intro">
        Enter scores in a bowling game{" "}
        <span aria-label="smiley" role="img">
          😃
        </span>
      </p>
      <Game game={state} />
    </div>
  );
}

export default App;
