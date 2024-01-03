const Shape = require("./shape");

class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="40" fill="${
      this.color
    }" />${this.textObj.render()}`;
  }
}

module.exports = Circle;
