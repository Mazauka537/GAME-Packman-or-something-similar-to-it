class Game {
    constructor() {
        this.map = new Map();
        this.target = new Actor(this.map,0, 14, 14, 'white');
        this.hunter = new Actor(this.map,this.map.wayPoints.length - 1, 10, 10, 'red');

        document.onkeydown = (e) => this.keyDown(e);

        this.timer = setInterval(() => this.frameHandler(), 15);

    }

    frameHandler() {
        ctx.clearRect(0, 0, width, height);

        this.target.moveTo(this.map.wayPoints[this.target.movingTo]);


        this.map.render();
        this.target.render();
        this.hunter.render();
    }

    keyDown(e) {
        switch (e.keyCode) {
            case 37: //left

                break;
            case 38: //up

                break;
            case 39: //right

                break;
            case 40: //down

                break;
        }
    }
}