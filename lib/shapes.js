class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100, 20 180, 150 20, 150' fill='${this.color}' />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x='90' y='40' width='120' height='120' fill='${this.color}' />`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="90" fill='${this.color}' />`;
    }
}

module.exports = { Triangle, Square, Circle };