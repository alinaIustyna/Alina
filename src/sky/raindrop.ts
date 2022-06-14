import "p5";
import { canvasHeight } from "../const";

export class Raindrop {
  constructor(public x, public y, public cloud) {}

  draw() {
    fill("lightblue");
    circle(this.x, this.y, 1);
  }

  move() {
    this.y = this.y + 4;
    if (this.y > canvasHeight) {
      this.y = this.cloud.y + this.cloud.diameter / 2;
    }
  }
}
