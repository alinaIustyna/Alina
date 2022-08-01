import { Weather } from "../weather/weather";
import { Sky } from "../sky/sky";
import { Cars } from "../game/cars";
import { Ground } from "../ground/buildings";
import { canvasWidth, canvasHeight } from "../const";
import { Vector2D } from "../utils/vector2d";
import { random, update } from "lodash";
import { Road } from "../game/road";
import { ratios } from "utils/ratios";

export class Location {
  private sky: Sky;
  private ground: Ground;
  private cars: Cars;
  private roads: Road[];
  private readonly gravity: Vector2D = new Vector2D(0, -5);
  // private roadY = ratios([canvasHeight - 10, canvasWidth - 30, canvasHeight - 50], this.y);


  constructor() {
    this.roads = [new Road(0, canvasHeight - 50), new Road(0, canvasHeight - 30), new Road(0, canvasHeight - 10)];
    this.sky = new Sky();
    this.ground = new Ground(canvasWidth, canvasHeight);
    this.cars = new Cars(random(0, canvasWidth), roadY);
  }

  public update(currentWeather: Weather, speed: Vector2D) {
    this.sky.update(currentWeather, speed.add(this.gravity));
    this.ground.update(currentWeather, speed.add(this.gravity));
    const action = (road: Road) => {
      road.update();
    }
    this.roads.forEach(action);
    this.cars.update(currentWeather, speed.add(this.gravity));
  }

  public draw() {
    const action = (road: Road) => {
      road.draw();
    }
    this.sky.draw();
    this.ground.drawBuildings();
    this.roads.forEach(action);
    this.cars.draw();
  }
}
