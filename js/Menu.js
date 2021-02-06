class Menu {
    constructor() {
        this.title = new Label({
            text: 'Name of the game',
            x: canvas.width / 2,
            y: 100,
        });
        this.btnStartUno = new Button({
            text: '1 player',
            width: 200,
            height: 75,
            x: canvas.width / 2 - this.width / 2,
            y: 300,
        });
        this.btnStartDuo = new Button({
            text: '2 players',
            width: 200,
            height: 75,
            x: canvas.width / 2 - this.width / 2,
            y: 450,
        });
        this.btnSettings = new Button({
            text: 'Settings',
            width: 200,
            height: 75,
            x: canvas.width / 2 - this.width / 2,
            y: 600,
        });
    }

    render() {
        this.title.render();
        this.btnStartUno.render();
        this.btnStartDuo.render();
        this.btnSettings.render();
    }
}