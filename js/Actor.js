class Actor {
    constructor(map, startWayPointNumber, speed, fat, color) {
        this.x = map.wayPoints[startWayPointNumber].x;
        this.y = map.wayPoints[startWayPointNumber].y;
        this.speed = speed;
        this.fat = fat;
        this.color = color;

        this.wayPointNumber = map.wayPoints.length;
        map.addActor()
        //пути должны быть зеркальны, тоесть туда и сюда, отдуда и отсюда, не только от точки до других точек, но и от других точек до этой точки.
    }
    
    moveTo(wayPoint) {
        let distance = Math.sqrt(Math.pow(wayPoint.x - this.x, 2) + Math.pow(wayPoint.y - this.y, 2));
        let lambda = this.speed / (distance - this.speed);
        this.x = (this.x + lambda * wayPoint.x) / (1 + lambda);
        this.y = (this.y + lambda * wayPoint.y) / (1 + lambda);
    }

    render() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.fat, 0, Math.PI * 2);
        ctx.fill();
    }
}