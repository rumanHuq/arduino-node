const { Pin } = require("johnny-five");
const RGB = [11, 13, 12];
const [red, green, blue] = RGB;
module.exports = function rgbLight(board) {
  board.pinMode(red, Pin.OUTPUT);
  board.pinMode(green, Pin.OUTPUT);
  board.pinMode(blue, Pin.OUTPUT);

  const loopTimer = 6000;
  const averageTime = loopTimer / RGB.length;
  board.loop(loopTimer, async function () {
    board.digitalWrite(red, 255);
    board.digitalWrite(green, 0);
    board.digitalWrite(blue, 0);

    board.wait(averageTime, () => {
      board.digitalWrite(red, 0);
      board.digitalWrite(green, 255);
      board.digitalWrite(blue, 0);

      board.wait(averageTime, () => {
        board.digitalWrite(red, 0);
        board.digitalWrite(green, 0);
        board.digitalWrite(blue, 255);
      });
    });
  });
}
