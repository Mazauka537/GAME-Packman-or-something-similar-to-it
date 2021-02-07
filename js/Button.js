class Button extends UIElement {
    constructor(o) {
        super(o);
        this.text = o.text ?? '';
        this.width = o.width ?? 200;
        this.height = o.height ?? 75;
        this.color = o.color ?? '#222';
        this.font = o.font ?? 'Tahoma';
        this.fontSize = o.fontSize ?? 34;
        this.onclick = o.onclick ?? function () {}
    }

    click() {
        this.onclick();
    }

    render(option = 'none') {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.background;
        ctx.fill();

        ctx.shadowColor = this.background;
        if (option === 'selected') {
            ctx.shadowBlur = 40;
            ctx.fill();
            ctx.shadowBlur = 20;
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        ctx.fillStyle = this.color;
        ctx.font = `normal ${this.fontSize}px ${this.font}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }

}