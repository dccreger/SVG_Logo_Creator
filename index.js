const Triangle = require("./lib/triangle.js");
const Circle = require("./lib/circle.js");
const Square = require("./lib/square.js");
const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message:
      "What text would you like added to your logo? (Maximum of three characters)",
    name: "text",
  },
  {
    type: "input",
    message:
      "What color would you like added to the text of your logo? (Color Keyword or Hexadecimal Number)",
    name: "textColor",
  },
  {
    type: "list",
    message: "What text shape would you like added to your logo?",
    choices: ["Circle", "Triangle", "Square"],
    name: "shapeType",
  },
  {
    type: "input",
    message:
      "What color would you like added to the shape of your logo? (Color Keyword or Hexadecimal Number)",
    name: "shapeColor",
  },
];

function writeToFile(fileType, userInput) {
  const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${userInput}</svg>`;
  fs.writeFile("logo.svg", svgContent, function (err, data) {
    err
      ? console.error("Error has taken place", err)
      : console.log("Logo Created");
  });
}
function createShape(shapeType) {
  switch (shapeType.toLowerCase()) {
    case "triangle":
      return new Triangle();
    case "circle":
      return new Circle();
    case "square":
      return new Square();
  }
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    const shapeType = data.shapeType;
    const shape = createShape(shapeType);
    shape.setText(data.text);
    shape.setTextColor(data.textColor);
    shape.setColor(data.shapeColor);

    const svgContent = shape.render();
    console.log(svgContent);
    writeToFile("logo.svg", svgContent);
  });
}

// Function call to initialize app
init();
