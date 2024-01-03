class Text {
  constructor() {
    this.text = "";
    this.textColor = "black";
  }
  setText(text) {
    this.text = text.slice(0, 3);
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  render() {
    return `<text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle" font-size="16">${this.text}</text>`;
  }
}

module.exports = Text;
