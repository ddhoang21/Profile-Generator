const fs = require("fs");
const axios = require("axios");
const pdf = require('html-pdf');
const inquirer = require("inquirer");
const generatingHTML = require("./generateHTML.js");

const questions = [
    {
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "list",
        message:"Pick your favorite color: ",
        name:"color",
        choices: ["green", "purple", "pink", "red"]
    }
];
   
function photoHeaderContainer (res){
    return `
    <div class = "wrapper">>
        <div class = "row">
            <div class = "photo-header col">
                <img src = ${res.data.avatar_url}, alt="self-photo">
                <h1>Hi!</h1>
                <h2>My name is Duc-Hoang Do</h2>
                <h4>currently @ ${res.data.company}</h4>
                <div class = "links-nav">
                    <div class = "nav-link"> <a href="https://www.google.com/maps/place/${res.data.location}">${res.data.location}</a></div>
                    <div class = "nav-link"> <a href=${res.data.html_url}>GitHub</a></div>
                    <div class = "nav-link"> <a href=${res.data.blog}>Blog</a></div>
                </div>
            </div>
        </div>
    `
}

function statsContainer(res){
    return `
    <main>
        <div class = container>
            <h3 class="col">Full-Stack Web Developer open to new opportunities</h3>
            <div class = "row">
                <div class = "col card">
                    <h3>Public Repositories</h3>
                    <h4>${res.data.public_repos}</h4>
                </div>
                <div class = "col card">
                    <h3>Followers</h3>
                    <h4>${res.data.followers}</h4>
                </div>
            </div>
            <div class = "row">
                <div class = "col card">
                    <h3>Git Hub Stars</h3>
                    <h4>0</h4>
                </div>
                <div class = "col card">
                    <h3>Following</h3>
                    <h4>${res.data.following}</h4>
                </div>
            </div>
        </div>
    </main>
    </div>
    </body>  `
}

function writeToFile(fileName, data) {
    return new Promise(function(resolve,reject){
        fs.writeFile(fileName,data,function(err,data) {
        if(err){
            return reject(err);
        }
        resolve(data)
        });
    });
}