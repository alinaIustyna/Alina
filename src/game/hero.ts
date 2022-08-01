import { result } from "lodash";
import "p5";
import { Vector } from "p5";
import { Vector2D } from "../utils/vector2d";
import { Weather } from "../weather/weather";
import { roadY } from "../game/road";

export class Hero {
  speed: Vector2D = new Vector2D(0, 0);
  private keyPressedCount = 0;

  constructor(public x: number, public y: number) {
    const callEveryNMiliSec = 100;
    setInterval(() => {
      this.keyPressedCount = 0
    }, callEveryNMiliSec);
  }

  update(currentWeather: Weather): Vector2D {
    let speed = this.calculateSpeed();
    let speedUp = this.calculateSpeed();
    if (keyIsDown(RIGHT_ARROW)) {
      this.keyPressedCount += 1;
    }

    if (this.keyPressedCount > 3) {
      speed = speed.add(speedUp);
    }
    return speed;
  }

  calculateSpeed(): Vector2D {
    let speed = this.speed;
    if (keyIsDown(RIGHT_ARROW)) {
      this.speed = speed.add(new Vector2D(2, 0));
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.speed = speed.add(new Vector2D(-2, 0));
    }
    if (keyIsDown(UP_ARROW)) {
      this.speed = speed.add(new Vector2D(0, 2));
    }
    return this.speed;
  }

  getVerticies() {
  }

  draw() {
    fill("white");
    rect(this.x, roadY, 30, 30);
  }
}
