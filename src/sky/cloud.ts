import { drop } from "lodash";
import "p5";
import { Color, Vector } from "p5";
import { Vector2D } from "utils/vector2d";
import { Weather } from "weather/weather";
import { Raindrop } from "./raindrop";

export class Cloud {
  public diameter: number;
  public droplets: Raindrop[] = [];
  private alpha: number = 255;
  public isFading: boolean;
  private color: Color;
  private readonly viscousForce: Vector2D = new Vector2D(0, 5);
  private readonly initialY: number;

  constructor(public x, public y) {
    this.diameter = 38;
    this.color = color(209, 204, 255);
    this.initialY = y;
  }

  draw() {
    this.drawCloud();
    this.droplets.forEach((droplet) => droplet.draw());
  }

  drawCloud() {
    fill(this.color);
    circle(this.x + 3, this.y + 20, 25); //ліве
    circle(this.x + 27, this.y + 20, 25); //праве
    circle(this.x + 15, this.y + 10, 25); //верхнє
    circle(this.x + 15, this.y + 25, 21); //нижнє
  }

  startFading() {
    this.isFading = true;
  }

  isFaded() {
    return this.alpha < 2;
  }

  update(currentWeather: Weather, speed: Vector2D) {
    if (this.isFading) {
      this.alpha -= 1;
      this.color = color(209, 204, 255, this.alpha);
    }
    if (this.y >= this.initialY) {
      speed = speed.add(this.viscousForce);
    }
    this.x -= speed.x;
    this.y -= speed.y;
  }

  dropRain() {
    if (this.droplets.length < 1000) {
      for (let i = 0; i < 8; ++i) {
        const x = random(this.x, this.x + this.diameter);
        const y = random(this.y + this.diameter / 2, this.y + this.diameter);
        const raindrop = new Raindrop(x, y, this);
        this.droplets.push(raindrop);
      }
    }
    this.droplets.forEach((droplet) => droplet.move());
  }
}
