import "p5";
import { getCurrentWeather } from "./weather/weather";
import { Location } from "./environment/location";
import { canvasHeight, canvasWidth } from "./const";

const location = new Location();

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(30);
}

function draw() {
  const weather = getCurrentWeather();
  const speed = location.hero.update(weather);
  location.update(weather, speed);
  location.draw();
}

// It will be explained later.
export { setup, draw };
