#! /usr/bin/env node

import inquirer from "inquirer";

// taking question from the user
let wordCount = await inquirer.prompt([{
    name : "count",
    type : "input",
    message : "Enter your sentance"
}])
console.log("-------------------- | ------------------------")

//making easier for us to code
let wordCounter = wordCount.count

//using split to remove the space in the sentace and return the other values seperatly in an array
let words = wordCounter.split(" ")


//now we have an array we can use .length to get the number of the words
let number = words.length


// now consoling
console.log(`Your words are seperated as : ${words} `)
console.log("-------------------- | ------------------------")
console.log(`Your total words in the sentance are : ${number}`)