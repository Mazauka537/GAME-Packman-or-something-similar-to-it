class Map {
    constructor() {
        this.inf = 999;
        this.wayPoints = this.initializeWayPoints();


        this.mapVisible = false;
        this.wayPointsVisible = true;
        this.wayToTargetVisible = true;
        this.waysVisible = true;
        this.waysCostVisible = true;

    }

    initializeWayPoints() {
        let wayPointsCount = 60;

        let wayPointsPositionTemplates = [
            [0, 2], //0
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
            [1, 2],
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
            [15, 6], //59
        ];

        if (wayPointsPositionTemplates.length !== wayPointsCount)
            throw new Error('wayPointsPositionTemplates is not correct');

        let left = 'left';
        let up = 'up';
        let right = 'right';
        let down = 'down';

        let wayPointsAvailableTurns = [
            [up, right, down], //0
            [right, down],
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
            [left, up, down],
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
            [left, up, down], //59
        ];

        if (wayPointsAvailableTurns.length !== wayPointsCount)
            throw new Error('wayPointsAvailableTurns is not correct');

        let wayPointsWays = [];

        for (let i = 0; i < wayPointsCount; i++) {
            wayPointsWays[i] = [];
            for (let j = 0; j < wayPointsCount; j++)
                wayPointsWays[i][j] = this.inf;
        }

        {
            wayPointsWays[0][1] = 2;
            wayPointsWays[0][33] = 1;
            wayPointsWays[0][23] = 4;
            wayPointsWays[1][2] = 4;
            wayPointsWays[1][23] = 6;
            wayPointsWays[2][3] = 1;
            wayPointsWays[2][18] = 3;
            wayPointsWays[3][4] = 1;
            wayPointsWays[3][17] = 4;
            wayPointsWays[4][5] = 3;
            wayPointsWays[4][10] = 2;
            wayPointsWays[5][11] = 1;
            wayPointsWays[6][7] = 2;
            wayPointsWays[6][33] = 1;
            wayPointsWays[7][8] = 1;
            wayPointsWays[8][9] = 1;
            wayPointsWays[10][12] = 3;
            wayPointsWays[10][13] = 1;
            wayPointsWays[11][12] = 1;
            wayPointsWays[11][38] = 1;
            wayPointsWays[13][14] = 3;
            wayPointsWays[14][15] = 1;
            wayPointsWays[15][16] = 3;
            wayPointsWays[17][20] = 4;
            wayPointsWays[18][19] = 3;
            wayPointsWays[19][20] = 1;
            wayPointsWays[19][33] = 1;
            wayPointsWays[20][21] = 1;
            wayPointsWays[21][22] = 1;
            wayPointsWays[21][27] = 4;
            wayPointsWays[22][23] = 1;
            wayPointsWays[22][26] = 3;
            wayPointsWays[23][24] = 2;
            wayPointsWays[24][25] = 4;
            wayPointsWays[25][26] = 2;
            wayPointsWays[27][28] = 3;
            wayPointsWays[28][29] = 1;
            wayPointsWays[29][30] = 1;
            wayPointsWays[29][32] = 3;
            wayPointsWays[30][31] = 2;
            wayPointsWays[30][36] = 2;
            wayPointsWays[31][35] = 2;
            wayPointsWays[32][34] = 3;
            wayPointsWays[34][35] = 1;
            wayPointsWays[35][36] = 2;
            wayPointsWays[35][53] = 1;
            wayPointsWays[37][38] = 1;
            wayPointsWays[37][39] = 1;
            wayPointsWays[38][53] = 5;
            wayPointsWays[39][40] = 1;
            wayPointsWays[40][43] = 4;
            wayPointsWays[41][42] = 3;
            wayPointsWays[42][43] = 1;
            wayPointsWays[43][44] = 1;
            wayPointsWays[44][45] = 4;
            wayPointsWays[44][59] = 4;
            wayPointsWays[45][46] = 1;
            wayPointsWays[46][47] = 2;
            wayPointsWays[46][51] = 2;
            wayPointsWays[47][48] = 1;
            wayPointsWays[47][48] = 1;
            wayPointsWays[49][50] = 2;
            wayPointsWays[50][51] = 3;
            wayPointsWays[51][52] = 1;
            wayPointsWays[52][59] = 4;
            wayPointsWays[53][54] = 2;
            wayPointsWays[54][56] = 1;
            wayPointsWays[54][56] = 1;
            wayPointsWays[55][56] = 1;
            wayPointsWays[55][58] = 4;
            wayPointsWays[56][57] = 4;
            wayPointsWays[58][59] = 1;
        }

        for (let i = 0; i < wayPointsCount; i++)
            for (let j = 0; j < wayPointsCount; j++)
                if (wayPointsWays[i][j] !== this.inf)
                    wayPointsWays[j][i] = wayPointsWays[i][j];

        for (let i = 0; i < wayPointsCount; i++) {
            if (wayPointsWays[i] === undefined || wayPointsWays[i].length !== wayPointsCount)
                throw new Error('wayPointsWays is not correct');
        }

        let offset = 50;
        let multiplier = 100;

        let wayPoints = [];

        for (let i = 0; i < wayPointsCount; i++) {
            wayPoints.push(new WayPoint({
                number: i,
                x: (wayPointsPositionTemplates[i][0] + 1) * multiplier - offset,
                y: (wayPointsPositionTemplates[i][1] + 1) * multiplier - offset,
                availableTurns: wayPointsAvailableTurns[i],
                ways: wayPointsWays[i],
            }));
        }

        return wayPoints;
    }

    addNewWayPoint(startWayPointNumber, speed, fat, color) {
        let wayPoint = new WayPoint({
            number: this.wayPoints.length,
            x: this.wayPoints[startWayPointNumber].x,
            y: this.wayPoints[startWayPointNumber].y,
            speed: speed,
            fat: fat,
            color: color,
            availableTurns: this.wayPoints[startWayPointNumber].availableTurns,
            ways: this.wayPoints[startWayPointNumber].ways,
        });

        wayPoint.ways.push(this.inf);

        this.wayPoints.push(wayPoint);

        for (let i = 0; i < this.wayPoints.length; i++) {
            this.wayPoints[i].ways.push(wayPoint.ways[i]);
        }

        return this.wayPoints[this.wayPoints.length - 1];
    }

    render() {
        if (this.mapVisible) {
            ctx.beginPath();

            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 2;

            ctx.moveTo(100, 600);
            ctx.lineTo(100, 300);

            ctx.moveTo(100, 200);
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


        if (this.waysVisible) {
            ctx.beginPath();
            ctx.strokeStyle = 'gold';
            ctx.lineWidth = 2;

            for (let i = 0; i < this.wayPoints.length; i++) {
                for (let j = 0; j < this.wayPoints.length; j++) {
                    if (i < j) {
                        if (this.wayPoints[i].ways[j] !== this.inf) {
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

            for (let i = 0; i < this.wayPoints.length; i++) {
                for (let j = 0; j < this.wayPoints.length; j++) {
                    if (i < j) {
                        if (this.wayPoints[i].ways[j] !== this.inf) {
                            let x = (this.wayPoints[i].x + this.wayPoints[j].x) / 2 + 3;
                            let y = (this.wayPoints[i].y + this.wayPoints[j].y) / 2 - 3;
                            ctx.fillText(this.wayPoints[i].ways[j], x, y);
                        }
                    }
                }
            }
        }

    }
}