const generateLogo = require("./utils/generateLogo.js");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    name: "text",
    type: "input",
    message: "Enter UP TO 3 characters for text:",
  },
  {
    name: "textColor",
    type: "input",
    message: "Text Color (Enter color keyword/hexadecimal number):",
  },
  {
    name: "shape",
    type: "list",
    message: "Select shape:",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Shape Color (Enter color keyword/hexadecimal number):",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
  });
}
const handleAnswers = (answers) => {
  if (answers.text.length > 3) {
    console.log("Text must be at most 3 characters");
    init();
  } else {
    writeToFile("logo.svg", generateLogo(answers));
  }
};
function init() {
  inquirer.prompt(questions).then(handleAnswers);
}

init();
