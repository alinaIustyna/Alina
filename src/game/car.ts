import "p5";
import { Vector2D } from "utils/vector2d";
import { roadYs } from "./road";

export class Car {
  offset: number = 1;
  width = 100;
  height = 100;


  constructor(public x, public y) {
  }

  update(currentWeather, speed: Vector2D) {
    this.offset -= 2 * speed.x;
  }

  draw() {
    fill("red");
    rect(this.x + this.offset / 1.8, this.y, 20, 15);
  }
}
