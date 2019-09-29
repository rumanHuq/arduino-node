import { Board } from "johnny-five";
import Pin from "./constructors/Pin";

const RGB = [8, 9, 10];
const [red, green, blue] = RGB;

/**
 * @description
 * @export
 * @param {Board} board
 */
export default function rgbLight(board: Board): void {
  board.pinMode(red, Pin.OUTPUT);
  board.pinMode(green, Pin.OUTPUT);
  board.pinMode(blue, Pin.OUTPUT);

  const loopTimer = 1500;
  const averageTime = loopTimer / RGB.length;
  board.loop(loopTimer, async (): Promise<void> => {
    board.digitalWrite(red, 255);
    board.digitalWrite(green, 0);
    board.digitalWrite(blue, 0);

    board.wait(averageTime, (): void => {
      board.digitalWrite(red, 0);
      board.digitalWrite(green, 255);
      board.digitalWrite(blue, 0);

      board.wait(averageTime, (): void => {
        board.digitalWrite(red, 0);
        board.digitalWrite(green, 0);
        board.digitalWrite(blue, 255);
      });
    });
  });
}
