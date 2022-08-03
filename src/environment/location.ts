import { Weather } from "../weather/weather";
import { Sky } from "../sky/sky";
import { Cars } from "../game/cars";
import { Ground } from "../ground/buildings";
import { canvasWidth, canvasHeight } from "../const";
import { Vector2D } from "../utils/vector2d";
import { random, update } from "lodash";
import { Road, roadYs } from "../game/road";
import { ratios } from "../utils/ratios";
import { Hero } from "../game/hero";

export class Location {
  private sky: Sky;
  private ground: Ground;
  private cars: Cars;
  private roads: Road[];
  public currentRoad: number;
  private readonly gravity: Vector2D = new Vector2D(0, -5);
  hero = new Hero(30, 900);


  constructor() {
    this.roads = [new Road(0, canvasHeight - 50), new Road(0, canvasHeight - 30), new Road(0, canvasHeight - 10)];
    const roadYs = this.roads.map((road) => road.y);
    this.sky = new Sky();
    this.ground = new Ground(canvasWidth, canvasHeight);
    this.cars = new Cars(random(0, canvasWidth), roadYs);
  }

  public update(currentWeather: Weather, speed: Vector2D) {
    this.sky.update(currentWeather, speed.add(this.gravity));
    this.ground.update(currentWeather, speed.add(this.gravity));
    const action = (road: Road) => {
      road.update();
    }
    this.roads.forEach(action);
    this.cars.update(currentWeather, speed.add(this.gravity));

    if (keyIsDown(DOWN_ARROW)) {
      this.currentRoad -= 1;
      this.hero.y = this.roads[this.currentRoad].y;
    }
    if (keyIsDown(UP_ARROW)) {
      this.currentRoad += 1;
      this.hero.y = this.roads[this.currentRoad].y;
      console.log(this.currentRoad, this.roads);
    }
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
