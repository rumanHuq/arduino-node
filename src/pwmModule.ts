import { Led, Animation } from "johnny-five";

/**
 * @description PWM test
 * @export
 */
export default function pwmModule(): void {
  // @ts-ignore
  const red1 = new Animation(new Led(2));
  const red2 = new Led(3);

  // yellow.on();

  red1.enqueue({
    easing: "inSine",
    metronomic: true,
    loop: true,
    keyFrames: [0, 255],
    duration: 1000,
  });

  red2.pulse(1000);
}
