import "p5";
import { getCurrentWeather } from "./weather/weather";
import { Location } from "./environment/location";
import { Hero } from "./game/hero";
import { canvasHeight, canvasWidth } from "./const";

const location = new Location();
const hero = new Hero(0.25 * canvasWidth, 0.9 * canvasHeight);

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30);
}

function draw() {
  const weather = getCurrentWeather();
  const speed = hero.update(weather);
  location.update(weather, speed);
  location.draw();
  hero.draw();
}

// It will be explained later.
export { setup, draw };
