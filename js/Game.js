class Game {
    //TODO: когда охотник движется между двумя точками, и в эти точки входит таргет, то путь до таргета расчитывается не совсем корректно (охотник может начать движение обратно к точке отправления а потом только идти к таргету
    constructor() {
        this.screen = new MenuScreen(this); //new PlayScreen(this);

        this.frameHandlerTimer = setInterval(() => this.frameHandler(), 15);
    }

    frameHandler() {
        ctx.clearRect(0, 0, width, height);

        this.screen.frame();
    }
}