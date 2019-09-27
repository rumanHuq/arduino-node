import { Board } from "johnny-five";
import { Pin } from "./main";

/**
 * @description
 * @export
 * @param {Board} board
 */
export default function dynamicVoltage(board: Board): void {
  // reading "A3" analog pin
  board.analogRead(3, (rawVoltage: number): void => {
    const outputVoltage = (255 / 1023) * rawVoltage;
    board.pinMode(3, Pin.PWM); // digital pin 3 outputs analog signal
    // now writing dynamic voltage value, effecting dimming and brightening
    board.analogWrite(3, outputVoltage); // write happens on digital PIN, there are no analog OUT in arduino
  });
}
