const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios")

const writeFileAsync = util.promisify(fs.writeFile);
function prompt(){
    return inquirer.prompt([
        {
            type: "input",
            message: "Give your Project a Title: ",
            name: "title"
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
            message: "Are there any questions? ",
            name: "question"
        }
     ])
//.then(function(response){
//       const queryUrl = `https://api.github.com/users/${response.github}/events/public`;

//       axios.get(queryUrl).then(function(res) {
//         var imgURL = res.actor.avatar_url
//         var email = res.payload.commits[0].email
//         console.log(imgURL)
//         console.log(email)
//         });
//     })
}

function image(response){
    const queryUrl = `https://api.github.com/users/${response.github}/events/public`;

      axios.get(queryUrl).then(function(res) {
        var imgURL = res[0]
        // var email = res[0].payload.commits[0].author.email
        console.log(imgURL)
        // console.log(email)
        })
}

function generatemd(data) {
    return ` 

# ${data.title}
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
  <a id="questions">__Any Questions:__</a>
  ${data.question}
  ![User Photo]({imgURL})
  Email: {email}
  ![License: None](https://img.shields.io/badge/License-None-brightgreen)`;
  
}

prompt().then(function(data){
    const user = image(data)
    const readme = generatemd(data);
    console.log(user)
    return writeFileAsync("README.md", readme);
}).then(function(err){
    console.log(err);
})