import { Thermometer } from "johnny-five";

/**
 * @description Thermometer to check temperature
 * @export
 */
export default function tempSensor(): void {
  const thermometer = new Thermometer({ pin: "A0", controller: "TMP36", freq: 1000 });

  thermometer.on("data", ({ celsius }: {celsius: number}) => {
    console.log({ celsius });
  });
}
