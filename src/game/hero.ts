import { result } from "lodash";
import "p5";
import { Vector } from "p5";
import { Vector2D } from "../utils/vector2d";
import { Weather } from "../weather/weather";
import { roadYs } from "../game/road";

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
    if (keyIsDown(RIGHT_ARROW)) {
      this.keyPressedCount += 1;
    }

    let speedUp = this.calculateSpeedUp();
    if (this.keyPressedCount > 3) {
      speed = speed.add(speedUp);
    } return this.speed;
  }

  calculateSpeed(): Vector2D {
    let speed = this.speed;
    if (keyIsDown(RIGHT_ARROW)) {
      this.speed = speed.add(new Vector2D(2, 0));
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.speed = speed.add(new Vector2D(-2, 0));
    }
    return this.speed;
  }

  calculateSpeedUp(): Vector2D {
    let speed = this.speed;
    const spaceKeyCode = 32;
    if (keyIsDown(spaceKeyCode)) {
      this.speed = speed.add(new Vector2D(0, 2));
    } return this.speed;
  }

  draw() {
    fill("white");
    const heroHeight = 30;
    rect(this.x, this.y - heroHeight, heroHeight, 30);
  }
}
