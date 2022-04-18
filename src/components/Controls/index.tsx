import React from "react";
import { useAppState } from "../../context";

import "./Controls.css";

const Controls: React.FC<{
  gameOver: boolean;
  lastRoll: number;
  rolls: number;
}> = ({ gameOver, lastRoll, rolls }) => {
  const { dispatch } = useAppState();

  const handleClick = (pins: number) => {
    dispatch({ type: "ENTER_SCORE", payload: pins });
  };

  const disableButton = (number: number) => {
    if (gameOver) return true;
    if (rolls % 2 === 0 || rolls === 0) return false;
    if (rolls === 19 && lastRoll === 10) return false;
    return lastRoll + number > 10;
  };

  return (
    <div className="container">
      <div>
        <button
          id="pin0"
          disabled={disableButton(0)}
          onClick={() => handleClick(0)}
        >
          0
        </button>
        <button
          id="pin1"
          disabled={disableButton(1)}
          onClick={() => handleClick(1)}
        >
          1
        </button>
        <button
          id="pin2"
          disabled={disableButton(2)}
          onClick={() => handleClick(2)}
        >
          2
        </button>
        <button
          id="pin3"
          disabled={disableButton(3)}
          onClick={() => handleClick(3)}
        >
          3
        </button>
        <button
          id="pin4"
          disabled={disableButton(4)}
          onClick={() => handleClick(4)}
        >
          4
        </button>
        <button
          id="pin5"
          disabled={disableButton(5)}
          onClick={() => handleClick(5)}
        >
          5
        </button>
        <button
          id="pin6"
          disabled={disableButton(6)}
          onClick={() => handleClick(6)}
        >
          6
        </button>
        <button
          id="pin7"
          disabled={disableButton(7)}
          onClick={() => handleClick(7)}
        >
          7
        </button>
        <button
          id="pin8"
          disabled={disableButton(8)}
          onClick={() => handleClick(8)}
        >
          8
        </button>
        <button
          id="pin9"
          disabled={disableButton(9)}
          onClick={() => handleClick(9)}
        >
          9
        </button>
        <button
          id="pin10"
          disabled={disableButton(10)}
          onClick={() => handleClick(10)}
        >
          10
        </button>
      </div>
      {rolls > 0 && (
        <button
          className="restart"
          onClick={() => dispatch({ type: "RESTART", payload: 0 })}
        >
          Restart
        </button>
      )}
    </div>
  );
};

export default Controls;
