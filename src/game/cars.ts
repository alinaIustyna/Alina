import "p5";
import { Vector2D } from "utils/vector2d";
import { roadYs } from "./road";

export class Cars {
  offset: number = 1;
  width = 100;
  height = 100;


  constructor(public x, public y) {
  }

  update(currentWether, speed: Vector2D) {
    this.offset -= 2 * speed.x;
  }


  draw() {
    for (let i = 0; i < 1000; ++i) {
      fill("red");
      rect(this.x * i + this.offset / 1.8, roadYs[0], 20, 15);
      rect(this.x * i + this.offset / 2, roadYs[1], 20, 15);
      rect(this.x * i + this.offset / 1.5, roadYs[2], 20, 15);
    }
  }
}
