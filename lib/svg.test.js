const SVG = require('./svg');

test('Should render a svg', () => {
    const expectedSvg = '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"></svg';
    const svg = new SVG();
    expected(svg.render()).toEqual(expectedSvg);
});

test('Should add text', () => {
    const expectedSvg = '<svg version"1.1" width="200" height="200" xmls="http://www.w3.org/2000/svg"><text x="100" y="115" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
    const svg = new SVG();
    svg.setText("A", "White");
    expect(svg.render()).toEqual(expectedSvg);
});

test('Should present an error if text is more than three characters', () => {
    const expectedError = new Error('Text can not be more than three characters');
    const svg = new SVG();
    expect(() => svg.setText("Max 3")).toThrow(expectedError);
});