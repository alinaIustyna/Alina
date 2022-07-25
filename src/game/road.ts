import { canvasHeight, canvasWidth } from "const";
import { result } from "lodash";
import "p5";
import { ratios } from "utils/ratios";
import { Vector2D } from "utils/vector2d";
import { Hero } from "./hero";
import { Cars } from "./cars";
import { getCurrentWeather } from "weather/weather";

export class Road {
    currentRoad = 0;
    offset: number = 1;
    roads: Road[];
    obstacle: Cars;
    height = 100;
    hero = new Hero(30, 90);

    constructor(private x: number, private y: number) {
    }

    update(currentRoad: Road, currentWeather) {
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
        const verticie_1 = [this.x, this.y];
        const verticie_2 = [this.x + width, this.y + this.height];
        const verticie_3 = [this.x + width, this.y];
        const verticie_4 = [this.x, this.y + this.height];
        const verticies = [verticie_1, verticie_2, verticie_3, verticie_4];
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

    drawRoad(x: number, y) {
        // let roadY = ratios[window.innerHeight - 40, window.innerHeight - 60, window.innerHeight - 80];
        line(this.x, this.y, this.x, this.y);
        fill("white");
        stroke(10);
    }
    draw() {
        for (let i = 0; i < 3; ++i) {
            this.drawRoad(this.x, this.y + 20);
        }
    }
}