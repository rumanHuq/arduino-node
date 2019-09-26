const { Board, Pin } = require("johnny-five");
const board = new Board({ repl: false });

function boardFuncs() {
  const self = board;
  //reading "A3" analog pin
  self.analogRead(3, function (rawVoltage) {
    let outputVoltage = (255 / 1023) * rawVoltage;
    self.pinMode(3, Pin.PWM); // digital pin 3 outputs analog signal
    // now writing dynamic voltage value, effecting dimming and brightening
    self.analogWrite(3, outputVoltage); // write happens on digital PIN, there are no analog OUT in arduino
  });
}

board.on("ready", boardFuncs);
board.on("exit", function () {
  console.log("\nexiting")
});
