const Shapes = require("../lib/shapes.js");

describe("Shapes", () => {
  describe("Generate SVG", () => {
    it("should generate a SVG markup for a cirlce", () => {
      const shape = new Shapes();
      const svgMarkup = shapes.generateSVG({
        shape: "Circle",
      });
      expect(svgMarkup).toContain("circle");
    });
    it("should generate a SVG markup for a rectangle", () => {
      const shape = new Shapes();
      const svgMarkup = shapes.generateSVG({
        shape: "Rectangle",
      });
      expect(svgMarkup).toContain("rectangle");
    });
  });
});

module.exports = Shapes;
