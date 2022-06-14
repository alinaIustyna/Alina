/* eslint-disable @typescript-eslint/no-use-before-define */
import "p5";
import { random } from "lodash";
import { getCurrentWeather } from "weather/weather";
import { Location } from "./environment/location";
import { Hero } from "./game/hero";

const location = new Location();
const hero = new Hero(100, 380);

function setup() {
  createCanvas(400, 400);
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
