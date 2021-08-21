// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What licenses should be included in your project",
        choices: ["MIT", "GNU", "Boost Software License 1.0", "Apache License 2.0", "Mozilla Public License 2.0", "Unlicense"]
    },
    {
        type: "",
        name: "",
        message: ""
    },
];

const promptUser = () => {
    return inquirer
    .prompt(questions);
};
// What is the name of your project?


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fileName
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// const generatePage = (userName, githubName) => {
//     return `
//     Name: ${userName}
//     GitHub: ${githubName}
//     `;
// };
