import { Weather } from "../weather/weather";
import { Sky } from "../sky/sky";
import { Cars } from "../game/cars";
import { Ground } from "../ground/buildings";
import { canvasWidth, canvasHeight } from "../const";
import { Vector2D } from "../utils/vector2d";
import { random, update } from "lodash";
import { Road } from "../game/road";

export class Location {
  private sky: Sky;
  private ground: Ground;
  private cars: Cars;
  private road: Road;
  private readonly gravity: Vector2D = new Vector2D(0, -5);

  constructor() {
    this.road = new Road(10, 30);
    this.sky = new Sky();
    this.ground = new Ground(canvasWidth, canvasHeight);
    this.cars = new Cars(random(10, canvasWidth), random(0.85 * canvasHeight, 0.9 * canvasHeight));
  }

  public update(currentWeather: Weather, speed: Vector2D) {
    this.sky.update(currentWeather, speed.add(this.gravity));
    this.ground.update(currentWeather, speed.add(this.gravity));
    this.cars.update(currentWeather, speed.add(this.gravity));
    // this.road.update(currentWeather,);
  }

  public draw() {
    // this.road.draw();
    this.sky.draw();
    this.ground.drawBuildings();
    this.cars.draw();
  }
}
