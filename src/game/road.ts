import { canvasHeight, canvasWidth } from "../const";
import { result } from "lodash";
import "p5";
import { Vector2D } from "../utils/vector2d";
import { Hero } from "./hero";
import { Car } from "./car";
export const roadYs = [canvasHeight - 25, canvasHeight - 45, canvasHeight - 65];
export class Road {
    offset: number = 1;
    roads: Road[];
    obstacle: Car;
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
        // let isCollisions = false;
        const verticies = this.getVerticies()
        if (this.hero.x > this.obstacle.x && this.hero.x < this.obstacle.x + this.obstacle.width) {
            background("black");
            text('game over', 300, 300);
        }

        if (this.hero.y > this.obstacle.y && this.hero.y < this.obstacle.y + this.obstacle.height) {
            background("black");
            text('game over', 300, 300);
        }

        // return verticies.some(v => {
        //     const [x, y] = v;
        //     return isInX && isInY;
        // })

        // if (isCollisions = true) { 
        //     background("black");
        //     text('game over', 300, 300);
        // }
    }

    draw() {
        fill("orange");
        rect(this.x, this.y, canvasWidth, 10);
    }
}