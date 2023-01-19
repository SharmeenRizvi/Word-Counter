#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence for word count: "
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(`Your sentence word count is ${words.length}`);
