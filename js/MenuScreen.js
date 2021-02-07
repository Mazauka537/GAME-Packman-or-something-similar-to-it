class MenuScreen {
    constructor(game) {
        this.game = game;

        this.title = new Label({
            text: 'Name of the game',
            x: canvas.width / 2,
            y: 170,
            fontSize: 90
        });
        this.buttons = [
            this.createMainButton('Play solo', 300, () => this.btnPlaySoloClick()),
            this.createMainButton('Play duo', 450, () => this.btnPlayDouClick()),
            this.createMainButton('Settings', 600, () => this.btnSettingsClick()),
        ];
        this.selectedButton = 0;

        document.onkeydown = (e) => this.keyDown(e);
    }

    btnPlaySoloClick() {
        this.destroy();
        this.game.screen = new PlayScreen(this.game);
    }

    btnPlayDouClick() {
        this.destroy();
        this.game.screen = new PlayScreen(this.game);
    }

    btnSettingsClick() {
        this.destroy();
        this.game.screen = new PlayScreen(this.game);
    }

    createMainButton(text, height, onclick) {
        return new Button({
            text: text,
            width: 400,
            height: 100,
            x: canvas.width / 2 - 200,
            y: height,
            onclick: onclick,
        });
    }

    frame() {

    }

    render() {
        this.title.render();
        for (let i = 0; i < this.buttons.length; i++) {
            if (this.selectedButton === i) {
                this.buttons[i].render('selected');
            } else {
                this.buttons[i].render();
            }
        }
    }

    keyDown(e) {
        switch (e.keyCode) {
            case 13:
                this.buttons[this.selectedButton].click();
                break;
            case 38: //up
                if (this.selectedButton > 0) {
                    this.selectedButton--;
                }
                break;
            case 40: //down
                if (this.selectedButton < this.buttons.length - 1) {
                    this.selectedButton++;
                }
                break;
        }
    }

    destroy() {
        document.onkeydown = null;
    }
}