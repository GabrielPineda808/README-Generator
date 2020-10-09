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
        }
    ])
}

