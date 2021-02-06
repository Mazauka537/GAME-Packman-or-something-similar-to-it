class Target extends Actor {
    constructor(o) {
        super(o);

        this.direction = 'none';
        this.nextDirection = 'none';
    }
    
    move(map) {
        let distanceFrom, distanceTo;

        if (this.direction !== 'none') {

            if (map.wayPoints[this.movingFrom].availableTurns[this.direction] !== undefined) {//если напровление от точки отправления доступно
                this.moveTo(map.wayPoints[this.movingTo]); //то двигаемся к точке, находящейся в этом направлении
            } else { //если мы не можем двигаться в текущем направлении
                this.x = map.wayPoints[this.movingFrom].x; //то стоим на точке отправления
                this.y = map.wayPoints[this.movingFrom].y;
            }

            //убираем существующие пути
            this.ways[this.movingFrom] = map.inf;
            this.ways[this.movingTo] = map.inf;
            map.wayPoints[this.movingFrom].ways[this.number] = map.inf;
            map.wayPoints[this.movingTo].ways[this.number] = map.inf;

            if (this.isNearWayPoint(map.wayPoints[this.movingTo])) { //когда приблизились к точке назначения

                this.movingFrom = this.movingTo; //делаем точкой отправления ту точку к которой приблизились

                if (this.availableTurns[this.nextDirection] !== undefined) { //если от точки к которой приблизились можно повернуть в задуманном направлении
                    this.direction = this.nextDirection; //то делаем задуманное направление текущим
                }

                if (this.availableTurns[this.direction] !== undefined) { //если от точки к которой приблизились можно повернуть в текущем направлении
                    this.movingTo = this.availableTurns[this.direction]; //то делаем точку в текущем направлении точкой назначения
                }

                this.availableTurns = map.wayPoints[this.movingTo].availableTurns; //меняем доступные направления на направления точки назначения
            }

            //заного расчитываем расстояние путей до точек назначения и отправления
            distanceFrom = +(this.getDistanceTo(map.wayPoints[this.movingFrom]) / map.multiplier).toFixed(1);
            distanceTo = +(this.getDistanceTo(map.wayPoints[this.movingTo]) / map.multiplier).toFixed(1);

            this.ways[this.movingFrom] = distanceFrom;
            this.ways[this.movingTo] = distanceTo;
            map.wayPoints[this.movingFrom].ways[this.number] = distanceFrom;
            map.wayPoints[this.movingTo].ways[this.number] = distanceTo;
        }
    }
}