import { ratios } from "../utils/ratios";
import _ from "lodash";
import { dayTime } from "../const";
import { Vector2D } from "../utils/vector2d";

export class Ground {
  offset: number = 1;
  private initialY: number;
  private initialX: number;
  constructor(private x: number, private y: number) {
    this.initialY = this.y;
    this.initialX = this.x;
  }

  update(speed: Vector2D) {
    this.x -= speed.x;
  }

  drawBuildings() {
    const height = 1.2;
    const width = 0.01;
    let offset = 0.2 * this.x;
    this.drawBuilding(offset, this.y, width, height);
  }

  drawBuilding(x: number, y: number, width: number, height: number) {
    noStroke();
    rect(x, y, width, height);
    const [windowW, windowH] = [width * 0.07, height * 0.02];
    const windowRowPadding = 5;
    const windowColPadding = 5;
    for (let row = 0; row < 30; ++row) {
      for (let col = 0; col < 5; ++col) {
        this.drawWindow(x + col * (windowW + windowColPadding), y + row * (windowH + windowRowPadding), windowW, windowH);
      }
    }
    if (dayTime() <= 18) {
      fill(31, 46, 37);
    } else {
      fill("black");
    }
  }

  drawWindow(x: number, y: number, width: number, height: number) {
    noStroke();
    const col = color(random(160, 250));
    fill(col);
    rect(x, y, width, height);
  }

  draw() {
    this.drawBuilding(this.x, this.y + 20, width, height);
  }
}