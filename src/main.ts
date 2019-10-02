import { Board } from "johnny-five";

// @imports
// import photoResistor from "./photoResistor";
// import tempSensor from "./tempSensor";
// import buttonPress from "./button";
// import pwm from "./pwmModule";
import LCD from "./LCD-exercise";

const board = new Board({ repl: false });

board.on("ready", (): void => {
  LCD();
});
board.on("exit", (): void => {
  console.log("exit succesful  ✅");
});
