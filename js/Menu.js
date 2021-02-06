class Menu {
    constructor() {
        this.title = new Label('Name of the game');
        this.btnStartUno = new Button('1 player');
        this.btnStartDuo = new Button('2 players');
        this.btnSettings = new Button('Settings');
    }

    render() {
        this.title.render();
        this.btnStartUno.render();
        this.btnStartDuo.render();
        this.btnSettings.render();
    }
}