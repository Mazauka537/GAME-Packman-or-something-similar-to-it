class Button extends UIElement {
    constructor(o) {
        super(o);
        this.text = o.text ?? '';
        this.width = o.width ?? 200;
        this.height = o.height ?? 75;
        this.color = o.color ?? '#222';
        this.font = o.font ?? 'Tahoma';
        this.fontSize = o.fontSize ?? '24px';
    }

    render() {
        ctx.fillStyle = this.bgColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.fillStyle = this.color;
        ctx.font = `normal ${this.fontSize}px ${this.font}`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }

}