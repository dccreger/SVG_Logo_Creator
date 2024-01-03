const Triangle = require("../lib/triangle");

test("renders triangle with correct color", () => {
  const triangle = new Triangle();
  triangle.setColor("green");
  const svgMarkup = triangle.render();

  expect(svgMarkup).toEqual(
    <polygon points="150,18 244,182 56,182" fill="green" />
  );
});
