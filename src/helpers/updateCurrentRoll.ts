import isStrike from "./isStrike";
import isEven from "./isEven";

const updateCurrentRoll = (rolls: number, lastScore: number) => {
  if (isStrike(lastScore) && isEven(rolls) && rolls < 18) {
    return rolls + 2;
  } else {
    return rolls + 1;
  }
};

export default updateCurrentRoll;
