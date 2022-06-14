import { Vector2D } from "../utils/vector2d";
import { Precipitation, PrecipitationType } from "./precipitation";
import { Wind } from "./wind";
import "p5";

export class Weather {
  constructor(
    public wind: Wind,
    public precipitation: Precipitation,
    public cloudiness: number,
    public visibility: number,
    public temperature: number
  ) {}
}

export const getCurrentWeather = () =>
  new Weather(
    new Wind(random(0, 4), new Vector2D(1, 0)),
    new Precipitation(PrecipitationType.Rain, random(0, 20)),
    random(0, 8),
    random(100, 1000),
    random(10, 30)
  );
