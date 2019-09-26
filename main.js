const { Board } = require("johnny-five");
const board = new Board({ repl: false });

const rgbLight = require("./rgbLight");
// const dynamicVoltage = require("./dynamicVoltage");

board.on("ready", function () {
  // dynamicVoltage(this);
  rgbLight(this);
});
board.on("exit", function () {
  console.log("\nexiting")
});
