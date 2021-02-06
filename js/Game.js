class Game {
    //TODO: когда охотник движется между двумя точками, и в эти точки входит таргет, то путь до таргета расчитывается не совсем корректно (охотник может начать движение обратно к точке отправления а потом только идти к таргету
    constructor() {
        this.status = 'mainMenu';

        this.menu = new Menu();

        this.map = new Map();
        this.target = this.map.addNewActor(4, 5.1, 10, 'white');
        this.hunters = [];
        this.hunters.push(this.map.addNewActor(59, 5, 8, 'red'));
        this.hunters.push(this.map.addNewActor(24, 3, 8, 'red'));
        this.hunters.push(this.map.addNewActor(36, 4, 8, 'red'));
        this.hunters.push(this.map.addNewActor(49, 2, 8, 'red'));

        document.onkeydown = (e) => this.keyDown(e);

        this.timer = setInterval(() => this.frameHandler(), 15);

    }

    frameHandler() {
        ctx.clearRect(0, 0, width, height);

        switch (this.status) {
            case "mainMenu":
                this.menu.render();
                break;
        }

        let distanceFrom, distanceTo;

        //алгоритм движения target
        if (this.target.direction !== 'none') {

            if (this.map.wayPoints[this.target.movingFrom].availableTurns[this.target.direction] !== undefined) {//если напровление от точки отправления доступно
                this.target.moveTo(this.map.wayPoints[this.target.movingTo]); //то двигаемся к точке, находящейся в этом направлении
            } else { //если мы не можем двигаться в текущем направлении
                this.target.x = this.map.wayPoints[this.target.movingFrom].x; //то стоим на точке отправления
                this.target.y = this.map.wayPoints[this.target.movingFrom].y;
            }

            //убираем существующие пути
            this.target.ways[this.target.movingFrom] = this.map.inf;
            this.target.ways[this.target.movingTo] = this.map.inf;
            this.map.wayPoints[this.target.movingFrom].ways[this.target.number] = this.map.inf;
            this.map.wayPoints[this.target.movingTo].ways[this.target.number] = this.map.inf;

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

            //заного расчитываем расстояние путей до точек назначения и отправления
            distanceFrom = +(this.target.getDistanceTo(this.map.wayPoints[this.target.movingFrom]) / this.map.multiplier).toFixed(1);
            distanceTo = +(this.target.getDistanceTo(this.map.wayPoints[this.target.movingTo]) / this.map.multiplier).toFixed(1);

            this.target.ways[this.target.movingFrom] = distanceFrom;
            this.target.ways[this.target.movingTo] = distanceTo;
            this.map.wayPoints[this.target.movingFrom].ways[this.target.number] = distanceFrom;
            this.map.wayPoints[this.target.movingTo].ways[this.target.number] = distanceTo;
        }

        //алгоритм движения hunter
        for (let i = 0; i < this.hunters.length; i++) {
            
            if (this.hunters[i].movingTo === this.target.number && this.target.movingTo !== this.hunters[i].movingFrom) { //если у охотника точка назначения - таргет, и охотник движется в одну сторону с таргетом
                if (this.target.isNearWayPoint(this.map.wayPoints[this.target.movingFrom])) { //то если таргет достиг точки поворота, у охотника меняется точка назначения на эту точку поворота
                    this.hunters[i].ways[this.hunters[i].movingTo] = this.map.inf;
                    this.map.wayPoints[this.hunters[i].movingTo].ways[this.hunters[i].number] = this.map.inf;

                    this.hunters[i].movingTo = this.target.movingFrom;

                    distanceTo = +(this.hunters[i].getDistanceTo(this.map.wayPoints[this.hunters[i].movingTo]) / this.map.multiplier).toFixed(1);
                    this.hunters[i].ways[this.hunters[i].movingTo] = distanceTo;
                    this.map.wayPoints[this.hunters[i].movingTo].ways[this.hunters[i].number] = distanceTo;
                }
            }

            let routeToTarget = this.map.getRoute(this.hunters[i].number, this.target.number); //получаем порядок точек для движения к таргету

            if (+routeToTarget[0] === this.hunters[i].movingFrom) { //если следующая точка к которой нужно двигаться - точка от которой мы уже движимся
                //то необходимо развернуться, тоесть поменять точки отправления и назначения
                let x = this.hunters[i].movingFrom;
                this.hunters[i].movingFrom = this.hunters[i].movingTo;
                this.hunters[i].movingTo = x;
            }

            this.hunters[i].movingTo = +routeToTarget[0]; //устанавливаем точку назначения

            this.hunters[i].moveTo(this.map.wayPoints[this.hunters[i].movingTo]); //двигаемся к точке назначения

            //обнуляем пути
            this.hunters[i].ways[this.hunters[i].movingFrom] = this.map.inf;
            this.hunters[i].ways[this.hunters[i].movingTo] = this.map.inf;
            this.map.wayPoints[this.hunters[i].movingFrom].ways[this.hunters[i].number] = this.map.inf;
            this.map.wayPoints[this.hunters[i].movingTo].ways[this.hunters[i].number] = this.map.inf;

            if (this.hunters[i].isNearWayPoint(this.map.wayPoints[this.hunters[i].movingTo])) { //если приблизились к точке назначения
                this.hunters[i].movingFrom = this.hunters[i].movingTo; //то делаем точку назначения точкой отправления
                this.hunters[i].movingTo = +routeToTarget[1]; //а точкой назначения делаем точку следующую по порядку
            }

            //заного расчитываем расстояния путей к новым точкам назначения и отправления
            distanceFrom = +(this.hunters[i].getDistanceTo(this.map.wayPoints[this.hunters[i].movingFrom]) / this.map.multiplier).toFixed(1);
            distanceTo = +(this.hunters[i].getDistanceTo(this.map.wayPoints[this.hunters[i].movingTo]) / this.map.multiplier).toFixed(1);

            this.hunters[i].ways[this.hunters[i].movingFrom] = distanceFrom;
            this.hunters[i].ways[this.hunters[i].movingTo] = distanceTo;

            // this.map.wayPoints[this.hunters[i].movingFrom].ways[this.hunters[i].number] = distanceFrom;
            // this.map.wayPoints[this.hunters[i].movingTo].ways[this.hunters[i].number] = distanceTo;
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