import { Led } from "johnny-five";
import Sensor from "./constructors/Sensor";

const RGB = [8, 9, 10];
const [red, green, blue] = RGB;

/**
 * @description PhotoResistor in action
 * @export default
 */
export default function initSensor(): void {
  const sensor = new Sensor({ pin: "A0", threshold: 5 });
  const led = new Led.RGB({ pins: { red, green, blue } });
  led.off();

  sensor.on("data", (v: number) => {
    const photoResistorValue = (5 * v) / 1023;
    led.off();
    if (photoResistorValue <= 1) {
      led.color("#FF0000");
    } else if (photoResistorValue > 1 && photoResistorValue <= 4) {
      led.color("#00FF00");
    } else if (photoResistorValue > 4) {
      led.color("#0000FF");
    }
    led.on();
  });
}
