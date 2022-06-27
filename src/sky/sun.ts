export class Sun {
    constructor(private x:number, private y:number, private d:number) {}

    draw() {
        fill ("orange");
        circle(20, 20, 30);
    }
}