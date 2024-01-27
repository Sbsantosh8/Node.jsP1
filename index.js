// NPM module

const clc = require('cli-color');

// Example: Print colored text to the console
console.log(clc.green('This is green text!'));
console.log(clc.red.bold('This is bold red text!'));


// Local module

// const register1 = require('./auth');
// register1("Santosh");


const login1 = require('./auth');

login1.register("Santosh")
login1.login("Santya","tumDono ki maki choot")



// Core Module

const path = require('path');

console.log('Folder name: ',path.dirname(__filename));
