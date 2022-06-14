import { result } from "lodash";
import "p5";
import { Vector2D } from "utils/vector2d";
import { Weather } from "weather/weather";

export class Hero {
  constructor(public x: number, public y: number) {}

  update(currentWeather: Weather): Vector2D {
    const speed = this.calculateSpeed();
    return speed;
  }

  calculateSpeed(): Vector2D {
    let speed = new Vector2D(0, 0);

    if (keyIsDown(UP_ARROW)) {
      speed = speed.add(new Vector2D(0, 7));
    }
    if (keyIsDown(RIGHT_ARROW)) {
      speed = speed.add(new Vector2D(5, 0));
    }
    if (keyIsDown(LEFT_ARROW)) {
      speed = speed.add(new Vector2D(-5, 0));
    }
    return speed;
  }

  draw() {
    fill("white");
    rect(this.x, this.y, 30, 30);
  }
}
