import { canvasHeight, canvasWidth } from "../const";
import { result } from "lodash";
import "p5";
import { ratios } from "../utils/ratios";
import { Vector2D } from "../utils/vector2d";
import { Hero } from "./hero";
import { Cars } from "./cars";
import { getCurrentWeather } from "weather/weather";

export class Road {
    currentRoad = 0;
    offset: number = 1;
    roads: Road[];
    obstacle: Cars;
    height = 100;
    width = 100;
    hero = new Hero(30, 900);
    roadY = [canvasHeight - 10, canvasWidth - 30, canvasHeight - 50];

    constructor(private x: number, private y: number) {
    }

    update() {
        this.currentRoad = this.y;
        if (keyIsDown(DOWN_ARROW)) {
            this.currentRoad -= 1;
            this.hero.y = this.roads[this.currentRoad].y;
        }
        if (keyIsDown(UP_ARROW)) {
            this.currentRoad += 1;
            this.hero.y = this.roads[this.currentRoad].y;
        }
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

    drawRoad(x: number, y: number) {
        // this.y = this.roadY
        fill("orange");
        rect(0, this.y, canvasWidth, 10);
    }
    draw() {
        for (let i = 0; i < 1; ++i) {
            this.drawRoad(this.x * i, this.y * i + this.offset);
        }
    }
}