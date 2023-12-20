class Shapes {
  constructor(type, color) {
    this.type = type;
    this.color = color;

    generateSVG();
    switch (this.type.toLowerCase()) {
      case "circle":
        return `<circle cx="50" cy="50" r="40" fill="${shapeColor}" />`;

      case "rectangle":
        return `<rect x="10" y="10" width="120" height="80" fill="${shapeColor}" />`;
      case "triangle":
        return `<polygon points="50,10 90,90 10,90" fill="${shapeColor}" />`;

      case "square":
        return `<rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />`;
    }
  }
}

module.exports = Shapes;
