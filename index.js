const Texts = require("./lib/text.js");
const Shapes = require("./lib/shapes.js");
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
    choices: ["Circle", "Rectangle", "Triangle", "Square"],
    name: "shape",
  },
  {
    type: "input",
    message:
      "What color would you like added to the shape of your logo? (Color Keyword or Hexadecimal Number)",
    name: "shapeColor",
  },
];

function renderSVG(textSVG, shapeSVG) {
  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${textSVG} ${shapeSVG} </svg>`;
}

function generateSVG(data) {
  const { text, shape, textColor, shapeColor } = data;

  const shapeInstance = new Shape(shape, shapeColor);
  const shapeSVG = shapeInstance.generateSVG();

  const textInstance = new Text(text, textColor);
  const textSVG = textInstance.generateSVG();
  return renderSVG(textSVG, shapeSVG);
}

function writeToFile(fileName, userInput) {
  fs.writeFile("logo.svg", userInput, "utf8", function (err, data) {
    err
      ? console.error("Error has taken place", err)
      : console.log("Logo Created");
  });
  function init() {
    inquirer.prompt(questions).then(function (data) {
      const userInput = generateSVG(data);
      writeToFile("logo.svg", userInput);
    });
  }

  // Function call to initialize app
  init();
}
