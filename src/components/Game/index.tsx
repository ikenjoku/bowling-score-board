import React from "react";
import { GAME } from "../../context/AppStateContext";
import Scorecard from "../Scorecard";
import Controls from "../Controls";

import "./Game.css";

const Game: React.FC<{
  game: GAME;
}> = ({ game }) => {
  const { frames, cumulativeScores, gameOver, pins, rolls } = game;
  const totalScore = cumulativeScores.slice(-1)[0];

  return (
    <div className="game">
      <Scorecard
        frames={frames}
        cumulativeScores={cumulativeScores}
        totalScore={totalScore}
      />
      <Controls
        gameOver={gameOver}
        lastRoll={pins.slice(-1)[0]}
        rolls={rolls}
      />
      {gameOver && (
        <div className="game-over-text">
          <h1>Game Over</h1>
          <h2>You Scored: {totalScore}</h2>
        </div>
      )}
    </div>
  );
};

export default Game;
