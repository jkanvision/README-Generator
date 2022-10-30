// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// Creates an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "project",
  },
  {
    type: "input",
    message: "Please provide a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What does the user need to know about using this repo?",
    name: "usage",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "BSD 3", "GPL 3.0", "none"],
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to this repo?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What command should be entered to run tests?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "Please provide an email address for questions about this project.",
    name: "email",
  },

];


// Creates a function to write README file
function writeToFile(data) {
  fs.writeFile("newREADME.md", data, (err) => err ? console.log(err) : console.log("Generating README...")) 
};

// Creates a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => writeToFile(generateMarkdown(answers)));
};

// Function call to initialize app
init();
