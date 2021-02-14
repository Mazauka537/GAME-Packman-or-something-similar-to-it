class Game {
    //TODO: когда охотник движется между двумя точками, и в эти точки входит таргет, то путь до таргета расчитывается не совсем корректно (охотник может начать движение обратно к точке отправления а потом только идти к таргету
    constructor() {
        this.difficultyText = ['Easy', 'Medium', 'Hard'];
        this.settings = {
            difficulty: 0,
            p1Control: {
                left: 'KeyA',
                right: 'KeyD',
                up: 'KeyW',
                down: 'KeyS',
            },
            p2Control: {
                left: 'ArrowLeft',
                right: 'ArrowRight',
                up: 'ArrowUp',
                down: 'ArrowDown',
            }
        };

        this._screen = new MenuScreen(this); //new PlayScreen(this);

        this.frames = 0;
        this.fps = 0;

        this.frameHandlerTimer = setInterval(() => this.frameHandler(), 15);
        this.frameRenderTimer = setInterval(() => this.frameRender(), 0);
        this.fpsTimer = setInterval(() => this.getFPS(), 1000);
    }

    set screen(value) {
        this._screen.destroy();
        this._screen = value;
    }

    get screen() {
        return this._screen;
    }

    frameHandler() {
        this.screen.frame();
    }

    frameRender() {
        this.frames++;

        ctx.clearRect(0, 0, width, height);

        this.screen.render();

        ctx.beginPath();
        ctx.fillStyle = 'lime';
        ctx.font = `normal 24px Consolas`;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.shadowColor = '#000';
        ctx.shadowBlur = 3;
        ctx.fillText(this.fps, 10, 10);
        ctx.shadowBlur = 0;
    }

    getFPS() {
        this.fps = this.frames;
        this.frames = 0;
    }
}