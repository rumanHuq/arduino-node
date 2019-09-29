import { Sensor as JohnnySensor } from "johnny-five";

/**
 * @description
 * @export
 * @class Sensor
 * @extends {JohnnySensor}
 */
export default class Sensor extends JohnnySensor{
  /**
   *Creates an instance of Sensor.
   * @param {({
   *     pin: string | number;
   *     threshold: number;
   *     freq: number;
   *   })} { pin, threshold, freq }
   * @memberof Sensor
   */
  constructor({ pin, threshold, freq }: {
    pin: string | number;
    threshold: number;
    freq?: number;
  }) {
    // @ts-ignore
    super({ pin, threshold, freq });
  }
}
