"use strict";

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require('html-pdf');
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

const init = () => {
    inquirer.prompt(questions)
    .then(input => {
        const username = input.username
        let htmlPage = generatingHTML.generateHTML(input);
        const queryURL = `https://api.github.com/users/${username}`
        // const queryURLStar = `https://api.github.com/users/${username}/repos`

        axios.get(queryURL)
        .then(res => {
            // axios.get(queryURLStar).then(response => {
            let topInfo = topContainer(res);
            let mainInfo = mainContainer(res);
            htmlPage = htmlPage + topInfo + mainInfo;
            writeToFile(`${username}.html`, htmlPage)
            console.log("Your profile has successfully been saved.")

            let options = {format: "Letter"};
            pdf.create(htmlPage, options).toFile(`./${username}.pdf`, err => {
                if (err) return console.error(err);
            });
            // });
        })
    })
}   

init();

const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err, data) => {
        if (err) {
            return reject(err);
        }
        resolve(data)
        });
    });
}
   
const topContainer = res => {
    return `
    <div class="wrapper">
        <div class="row">
            <div class="photo-header col">
                <img src = ${res.data.avatar_url}, alt="self-photo">
                <h1>Hi!</h1>
                <h2>My name is ${res.data.name}</h2>
                <h4>currently @ ${res.data.company}</h4>
                <div class="links-nav">
                    <div class="nav-link"> <a href="https://www.google.com/maps/place/${res.data.location}" target="_blank">${res.data.location}</a></div>
                    <div class="nav-link"> <a href=${res.data.html_url} target="_blank">GitHub</a></div>
                    <div class="nav-link"> <a href=${res.data.blog} target="_blank">Blog</a></div>
                </div>
            </div>
        </div>
    `
}

const mainContainer = res => {
    return `
    <main>
        <div class="container">
            <h3 class="col">${res.data.bio}</h3>
            <div class="row">
                <div class="col card">
                    <h3>Public Repositories</h3>
                    <h4>${res.data.public_repos}</h4>
                </div>
                <div class="col card">
                    <h3>Followers</h3>
                    <h4>${res.data.followers}</h4>
                </div>
            </div>
            <div class="row">
                <div class="col card">
                    <h3>GitHub Stars</h3>
                    <h4>3</h4>
                </div>
                <div class="col card">
                    <h3>Following</h3>
                    <h4>${res.data.following}</h4>
                </div>
            </div>
        </div>
    </main>
    </div>
    </body>  `
}