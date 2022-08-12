import { Weather } from "../weather/weather";
import { Sky } from "../sky/sky";
import { Car } from "../game/car";
import { Ground } from "../ground/buildings";
import { canvasWidth, canvasHeight } from "../const";
import { Vector2D } from "../utils/vector2d";
import { random, update } from "lodash";
import { Road, roadYs } from "../game/road";
import { Hero } from "../game/hero";

export class Location {
  private sky: Sky;
  private ground: Ground;
  private cars: Car[];
  private roads: Road[];
  public currentRoad: number = 0;

  private readonly gravity: Vector2D = new Vector2D(0, -5);
  public hero: Hero;


  constructor() {
    this.roads = [new Road(0, canvasHeight - 10), new Road(0, canvasHeight - 30), new Road(0, canvasHeight - 50)];
    const roadYs = this.roads.map((road) => road.y);
    const carsX = random(0, canvasWidth);
    this.sky = new Sky();
    this.ground = new Ground(canvasWidth, canvasHeight);
    this.cars = [new Car(carsX, roadYs[0]), new Car(carsX, roadYs[1]), new Car(carsX, roadYs[2])];
    this.hero = new Hero(30, this.roads[0].y);
  }

  public update(currentWeather: Weather, speed: Vector2D) {
    this.sky.update(currentWeather, speed.add(this.gravity));
    this.ground.update(speed.add(this.gravity));
    this.roads.forEach((road: Road) => road.update());
    this.cars.forEach((cars: Car) => cars.update(currentWeather, speed));

    if (keyIsDown(DOWN_ARROW)) {
      this.updateCurrentRoad(-1);
      this.hero.y = this.roads[this.currentRoad].y;
    }
    if (keyIsDown(UP_ARROW)) {
      this.updateCurrentRoad(1);
      this.hero.y = this.roads[this.currentRoad].y;
    }
  }

  private updateCurrentRoad(step: number) {
    const newVal = this.currentRoad + step;
    if (step > 0) {
      this.currentRoad = Math.min(newVal, this.roads.length - 1);
    } else {
      this.currentRoad = Math.max(newVal, 0);
    }
  }


  public draw() {
    this.sky.draw();
    this.ground.drawBuildings();
    this.roads.forEach((road: Road) => road.draw());
    this.cars.forEach((cars: Car) => cars.draw());
    this.hero.draw();
  }
}
