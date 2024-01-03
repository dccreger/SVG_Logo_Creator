const Square = require("../lib/square");

test("renders square with correct color", () => {
  const square = new Square();
  square.setColor("green");
  const svgMarkup = square.render();

  expect(svgMarkup).toEqual(
    <rect x="20%" y="20%" width="60%" height="60%" fill="green" />
  );
});
