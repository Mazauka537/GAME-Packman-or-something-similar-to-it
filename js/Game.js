class Game {
    constructor() {
        this.map = new Map();
        this.target = this.map.addNewWayPoint(4, 12, 10, 'white');
        this.hunter = this.map.addNewWayPoint(59, 10, 8, 'red');

        document.onkeydown = (e) => this.keyDown(e);

        this.timer = setInterval(() => this.frameHandler(), 15);

    }

    frameHandler() {
        ctx.clearRect(0, 0, width, height);

        if (this.target.direction !== 'none') {



            if (this.target.movingFrom !== this.target.movingTo)
                this.target.moveTo(this.map.wayPoints[this.target.movingTo]);

            if (this.target.isNearWayPoint(this.map.wayPoints[this.target.movingTo])) {
                this.target.availableTurns = this.map.wayPoints[this.target.movingTo].availableTurns;
                this.target.ways = this.map.wayPoints[this.target.movingTo].ways;
                this.target.movingFrom = this.target.movingTo;
                this.target.direction = this.target.nextDirection;

                if (this.target.availableTurns[this.target.direction] !== undefined) {

                    this.target.movingTo = this.target.availableTurns[this.target.direction];

                    if (this.target.direction !== this.target.nextDirection) {
                        this.target.x = this.map.wayPoints[this.target.movingTo].x;
                        this.target.y = this.map.wayPoints[this.target.movingTo].y;
                    }
                } else {
                    this.target.x = this.map.wayPoints[this.target.movingTo].x;
                    this.target.y = this.map.wayPoints[this.target.movingTo].y;
                }
            }

        }

        this.map.render();
        this.target.render();
        this.hunter.render();
    }

    keyDown(e) {
        switch (e.keyCode) {
            case 37: //left
                if (this.target.availableTurns.left !== undefined) {
                    this.target.nextDirection = 'left';
                    if (this.target.direction === 'none') {
                        this.target.movingTo = this.target.availableTurns.left;
                        this.target.direction = 'left';
                    }
                }
                break;
            case 38: //up
                if (this.target.availableTurns.up !== undefined) {
                    this.target.nextDirection = 'up';
                    if (this.target.direction === 'none') {
                        this.target.movingTo = this.target.availableTurns.up;
                        this.target.direction = 'up';
                    }
                }
                break;
            case 39: //right
                if (this.target.availableTurns.right !== undefined) {
                    this.target.nextDirection = 'right';
                    if (this.target.direction === 'none') {
                        this.target.movingTo = this.target.availableTurns.right;
                        this.target.direction = 'right';
                    }
                }
                break;
            case 40: //down
                if (this.target.availableTurns.down !== undefined) {
                    this.target.nextDirection = 'down';
                    if (this.target.direction === 'none') {
                        this.target.movingTo = this.target.availableTurns.down;
                        this.target.direction = 'down';
                    }
                }
                break;
        }
    }
}