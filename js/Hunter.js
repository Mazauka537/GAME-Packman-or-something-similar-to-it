class Hunter extends Actor {
    constructor(o) {
        super(o);
    }
    
    move(map, target) {
        let distanceFrom, distanceTo;

        if (this.movingTo === target.number && target.movingTo !== this.movingFrom) { //если у охотника точка назначения - таргет, и охотник движется в одну сторону с таргетом
            if (target.isNearWayPoint(map.wayPoints[target.movingFrom])) { //то если таргет достиг точки поворота, у охотника меняется точка назначения на эту точку поворота
                this.ways[this.movingTo] = map.inf;
                map.wayPoints[this.movingTo].ways[this.number] = map.inf;

                this.movingTo = target.movingFrom;

                distanceTo = +(this.getDistanceTo(map.wayPoints[this.movingTo]) / map.multiplier).toFixed(1);
                this.ways[this.movingTo] = distanceTo;
                map.wayPoints[this.movingTo].ways[this.number] = distanceTo;
            }
        }

        let routeToTarget = map.getRoute(this, [target]).routeTo[target.number];

        if (+routeToTarget[0] === this.movingFrom) { //если следующая точка к которой нужно двигаться - точка от которой мы уже движимся
            //то необходимо развернуться, тоесть поменять точки отправления и назначения
            let x = this.movingFrom;
            this.movingFrom = this.movingTo;
            this.movingTo = x;
        }

        this.movingTo = +routeToTarget[0]; //устанавливаем точку назначения

        this.moveTo(map.wayPoints[this.movingTo]); //двигаемся к точке назначения

        //обнуляем пути
        this.ways[this.movingFrom] = map.inf;
        this.ways[this.movingTo] = map.inf;
        map.wayPoints[this.movingFrom].ways[this.number] = map.inf;
        map.wayPoints[this.movingTo].ways[this.number] = map.inf;

        if (this.isNearWayPoint(map.wayPoints[this.movingTo])) { //если приблизились к точке назначения
            this.movingFrom = this.movingTo; //то делаем точку назначения точкой отправления
            this.movingTo = +routeToTarget[1]; //а точкой назначения делаем точку следующую по порядку
        }

        //заного расчитываем расстояния путей к новым точкам назначения и отправления
        distanceFrom = +(this.getDistanceTo(map.wayPoints[this.movingFrom]) / map.multiplier).toFixed(1);
        distanceTo = +(this.getDistanceTo(map.wayPoints[this.movingTo]) / map.multiplier).toFixed(1);

        this.ways[this.movingFrom] = distanceFrom;
        this.ways[this.movingTo] = distanceTo;

        // map.wayPoints[this.movingFrom].ways[this.number] = distanceFrom;
        // map.wayPoints[this.movingTo].ways[this.number] = distanceTo;
    }
}