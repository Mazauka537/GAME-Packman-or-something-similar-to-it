class Map {
    constructor() {
        this.inf = 999;
        this.wayPoints = this.initializeWayPoints();
        this.ways = this.initializeWays();
        this.availableTurns = this.initializeAvailableTurns();


        this.wayPointsVisible = true;
        this.wayToTargetVisible = true;
        this.waysVisible = true;
        this.waysCostVisible = true;
    }

    initializeAvailableTurns() {
        let left = 'left';
        let up = 'up';
        let right = 'right';
        let down = 'down';

        let availableTurns = [
            [], //0
            [down, right],
            [left, down, right],
            [left, down, right],
            [left, down, right],
            [left, down],
            [down, right],
            [left, down],
            [left, up],
            [right],
            [up, right, down], //10
            [up, right, down],
            [left, up],
            [up, right],
            [left, down],
            [left, up, down],
            [right],
            [left, up],
            [left, up],
            [up, right, down],
            [up, right, down], //20
            [up, right, down],
            [left, up, right],
            [up, right, down],
            [up, right],
            [left, up],
            [left, down],
            [left, down],
            [up, right],
            [left, up, right],
            [left, up, right], //30
            [up, right],
            [up, right],
            [left, right],
            [left, up, down],
            [left, up, right, down],
            [left, up],
            [right, down],
            [left, up, down],
            [left, down],
            [up, right], //40
            [right],
            [left, down],
            [left, up, down],
            [left, up, down],
            [right, down],
            [up, right, down],
            [left, down],
            [up],
            [down],
            [left, up], //50
            [up, right, down],
            [up, right],
            [left, up, down],
            [up, right],
            [right, down],
            [left, up, right],
            [left],
            [left, up],
            [left, up, down],
            [], //60
        ]
    }

    initializeWayPoints() {
        let wayPointsTemplate = [
            [], //0
            [0, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [9, 0],
            [1, 1],
            [3, 1],
            [3, 2],
            [2, 2],
            [6, 2], //10
            [9, 1],
            [9, 2],
            [6, 3],
            [9, 3],
            [9, 4],
            [6, 4],
            [5, 4],
            [4, 3],
            [1, 3],
            [1, 4], //20 
            [1, 5],
            [1, 6],
            [0, 6],
            [0, 8],
            [4, 8],
            [4, 6],
            [5, 5],
            [5, 8],
            [6, 8],
            [7, 8], //30 
            [7, 6],
            [6, 5],
            [7, 5],
            [9, 5],
            [9, 6],
            [9, 8],
            [10, 0],
            [10, 1],
            [11, 0],
            [11, 1], //40 
            [12, 0],
            [15, 0],
            [15, 1],
            [15, 2],
            [11, 2],
            [11, 3],
            [13, 3],
            [13, 4],
            [14, 3],
            [14, 5], //50 
            [11, 5],
            [11, 6],
            [10, 6],
            [10, 8],
            [11, 7],
            [11, 8],
            [15, 8],
            [15, 7],
            [15, 6],
            [], //60
        ];

        let offset = 50;
        let multiplier = 100;

        let wayPoints = [];

        for (let i = 0; i < wayPointsTemplate.length; i++)
            wayPoints[i] = new WayPoint((wayPointsTemplate[i][0] + 1) * multiplier - offset, (wayPointsTemplate[i][1] + 1) * multiplier - offset);

        return wayPoints;
    }

    initializeWays() {
        let ways = [];

        for (let i = 0; i < this.wayPoints.length; i++) {
            ways[i] = [];
            for (let j = 0; j < this.wayPoints.length; j++)
                ways[i][j] = this.inf;
        }

        ways[1][2] = 4;
        ways[1][23] = 6;
        ways[2][3] = 1;
        ways[2][18] = 3;
        ways[3][4] = 1;
        ways[3][17] = 4;
        ways[4][5] = 3;
        ways[4][10] = 2;
        ways[5][11] = 1;
        ways[6][7] = 2;
        ways[6][19] = 2;
        ways[7][8] = 1;
        ways[8][9] = 1;
        ways[10][12] = 3;
        ways[10][13] = 1;
        ways[11][12] = 1;
        ways[11][38] = 1;
        ways[13][14] = 3;
        ways[14][15] = 1;
        ways[15][16] = 3;
        ways[17][20] = 4;
        ways[18][19] = 3;
        ways[19][20] = 1;
        ways[20][21] = 1;
        ways[21][22] = 1;
        ways[21][27] = 4;
        ways[22][23] = 1;
        ways[22][26] = 3;
        ways[23][24] = 2;
        ways[24][25] = 4;
        ways[25][26] = 2;
        ways[27][28] = 3;
        ways[28][29] = 1;
        ways[29][30] = 1;
        ways[29][32] = 3;
        ways[30][31] = 2;
        ways[30][36] = 2;
        ways[31][35] = 2;
        ways[32][33] = 1;
        ways[33][34] = 2;
        ways[34][35] = 1;
        ways[35][36] = 2;
        ways[35][53] = 1;
        ways[37][38] = 1;
        ways[37][39] = 1;
        ways[38][53] = 5;
        ways[39][40] = 1;
        ways[40][43] = 4;
        ways[41][42] = 3;
        ways[42][43] = 1;
        ways[43][44] = 1;
        ways[44][45] = 4;
        ways[44][59] = 4;
        ways[45][46] = 1;
        ways[46][47] = 2;
        ways[46][51] = 2;
        ways[47][48] = 1;
        ways[47][48] = 1;
        ways[49][50] = 2;
        ways[50][51] = 3;
        ways[51][52] = 1;
        ways[52][59] = 4;
        ways[53][54] = 2;
        ways[54][56] = 1;
        ways[54][56] = 1;
        ways[55][56] = 1;
        ways[55][58] = 4;
        ways[56][57] = 4;
        ways[58][59] = 1;

        for (let i = 0; i < ways.length; i++)
            for (let j = 0; j < ways.length; j++)
                if (ways[i][j] !== this.inf)
                    ways[j][i] = ways[i][j];

        return ways;
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

        if (this.waysVisible) {
            ctx.beginPath();
            ctx.strokeStyle = 'gold';
            ctx.lineWidth = 2;

            for (let i = 0; i < this.ways.length; i++) {
                for (let j = 0; j < this.ways.length; j++) {
                    if (i < j) {
                        if (this.ways[i][j] !== this.inf) {
                            ctx.moveTo(this.wayPoints[i].x, this.wayPoints[i].y);
                            ctx.lineTo(this.wayPoints[j].x, this.wayPoints[j].y);
                        }
                    }
                }
            }

            ctx.stroke();
        }

        if (this.wayPointsVisible) {
            ctx.fillStyle = 'green';

            for (let i = 0; i < this.wayPoints.length; i++) {
                ctx.beginPath();
                ctx.arc(this.wayPoints[i].x, this.wayPoints[i].y, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        if (this.waysCostVisible) {
            ctx.fillStyle = 'orange';
            ctx.font = 'normal 24px Consolas';

            for (let i = 0; i < this.ways.length; i++) {
                for (let j = 0; j < this.ways.length; j++) {
                    if (i < j) {
                        if (this.ways[i][j] !== this.inf) {
                            let x = (this.wayPoints[i].x + this.wayPoints[j].x) / 2;
                            let y = (this.wayPoints[i].y + this.wayPoints[j].y) / 2;
                            ctx.fillText(this.ways[i][j], x, y);
                        }
                    }
                }
            }
        }

    }
}