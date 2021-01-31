class Game {
    constructor() {
        this.map = new Map();
        this.target = this.map.addNewWayPoint(4, 5, 10, 'white');
        this.hunter = this.map.addNewWayPoint(59, 10, 8, 'red');

        document.onkeydown = (e) => this.keyDown(e);

        this.timer = setInterval(() => this.frameHandler(), 15);

    }

    frameHandler() {
        ctx.clearRect(0, 0, width, height);

        if (this.target.direction !== 'none') {

            if (this.map.wayPoints[this.target.movingFrom].availableTurns[this.target.direction] !== undefined) {//если напровление от точки отправления доступно
                this.target.moveTo(this.map.wayPoints[this.target.movingTo]); //то двигаемся к точке, находящейся в этом направлении
            } else { //если мы не можем двигаться в текущем направлении
                this.target.x = this.map.wayPoints[this.target.movingFrom].x; //то стоим на точке отправления
                this.target.y = this.map.wayPoints[this.target.movingFrom].y;
            }

            if (this.target.isNearWayPoint(this.map.wayPoints[this.target.movingTo])) { //когда приблизились к точке назначения

                this.target.movingFrom = this.target.movingTo; //делаем точкой отправления ту точку к которой приблизились

                if (this.target.availableTurns[this.target.nextDirection] !== undefined) { //если от точки к которой приблизились можно повернуть в задуманном направлении
                    this.target.direction = this.target.nextDirection; //то делаем задуманное направление текущим
                }

                if (this.target.availableTurns[this.target.direction] !== undefined) { //если от точки к которой приблизились можно повернуть в текущем направлении
                    this.target.movingTo = this.target.availableTurns[this.target.direction]; //то делаем точку в текущем направлении точкой назначения
                }

                this.target.availableTurns = this.map.wayPoints[this.target.movingTo].availableTurns; //меняем доступные направления на направления точки назначения
            }

        }

        this.map.render();
        this.target.render();
        this.hunter.render();
    }

    keyDown(e) {
        switch (e.keyCode) {
            case 37: //left
                this.target.nextDirection = 'left';
                if (this.target.direction === 'none' && this.target.availableTurns['left'] !== undefined) {
                    this.initializeTargetDirection('left');
                }
                if (this.target.direction === 'right') {
                    this.reverseTargetDirection('right');
                }
                break;
            case 38: //up
                this.target.nextDirection = 'up';
                if (this.target.direction === 'none' && this.target.availableTurns['up'] !== undefined) {
                    this.initializeTargetDirection('up');
                }
                if (this.target.direction === 'down') {
                    this.reverseTargetDirection('down');
                }
                break;
            case 39: //right
                this.target.nextDirection = 'right';
                if (this.target.direction === 'none' && this.target.availableTurns['right'] !== undefined) {
                    this.initializeTargetDirection('right');
                }
                if (this.target.direction === 'left') {
                    this.reverseTargetDirection('left');

                }
                break;
            case 40: //down
                this.target.nextDirection = 'down';
                if (this.target.direction === 'none' && this.target.availableTurns['down'] !== undefined) {
                    this.initializeTargetDirection('down');
                }
                if (this.target.direction === 'up') {
                    this.reverseTargetDirection('up');
                }
                break;
        }
    }

    initializeTargetDirection(direction) {
        this.target.movingTo = this.target.availableTurns[direction];
        this.target.availableTurns = this.map.wayPoints[this.target.movingTo].availableTurns;
        this.target.direction = direction;
    }

    reverseTargetDirection(currentDirection) {
        let reverseDirection = undefined;
        if (currentDirection === 'left')
            reverseDirection = 'right';
        if (currentDirection === 'up')
            reverseDirection = 'down';
        if (currentDirection === 'right')
            reverseDirection = 'left';
        if (currentDirection === 'down')
            reverseDirection = 'up';

        let x = this.target.movingFrom;
        this.target.movingFrom = this.target.movingTo;
        this.target.movingTo = this.map.wayPoints[this.target.movingFrom].availableTurns[reverseDirection];
        this.target.availableTurns = this.map.wayPoints[this.target.movingTo].availableTurns;
        this.target.direction = reverseDirection;
    }
}