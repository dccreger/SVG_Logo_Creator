const Text = require("./text.js");

class Shape {
  constructor() {
    this.textObj = new Text();
    this.color = "black";
  }

  setText(text) {
    this.textObj.setText(text);
  }
  setTextColor(textColor) {
    this.textObj.setTextColor(textColor);
  }
  setColor(color) {
    this.color = color;
  }
  render() {
    throw new Error("The render method is implemented by child classes");
  }
}

module.exports = Shape;
