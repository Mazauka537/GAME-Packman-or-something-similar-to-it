class Actor {
    constructor(wayPoint, speed, fat, color) {
        this.x = wayPoint.x;
        this.y = wayPoint.y;
        this.speed = speed;
        this.fat = fat;
        this.color = color;
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