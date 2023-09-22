// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
    response: 'string',
}, {
    type: 'input',
    name: 'description', 
    message: 'Enter a project description',
    response: 'string',
}, {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions', 
    response: 'string',
}, { 
    type: 'input',
    name: 'usage', 
    message: 'Provide usage information',
    response: 'string',
}, {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines',
    response: 'string',
}, {
    type: 'input',
    name: 'test',
    message: 'Provide test instructions',
    response: 'string',
}, {
    type: 'checkbox',
    name: 'license',
    message: 'Select a license',
    choices: [ {
        name: 'Apache License 2.0',
        value: 'Apache License 2.0',
        short: 'Apache License 2.0',
    }, {
        name: 'GNU General Public License v3.0',
        value: 'GNU General Public License v3.0',
        short: 'GNU General Public License v3.0',
    }, {
        name: 'MIT License',
        value: 'MIT License',
        short: 'MIT License',
    }, {
        name: 'BSD 2-Clause "Simplified" License',
        value: 'BSD 2-Clause "Simplified" License',
        short: 'BSD 2-Clause "Simplified" License',
    }, {
        name: 'BSD 3-Clause "New" or "Revised" License',
        value: 'BSD 3-Clause "New" or "Revised" License',
        short: 'BSD 3-Clause "New" or "Revised" License',
    }, {
        name: 'Boost Software License 1.0',
        value: 'Boost Software License 1.0',
        short: 'Boost Software License 1.0',
    }, {
        name: 'Creative Commons Zero v1.0 Universal',
        value: 'Creative Commons Zero v1.0 Universal',
        short: 'Creative Commons Zero v1.0 Universal',
    }, {
        name: 'Eclipse Public License 2.0',
        value: 'Eclipse Public License 2.0',
        short: 'Eclipse Public License 2.0',
    }, {
        name: 'GNU Affero General Public License v3.0',
        value: 'GNU Affero General Public License v3.0',
        short: 'GNU Affero General Public License v3.0',
    }, {
        name: 'GNU General Public License v2.0', 
        value: 'GNU General Public License v2.0', 
        short: 'GNU General Public License v2.0', 
    }, {
        name: 'GNU Lesser General Public License v2.1',
        value: 'GNU Lesser General Public License v2.1',
        short: 'GNU Lesser General Public License v2.1',
    }, {
        name: 'Mozilla Public License 2.0',
        value: 'Mozilla Public License 2.0',
        short: 'Mozilla Public License 2.0', 
    }, {
        name: 'The Unlicense', 
        value: 'The Unlicense', 
        short: 'The Unlicense',
    } ]
}, {
    type: 'input',
    message: 'What is your github username?',
    response: 'string',
}, {
    type: 'input',
    message: 'What is your email address?',
    response: 'string',
} ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
