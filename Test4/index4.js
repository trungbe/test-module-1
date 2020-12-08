class Circle {
    constructor(x, y, radius, color) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
    }

    render(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        ctx.fillStyle = this._color;
        ctx.fill();
    }
}

let circle1 = new Circle(10, 10, 100, '#000000');
circle1.render(document.getElementById('canvas1'));

