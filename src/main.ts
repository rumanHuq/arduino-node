/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import { Board, Pin as JohnnyPin } from "johnny-five";
import rgbLight from "./rgbLight";

/**
 * @description
 * @export
 * @class Pin
 * @extends {JohnnyPin}
 */
export class Pin extends JohnnyPin{
  static OUTPUT: number;

  static PWM: number;
}
const board = new Board({ repl: false });

// const dynamicVoltage = require("./dynamicVoltage");

board.on("ready", (): void => {
  // dynamicVoltage(this);
  rgbLight(board);
});
board.on("exit", (): void => {
  console.log("\nexiting");
});
