import { canvasHeight, canvasWidth } from "../const";
import { result } from "lodash";
import "p5";
import { Vector2D } from "../utils/vector2d";
import { Hero } from "./hero";
import { Cars } from "./cars";
export const roadYs = [canvasHeight - 25, canvasHeight - 45, canvasHeight - 65];
export class Road {
    offset: number = 1;
    roads: Road[];
    obstacle: Cars;
    height = 100;
    width = 100;
    hero = new Hero(30, 900);
    currentRoad = this.y;

    constructor(public x: number, public y: number) {
    }

    update() {
    }

    getVerticies() {
        const verticies = [
            [this.x, this.y],
            [this.x, this.y + this.height],
            [this.x + this.width, this.y + this.height],
            [this.x + this.width, this.y],
        ];
        return verticies
    }

    checkForCollisions() {
        const verticies = this.getVerticies()
        let isCollisions = false;
        return verticies.some(v => {
            const [x, y] = v
            const isInX = x > this.obstacle.x && x < this.obstacle.x + this.obstacle.width;
            const isInY = y > this.obstacle.y && y < this.obstacle.y + this.obstacle.height;
            return isInX && isInY;
        })
    }

    draw() {
        fill("orange");
        rect(this.x, this.y, canvasWidth, 10);
    }
}