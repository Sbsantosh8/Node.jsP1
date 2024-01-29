// // // NPM module

// const clc = require('cli-color');

// // // Example: Print colored text to the console
// // console.log(clc.green('This is green text!'));
// // console.log(clc.red.bold('This is bold red text!'));


// // // Local module

// // const register1 = require('./auth');
// // register1("Santosh");

// // const login1 = require('./auth');

// // login1.register1("Santosh")
// // login1.login("Santya","tumDono ki maki choot")



// // Core Module

// // Dirname
const path = require('path');

// console.log('Folder name: ',path.dirname(__filename));


// // Filename

// console.log('File name: ',path.basename(__filename));

// // Extension

// console.log('Extension: ',path.extname(__filename))

// // Parse

// console.log('Parse :', path.parse(__filename))

// // Join

// console.log('Join: ',path.join(__dirname,'order','app.js'))


// // File System
// // imorting a file system module
const fs = require('fs')

// // make a directory

// fs.mkdir(path.join(__dirname,'/test'),(err)=>{
//     if(err){
//         console.log(clc.red('Something went wrong...'));
//         console.log(err);
//         return 
//     }

//     console.log(clc.red('Folder created..'));
// })


// Write a file

// fs.writeFile(path.join(__dirname,'test','test.txt'),'Hello Node\n',(err)=>{
//     if(err){
//         throw err
//     }
//     // suppose if you want to add more data in that test.txt file

// fs.appendFile(path.join(__dirname,'test','test.txt'),'More data',(err)=>{
//     if(err){
//         throw err
//     }

//     console.log('Data added..')
// })


//     console.log('File created...')
// })






// Read a File

fs.readFile(path.join(__dirname,'test','test.txt'),(err,data)=>{
    if(err){
        throw err
    }


    // to print the data Technique 1

    const content = Buffer.from(data)
    console.log(content.toString())



    
})


fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
    if(err){
        throw err
    }


    // to print the data Technique 2  , adding a parameter (utf-8) 
     
    console.log(data)
   
   
})


// OS module

// const os = require('os')

// console.log("os type :",os.type());

// console.log("os platform :",os.platform())

// console.log("Cpu architecture : ",os.arch())

// console.log("Cpu details : ",os.cpus())

// console.log("Free memory : ",os.freemem())

// console.log("Total memory : ",os.totalmem())

// console.log("Free memory : ",os.freemem())

// console.log("Uptime : ",os.uptime())



// Events Module

const Emitter = require("events");

const myEmitter = new Emitter();

myEmitter.on('somename',(data)=>{
    console.log(data);
})

myEmitter.emit('somename',{
    name : 'Sandy'
})


class Auth extends Emitter {
    register(username){

        console.log('Register successfully...')
        this.emit('registered',username)
    }
}

const auth = new Auth();

// Listen

auth.on('registered',(data)=>{
    console.log(`Sending email to ${data}...`)
})

auth.register("Mahesh")