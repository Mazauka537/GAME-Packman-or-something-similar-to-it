class Map {
    constructor() {
        this.wayPoints = [];
        this.ways = [
            [],
            [],
        ];
        this.wayPointsVisible = false;
        this.wayVisible = false;
    }

    render() {
        ctx.beginPath();

        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 2;

        ctx.moveTo(100, 600);
        ctx.lineTo(100, 100);
        ctx.lineTo(400, 100);
        ctx.lineTo(400, 300);
        ctx.lineTo(200, 300);
        ctx.lineTo(200, 200);
        ctx.lineTo(300, 200);

        ctx.moveTo(500, 100);
        ctx.lineTo(500, 400);
        ctx.lineTo(200, 400);

        ctx.moveTo(200, 500);
        ctx.lineTo(900, 500);

        ctx.moveTo(600, 100);
        ctx.lineTo(600, 800);

        ctx.moveTo(600, 400);
        ctx.lineTo(900, 400);

        ctx.moveTo(500, 900);
        ctx.lineTo(500, 600);
        ctx.lineTo(200, 600);

        ctx.moveTo(100, 800);
        ctx.lineTo(400, 800);
        ctx.lineTo(400, 700);
        ctx.lineTo(100, 700);
        ctx.lineTo(100, 800);

        ctx.moveTo(700, 800);
        ctx.lineTo(700, 600);
        ctx.lineTo(900, 600);

        ctx.moveTo(800, 800);
        ctx.lineTo(800, 700);
        ctx.lineTo(900, 700);
        ctx.lineTo(900, 800);
        ctx.lineTo(800, 800);

        ctx.moveTo(700, 100);
        ctx.lineTo(900, 100);
        ctx.lineTo(900, 200);
        ctx.lineTo(700, 200);
        ctx.lineTo(700, 100);

        ctx.moveTo(700, 300);
        ctx.lineTo(1000, 300);

        ctx.moveTo(1000, 0);
        ctx.lineTo(1000, 100);

        ctx.moveTo(1000, 200);
        ctx.lineTo(1000, 600);

        ctx.moveTo(1000, 700);
        ctx.lineTo(1000, 900);

        ctx.moveTo(1200, 0);
        ctx.lineTo(1200, 100);
        ctx.lineTo(1500, 100);

        ctx.moveTo(1100, 100);
        ctx.lineTo(1100, 800);

        ctx.moveTo(1100, 200);
        ctx.lineTo(1500, 200);

        ctx.moveTo(1100, 700);
        ctx.lineTo(1500, 700);

        ctx.moveTo(1200, 300);
        ctx.lineTo(1500, 300);
        ctx.lineTo(1500, 600);
        ctx.lineTo(1200, 600);

        ctx.moveTo(1400, 300);
        ctx.lineTo(1400, 500);
        ctx.lineTo(1200, 500);
        ctx.lineTo(1200, 400);
        ctx.lineTo(1300, 400);
        ctx.lineTo(1300, 500);

        ctx.moveTo(1200, 800);
        ctx.lineTo(1600, 800);

        ctx.stroke();

    }
}