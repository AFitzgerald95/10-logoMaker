const { Triangle, Square, Circle } = require('./shapes');

describe('Triangle', () => {
    test('Should render a blue triangle', () => {
        const expectedSvg = '<polygon points="100, 20 180, 150 20, 150 = "blue" />';
        const triangle = new Triangle();
        triangle.setColor("blue");
        const actualSvg = triangle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
    test('Should accept a different color', () => {
        const expectedSvg = '<polygon points="100, 20 180, 150 20, 150 = "yellow" />';
        const triangle = new Triangle();
        triangle.setColor("yellow");
        const actualSvg = triangle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
});

describe('Square', () => {
    test('Should render a yellow square', () => {
        const expectedSvg = '<rect x= "90" y="40" width="120" height="120" fill="yellow" />';
        const square = new Square();
        square.setColor("yellow");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test("Should accept a different color", () => {
        const expectedSvg = '<rect x= "90" y="40" width="120" height="120" fill="red" />';
        const square = new Square();
        square.setColor("red");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Circle", () =>  {
    test('Should render a red circle', () => {
        const expectedSvg = '<circle cx="100" cy="100" r="90" fill ="red" />';
        const circle = new Circle();
        circle.setColor("red");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
    test('Should render a red circle', () => {
        const expectedSvg = '<circle cx="100" cy="100" r="90" fill ="blue" />'; 
        const circle = new Circle();
        circle.setColor("blue");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
