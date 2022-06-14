import { starRadius } from "../const";
import "p5";

export class Star {
  public color;
  constructor(public x, public y) {
    if (Math.random() < 0.5) {
      this.color = color(250);
    } else {
      this.color = color(100);
    }
  }
  draw() {
    fill(this.color);
    ellipse(this.x, this.y, starRadius);
  }
}
