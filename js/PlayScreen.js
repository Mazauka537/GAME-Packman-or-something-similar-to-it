class PlayScreen {
    constructor(game, mode) {
        this.game = game;
        this.mode = mode;

        this.map = new Map();
        this.targets = [];
        this.targets.push(this.map.addNewActor('target', 4, 5.1, 10, '#ccccff')); //60
        if (this.mode === 'duo') {
            this.targets.push(this.map.addNewActor('target', 1, 5.1, 10, '#ccffcc')); //61
        }
        this.hunters = [];
        this.hunters.push(this.map.addNewActor('hunter', 59, 5, 8, 'red'));
        this.hunters.push(this.map.addNewActor('hunter', 24, 3, 8, 'red'));
        this.hunters.push(this.map.addNewActor('hunter', 36, 4, 8, 'red'));
        this.hunters.push(this.map.addNewActor('hunter', 49, 2, 8, 'red'));

        document.onkeydown = (e) => this.keyDown(e);
    }

    frame() {
        for (let i = 0; i < this.targets.length; i++) {
            this.targets[i].move(this.map);
        }

        for (let i = 0; i < this.hunters.length; i++) {
            //вычисляем дистанцию от охотника до всех таргетов и двигаем охотника к таргету с минимальной дистанцией
            let paths = this.map.getRoute(this.hunters[i], this.targets);
            let minTargetIndexByDistance = 0;
            for (let j = 1; j < this.targets.length; j++) {
                if (paths.distanceTo[this.targets[j].number] < paths.distanceTo[this.targets[minTargetIndexByDistance].number]) {
                    minTargetIndexByDistance = j;
                }
            }
            this.hunters[i].move(this.map, this.targets[minTargetIndexByDistance]);
        }
    }

    render() {
        this.map.render();
        for (let i = 0; i < this.targets.length; i++) {
            this.targets[i].render();
        }
        for (let i = 0; i < this.hunters.length; i++) {
            this.hunters[i].render();
        }
    }

    keyDown(e) {
        if (e.code === this.game.settings.p1Control.left || e.code === this.game.settings.p2Control.left) { //left
            let targetIndex = 0;
            if (this.mode === 'duo' && e.code === this.game.settings.p2Control.left) {
                targetIndex = 1;
            }
            this.targets[targetIndex].nextDirection = 'left';
            if (this.targets[targetIndex].direction === 'none' && this.targets[targetIndex].availableTurns['left'] !== undefined) {
                this.initializeTargetDirection('left', targetIndex);
            }
            if (this.targets[targetIndex].direction === 'right') {
                this.reverseTargetDirection('right', targetIndex);
            }
        }
        if (e.code === this.game.settings.p1Control.up || e.code === this.game.settings.p2Control.up) { //up
            let targetIndex = 0;
            if (this.mode === 'duo' && e.code === this.game.settings.p2Control.up) {
                targetIndex = 1;
            }
            this.targets[targetIndex].nextDirection = 'up';
            if (this.targets[targetIndex].direction === 'none' && this.targets[targetIndex].availableTurns['up'] !== undefined) {
                this.initializeTargetDirection('up', targetIndex);
            }
            if (this.targets[targetIndex].direction === 'down') {
                this.reverseTargetDirection('down', targetIndex);
            }
        }
        if (e.code === this.game.settings.p1Control.right || e.code === this.game.settings.p2Control.right) { //right
            let targetIndex = 0;
            if (this.mode === 'duo' && e.code === this.game.settings.p2Control.right) {
                targetIndex = 1;
            }
            this.targets[targetIndex].nextDirection = 'right';
            if (this.targets[targetIndex].direction === 'none' && this.targets[targetIndex].availableTurns['right'] !== undefined) {
                this.initializeTargetDirection('right', targetIndex);
            }
            if (this.targets[targetIndex].direction === 'left') {
                this.reverseTargetDirection('left', targetIndex);

            }
        }
        if (e.code === this.game.settings.p1Control.down || e.code === this.game.settings.p2Control.down) { //down
            let targetIndex = 0;
            if (this.mode === 'duo' && e.code === this.game.settings.p2Control.down) {
                targetIndex = 1;
            }
            this.targets[targetIndex].nextDirection = 'down';
            if (this.targets[targetIndex].direction === 'none' && this.targets[targetIndex].availableTurns['down'] !== undefined) {
                this.initializeTargetDirection('down', targetIndex);
            }
            if (this.targets[targetIndex].direction === 'up') {
                this.reverseTargetDirection('up', targetIndex);
            }
        }
    }

    initializeTargetDirection(direction, targetIndex) {
        this.targets[targetIndex].movingTo = this.targets[targetIndex].availableTurns[direction];
        this.targets[targetIndex].availableTurns = this.map.wayPoints[this.targets[targetIndex].movingTo].availableTurns;
        this.targets[targetIndex].direction = direction;
    }

    reverseTargetDirection(currentDirection, targetIndex) {
        let reverseDirection = undefined;
        if (currentDirection === 'left')
            reverseDirection = 'right';
        if (currentDirection === 'up')
            reverseDirection = 'down';
        if (currentDirection === 'right')
            reverseDirection = 'left';
        if (currentDirection === 'down')
            reverseDirection = 'up';

        let x = this.targets[targetIndex].movingFrom;
        this.targets[targetIndex].movingFrom = this.targets[targetIndex].movingTo;
        this.targets[targetIndex].movingTo = x;
        this.targets[targetIndex].availableTurns = this.map.wayPoints[this.targets[targetIndex].movingTo].availableTurns;
        this.targets[targetIndex].direction = reverseDirection;
    }

    destroy() {
        //TODO: destroy all elements from RAM when game.screen is changing
    }
}