class Game {
    constructor() {
        this.map = new Map();
        this.target = this.map.addNewWayPoint(1, 12, 10, 'white');
        this.hunter = this.map.addNewWayPoint(59, 10, 8, 'red');

        document.onkeydown = (e) => this.keyDown(e);

        this.timer = setInterval(() => this.frameHandler(), 15);

    }

    frameHandler() {
        ctx.clearRect(0, 0, width, height);



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