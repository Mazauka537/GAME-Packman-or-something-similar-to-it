class Game {
    constructor() {
        this.map = new Map();
        this.target = new Actor(this.map.wayPoints[0], 14, 8, 'white');
        this.hunter = new Actor(this.map.wayPoints[10], 10, 5, 'red');

        this.timer = setInterval(this.frameHandler, 15);

    }

    frameHandler() {
        ctx.clearRect(0, 0, width, height);



        this.map.render();
        this.target.render();
        this.hunter.render();
    }
}