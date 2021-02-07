class Menu {
    constructor() {
        this.title = new Label({
            text: 'Name of the game',
            x: canvas.width / 2,
            y: 170,
            fontSize: 90
        });
        this.buttons = {
            btnStartUno: this.createMainButton('Play solo', 300),
            btnStartDuo: this.createMainButton('Play duo', 450),
            btnSettings: this.createMainButton('Settings', 600),
        }
    }

    createMainButton(text, height) {
        return new Button({
            text: text,
            width: 400,
            height: 100,
            x: canvas.width / 2 - 200,
            y: height,
        });
    }

    render() {
        this.title.render();
        this.buttons.btnStartUno.render();
        this.buttons.btnStartDuo.render();
        this.buttons.btnSettings.render();
    }
}