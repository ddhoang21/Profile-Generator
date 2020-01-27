'use strict'

const fs = require("fs")
const axios = require("axios")
const inquirer = require("inquirer")
const generateHTML = require("./generateHTML")
var pdf = require('html-pdf');

const data = {}

const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username: ",
    },
    {
        type: "list",
        name: "color",
        message: "Pick your favorite color: ",
        choices: ["green", "blue", "pink", "red"],
    }
];

function writeToFile(fileName, data) {}

function init() {}

init();
