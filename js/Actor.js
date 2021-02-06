class Actor extends WayPoint {
    constructor(o = {}) {
        super(o);

        this.speed = o.speed ?? 0;
        this.movingFrom = o.movingFrom ?? undefined;
        this.movingTo = o.movingTo ?? undefined;

        // this.pxDelay = this.speed * 3;
    }

    moveTo(wayPoint) {
        let distance = this.getDistanceTo(wayPoint);
        let lambda = this.speed / (distance - this.speed);
        if (lambda !== -1) {
            this.x = (this.x + lambda * wayPoint.x) / (1 + lambda);
            this.y = (this.y + lambda * wayPoint.y) / (1 + lambda);
        }
    }

    isNearWayPoint(wayPoint) {
        return Math.pow(this.x - wayPoint.x, 2) + Math.pow(this.y - wayPoint.y, 2) <= Math.pow(this.speed, 2);
    }

    getDistanceTo(wayPoint) {
        return Math.sqrt(Math.pow(wayPoint.x - this.x, 2) + Math.pow(wayPoint.y - this.y, 2));
    }

    // isNearWayPointWithDelay(wayPoint) {
    //     switch (this.direction) {
    //         case 'none':
    //             return Math.pow(this.x - wayPoint.x, 2) + Math.pow(this.y - wayPoint.y, 2) <= this.speed * this.speed;
    //         case 'left':
    //             return Math.pow(this.x - (wayPoint.x - this.pxDelay), 2) + Math.pow(this.y - wayPoint.y, 2) <= this.speed * this.speed;
    //         case 'right':
    //             return Math.pow(this.x - (wayPoint.x + this.pxDelay), 2) + Math.pow(this.y - wayPoint.y, 2) <= this.speed * this.speed;
    //         case 'up':
    //             return Math.pow(this.x - wayPoint.x, 2) + Math.pow(this.y - (wayPoint.y - this.pxDelay), 2) <= this.speed * this.speed;
    //         case 'down':
    //             return Math.pow(this.x - wayPoint.x, 2) + Math.pow(this.y - (wayPoint.y + this.pxDelay), 2) <= this.speed * this.speed;
    //     }
    //     return false;
    // }

    // moveToWithDelay(wayPoint) {
    //     let distance, lambda;
    //     switch (this.direction) {
    //         case 'none':
    //             distance = Math.sqrt(Math.pow(wayPoint.x - this.x, 2) + Math.pow(wayPoint.y - this.y, 2));
    //             lambda = this.speed / (distance - this.speed);
    //             this.x = (this.x + lambda * wayPoint.x) / (1 + lambda);
    //             this.y = (this.y + lambda * wayPoint.y) / (1 + lambda);
    //             break;
    //         case 'left':
    //             distance = Math.sqrt(Math.pow((wayPoint.x - this.pxDelay) - this.x, 2) + Math.pow(wayPoint.y - this.y, 2));
    //             lambda = this.speed / (distance - this.speed);
    //             this.x = (this.x + lambda * (wayPoint.x - this.pxDelay)) / (1 + lambda);
    //             this.y = (this.y + lambda * wayPoint.y) / (1 + lambda);
    //             break;
    //         case 'right':
    //             distance = Math.sqrt(Math.pow((wayPoint.x + this.pxDelay) - this.x, 2) + Math.pow(wayPoint.y - this.y, 2));
    //             lambda = this.speed / (distance - this.speed);
    //             this.x = (this.x + lambda * (wayPoint.x + this.pxDelay)) / (1 + lambda);
    //             this.y = (this.y + lambda * wayPoint.y) / (1 + lambda);
    //             break;
    //         case 'up':
    //             distance = Math.sqrt(Math.pow(wayPoint.x - this.x, 2) + Math.pow((wayPoint.y - this.pxDelay) - this.y, 2));
    //             lambda = this.speed / (distance - this.speed);
    //             this.x = (this.x + lambda * wayPoint.x) / (1 + lambda);
    //             this.y = (this.y + lambda * (wayPoint.y - this.pxDelay)) / (1 + lambda);
    //             break;
    //         case 'down':
    //             distance = Math.sqrt(Math.pow(wayPoint.x - this.x, 2) + Math.pow((wayPoint.y + this.pxDelay) - this.y, 2));
    //             lambda = this.speed / (distance - this.speed);
    //             this.x = (this.x + lambda * wayPoint.x) / (1 + lambda);
    //             this.y = (this.y + lambda * (wayPoint.y + this.pxDelay)) / (1 + lambda);
    //             break;
    //     }
    //
    // }
}