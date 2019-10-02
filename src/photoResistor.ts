import { Led } from "johnny-five";
import Sensor from "./constructors/Sensor";

/**
 * @description PhotoResistor in action
 * @export default
 */
export default function initSensor(): void {
  const RGB = [8, 9, 10];
  const [red, green, blue] = RGB;
  const sensor = new Sensor({ pin: "A0", threshold: 5 });
  // @ts-ignore
  const led = new Led.RGB({ pins: { red, green, blue } });

  sensor.on("data", (v: number) => {
    const photoResistorValue = (5 * v) / 1023;
    led.off();
    if (photoResistorValue <= 1.8) {
      led.color("red");
    } else if (photoResistorValue > 3) {
      led.color("green");
    } else if (photoResistorValue > 1.8 && photoResistorValue <= 3) {
      led.color("blue");
    }
    led.on();
  });
}
