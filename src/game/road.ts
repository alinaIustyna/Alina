import { canvasHeight, canvasWidth } from "const";
import { result } from "lodash";
import "p5";
import { Vector2D } from "utils/vector2d";

export class Road {
    offset: number = 1;
    constructor(public x: number, public y: number) {

    }

drawRoad(x: number, y: number, speed: Vector2D) {
    line(this.x * canvasWidth, this.y * canvasHeight, this.x * canvasWidth, this.y * canvasHeight);
    }
}