import { Led } from "johnny-five";

/** */
export default function switchTest(): void {
  const led = new Led({ pin: 8 });

  led.on();
}
