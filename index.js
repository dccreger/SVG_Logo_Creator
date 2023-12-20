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

function generateSVG(data) {
  const { text, shape, textColor, shapeColor } = data;

  let svgMarkup = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">`;

  switch (shape.toLowerCase()) {
    case "circle":
      svgMarkup += `<circle cx="50" cy="50" r="40" fill="${shapeColor}" />`;
      break;
    case "rectangle":
      svgMarkup += `<rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />`;
      break;
    case "triangle":
      svgMarkup += `<polygon points="50,10 90,90 10,90" fill="${shapeColor}" />`;
      break;
    case "square":
      svgMarkup += `<rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />`;
      break;
  }
  svgMarkup += `</svg>`;

  return svgMarkup;
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
