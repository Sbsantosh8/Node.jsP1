// // NPM module

// const clc = require('cli-color');

// // Example: Print colored text to the console
// console.log(clc.green('This is green text!'));
// console.log(clc.red.bold('This is bold red text!'));


// // Local module

// const register1 = require('./auth');
// register1("Santosh");

// const login1 = require('./auth');

// login1.register1("Santosh")
// login1.login("Santya","tumDono ki maki choot")



// Core Module

// Dirname
const path = require('path');

console.log('Folder name: ',path.dirname(__filename));


// Filename

console.log('File name: ',path.basename(__filename));

// Extension

console.log('Extension: ',path.extname(__filename))

// Parse

console.log('Parse :', path.parse(__filename))

// Join

console.log('Join: ',path.join(__dirname,'order','app.js'))