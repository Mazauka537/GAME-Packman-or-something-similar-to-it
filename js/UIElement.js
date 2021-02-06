class UIElement {
    constructor(o) {
        this.x = o.x ?? 0;
        this.y = o.y ?? 0;
        this.background = o.background ?? '#fff';
    }
}