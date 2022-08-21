import "p5";
import { Vector2D } from "utils/vector2d";
import { roadYs } from "./road";

export class Car {
  offset: number = 1;

  constructor(public x, public y) {
  }

  update(currentWeather, speed: Vector2D) {
    this.offset -= 2 * speed.x;
  }

  draw() {
    fill("red");
    rect(this.x + this.offset, this.y, 20, 15);
    console.log(this.x, this.y);
  }
}
