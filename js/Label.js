class Label extends UIElement {
    constructor(o) {
        super(o);
        this.text = o.text ?? '';
        this.textAlign = o.textAlign ?? 'center';
        this.color = o.color ?? '#fff';
        this.font = o.font ?? 'Tahoma';
        this.fontSize = o.fontSize ?? 24;
    }

    render() {
        ctx.fillStyle = this.color;
        ctx.font = `normal ${this.fontSize}px ${this.font}`;
        ctx.textAlign = this.textAlign;
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, this.x, this.y);
    }
}