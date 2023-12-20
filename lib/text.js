class Texts {
  constructor(content, color) {
    this.content = content;
    this.color = color;
  }
  generateSVG() {
    return `<text x="10" y="40" fill="${this.color}">${this.content}</text>`;
  }
}

module.exports = Texts;
