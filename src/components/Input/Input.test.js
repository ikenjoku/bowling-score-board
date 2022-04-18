import React from "react";
import Controls from "./index";
import { shallow } from "enzyme";

describe("Controls", () => {
  it("should render eleven pin buttons", () => {
    const gameOver = false;
    const lastRoll = 0;
    const rolls = 0;
    const wrapper = shallow(
      <Controls gameOver={gameOver} lastRoll={lastRoll} rolls={rolls} />
    );
    expect(wrapper.find("button").length).toEqual(11);
  });

  it("should not render restart button if rolls less than 1", () => {
    const gameOver = false;
    const lastRoll = 0;
    const rolls = 0;
    const wrapper = shallow(
      <Controls gameOver={gameOver} lastRoll={lastRoll} rolls={rolls} />
    );
    expect(wrapper.find("button.restart").length).toEqual(0);
  });

  for (var i = 0; i < 20; i++) {
    it("should render restart button if rolls greater than 1", () => {
      const gameOver = false;
      const lastRoll = 0;
      const rolls = i;
      const wrapper = shallow(
        <Controls gameOver={gameOver} lastRoll={lastRoll} rolls={rolls} />
      );
      expect(wrapper.find("button.restart").length).toEqual(1);
    });
  }
});
