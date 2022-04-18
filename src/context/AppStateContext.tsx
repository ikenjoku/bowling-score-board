import React, { useContext, useReducer, createContext } from "react";
import isGameOver from "../helpers/isGameOver";
import updateFrames from "../helpers/updateFrames";
import updateCurrentRoll from "../helpers/updateCurrentRoll";
import updateCumulativeScore from "../helpers/updateCumulativeScore";

export interface GAME {
  frames: number[][];
  cumulativeScores: number[];
  gameOver: boolean;
  pins: number[];
  rolls: number;
}

const initialState: GAME = {
  frames: [],
  cumulativeScores: [],
  gameOver: false,
  pins: [],
  rolls: 0,
};

interface AppStateContextProps {
  state: GAME;
  dispatch: React.Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

type Action =
  | {
      type: "ENTER_SCORE";
      payload: number;
    }
  | {
      type: "RESTART";
      payload: number;
    };

const AppStateReducer = (state: GAME = initialState, action: Action) => {
  switch (action.type) {
    case "ENTER_SCORE": {
      const { frames, cumulativeScores, pins, rolls } = state;

      return {
        ...state,
        frames: updateFrames(rolls, action.payload, frames),
        cumulativeScores: updateCumulativeScore(
          rolls,
          frames,
          cumulativeScores,
          pins,
          action.payload
        ),
        gameOver: isGameOver(rolls, action.payload, pins),
        pins: pins.concat(action.payload),
        rolls: updateCurrentRoll(rolls, action.payload),
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const useAppState = () => {
  const contextValue = useContext(AppStateContext);
  if (!contextValue) {
    throw new Error("Please call useAppState within a AppStateProvider");
  }
  return contextValue;
};

export const AppStateProvider = (props: React.Props<{}>) => {
  const [state, dispatch] = useReducer(AppStateReducer, initialState);

  return <AppStateContext.Provider value={{ state, dispatch }} {...props} />;
};
