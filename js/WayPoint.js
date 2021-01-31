class WayPoint {
    constructor(o) {
        this.number = o.number ?? undefined;
        this.x = o.x ?? 10;
        this.y = o.y ?? 10;
        this.speed = o.speed ?? 0;
        this.fat = o.fat ?? 4;
        this.color = o.color ?? 'green';
        this.availableTurns = o.availableTurns ?? {};
        this.ways = o.ways ?? [];
        this.movingFrom = o.movingFrom ?? undefined;
        this.movingTo = o.movingTo ?? undefined;

        this.direction = 'none';
        this.nextDirection = 'none';

    }

    isNearWayPoint(wayPoint) {
        return Math.pow(this.x - wayPoint.x, 2) + Math.pow(this.y - wayPoint.y, 2) <= this.speed * this.speed;
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