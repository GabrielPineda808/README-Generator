const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const util = require('util');

const writeFileAsync = util.promisify.apply(fs.writeFile);

function prompt(){
    return inquirer.prompt([
        {
            type: "input",
            message: "Give your Project a Title: ",
            name: "pojectTitle"
        },
        {
            type: "input",
            message: "Give a brief summary of your project: ",
            name: "summaryProject"
        },
        {
            type: "input",
            message: "How would someone install your application? ",
            name: "install"
        },
        {
            type: "input",
            message: "How or Why would someone use this application? ",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed on this project? ",
            name: "contributors"
        },
        {
            type: "input",
            message: "What is your github username? ",
            name: "github"
        },
        {
            type: "input",
            message: "Are there any tests? ",
            name: "test"
        },
        {
            type: "input",
            message: "Any questions? ",
            name: "question"
        }
    ]).then()
}

function generatemd(data) {
    return ` 
# ${data.projectTitle}
  ${data.summaryProject}
  
  ___Table-of-Contents___
  1. [How to install](#install)
  2. [How to Use](#usage)
  3. [Contributions](#contributors)
  4. [Tests](#tests)
  5. [Questions](#questions)
  
  <a id="install">__Installation:__</a>
  ${data.install}
  
  <a id="usage">__Usage:__</a>
  ${data.usage}
  
  <a id="contributors">__Contributors:__</a>
  ${data.contributors}
  <a id="tests">__Tests:__</a>
  ${data.test}
  <a id="questions">__Questions:__</a>
  ${data.question}
  ![License: None](https://img.shields.io/badge/License-None-brightgreen)`;
  
}

prompt().then(function(data){
    const readme = generatemd(data);
    return writeFileAsync("README.md", readme);
}).then(function(err){
    console.log(err);
})