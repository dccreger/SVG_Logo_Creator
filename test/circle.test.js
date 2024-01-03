const Circle = require("../lib/circle");

test("renders circle with correct color", () => {
  const circle = new Circle();
  circle.setColor("green");
  const svgMarkup = circle.render();

  const expectedSvg = {
    type: "circle",
    props: {
      cx: "50%",
      cy: "50%",
      r: "40",
      fill: "green",
    },
  };

  expect(svgMarkup).toEqual(expectedSvg);
});
