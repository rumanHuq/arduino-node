const { Board, Sensor, Pin } = require("johnny-five");
const board = new Board({ repl: false });

function boardFuncs() {
  const self = board;

  self.pinMode(3, Pin.PWM); // ->Sets digital pin 3 as analog output

  // analogRead always reads Analog PIN, in this case "A3"
  self.analogRead(3, function (voltage) {
    const outputVoltage = (255 / 1023) * voltage;
    console.log(outputVoltage)
    this.analogWrite(3, outputVoltage)
  });


  self.on("exit", function () {
    console.log("\nexiting")
  });
}

board.on("ready", boardFuncs);
