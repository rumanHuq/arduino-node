import { Button, LCD } from "johnny-five";

/**
 * @description LCD-timer
 * @export
 */
export default function lcdDisplay(): void {
  const downButton = new Button(11);
  const upButton = new Button(12);
  const goButton = new Button(13);

  const stopWatch = {
    lcd: new LCD({ pins: [2, 3, 4, 5, 6, 7] }),
    interval: undefined as unknown as NodeJS.Timeout,
    paused: true,
    SECOND: 1000,
    MINUTE: 60 * 1000,
    timer: 0.5 * (60 * 1000),
    limit: 2 * (60 * 1000),
    addSecond(): void {
      this.timer = this.timer + this.SECOND;
      if (this.limit <= this.timer) {
        this.timer = this.limit;
      }
      this.renderInLcd();
    },
    removeSecond(): void {
      this.timer = this.timer - this.SECOND;
      if (this.timer <= 0) {
        this.timer = 0;
        this.timeOver();
        if (this.interval) clearInterval(this.interval);
      }
      this.renderInLcd();
    },
    togglePauseState(): void {
      this.paused = !this.paused;
      if (!this.paused && !this.interval) {
        this.interval = setInterval(() => {
          this.removeSecond();
        }, this.SECOND);
      } else {
        clearInterval(this.interval);
        // @ts-ignore
        this.interval = undefined;
        this.renderInLcd();
      }
    },
    stringifyTimer(): string {
      const millis = this.timer / this.SECOND;
      const minutes = Math.floor(millis / 60);
      const seconds = millis % 60;
      const formattedTeime = `${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`;
      return formattedTeime;
    },
    renderInLcd(): void {
      this.lcd.cursor(0, 0).print(this.stringifyTimer());
      this.lcd.cursor(1, 0).print(`1)+ 2)- 3.${this.paused ? "START" : "STOP "}`);
    },
    maxLimitReached(): void {
      this.lcd.cursor(1, 0).print("max is 3 minutes");
    },
    init(): void {
      this.renderInLcd();
    },
    timeOver(): void {
      this.lcd.clear();
      this.lcd.cursor(1, 0).print("done!");
    },
  };

  stopWatch.init();
  downButton.on("press", () => {
    stopWatch.addSecond();
  });
  upButton.on("press", () => {
    stopWatch.removeSecond();
  });

  goButton.on("press", () => {
    stopWatch.togglePauseState();
  });
}

// setInterval(1000)
