import { Pin as JohnnyPin } from "johnny-five";

/**
 * @description
 * @export
 * @class Pin
 * @extends {JohnnyPin}
 */
export default class Pin extends JohnnyPin{
  static OUTPUT: number;

  static PWM: number;
}
