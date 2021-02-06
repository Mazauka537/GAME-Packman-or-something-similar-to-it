class Game {
    //TODO: когда охотник движется между двумя точками, и в эти точки входит таргет, то путь до таргета расчитывается не совсем корректно (охотник может начать движение обратно к точке отправления а потом только идти к таргету
    constructor() {
        this.status = 'mainMenu';

        this.menu = new Menu();

        this.map = new Map();
        this.target = this.map.addNewActor('target', 4, 5.1, 10, 'white');
        this.hunters = [];
        this.hunters.push(this.map.addNewActor('hunter', 59, 5, 8, 'red'));
        this.hunters.push(this.map.addNewActor('hunter', 24, 3, 8, 'red'));
        this.hunters.push(this.map.addNewActor('hunter', 36, 4, 8, 'red'));
        this.hunters.push(this.map.addNewActor('hunter', 49, 2, 8, 'red'));

        document.onkeydown = (e) => this.keyDown(e);

        this.timer = setInterval(() => this.frameHandler(), 15);

    }

    frameHandler() {
        ctx.clearRect(0, 0, width, height);

        switch (this.status) {
            case "mainMenu":
                this.menu.render();
                break;
            case "gameplay":
                this.target.move(this.map);

                for (let i = 0; i < this.hunters.length; i++) {
                    this.hunters[i].move(this.map, this.target);
                }
                break;
        }

        //отрисовка всех элементов
        this.map.render();
        this.target.render();
        for (let i = 0; i < this.hunters.length; i++) {
            this.hunters[i].render();
        }
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
        this.target.movingTo = x;
        this.target.availableTurns = this.map.wayPoints[this.target.movingTo].availableTurns;
        this.target.direction = reverseDirection;
    }
}