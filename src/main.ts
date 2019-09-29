import { Board } from "johnny-five";
import photoResistor from "./photoResistor";

const board = new Board({ repl: false });

board.on("ready", (): void => {
  photoResistor();
});
board.on("exit", (): void => {
  console.log("exit succesful  ✅");
});
