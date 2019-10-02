import { Button } from "johnny-five";

/**
 * @description
 * @export
 */
export default function buttonPress(): void {
  let counter = 0;
  const button = new Button(8);

  button.on("down", (): void => {
    counter += 1;
    console.log("pressed", counter);
  });
}
