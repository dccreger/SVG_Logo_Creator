const Shape = require("./shape");

class Square extends Shape {
  render() {
    return `<rect x="20%" y="20%" width="60%" height="60%" fill="${
      this.color
    }" />${this.textObj.render()}`;
  }
}

module.exports = Square;
