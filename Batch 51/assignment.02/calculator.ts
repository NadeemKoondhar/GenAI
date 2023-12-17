/*
Calculator Code in TypeScript with capability to carry 04 basic operations, ask for the numbers 
in the operations and choice to select the operation.

"Code Plan": 1. Prepare the TypeScript to accept the querry.
             2. Make madules for operations.
             3. Call import the modeules in Calculator Code to perform the operation.
*/

import inquirer from "inquirer";

// difference between devdependencies and dependencies

// code in {} below is an object being given to the arguement
let answer = await inquirer.prompt({
    type: `input`,
    name: `firstname`,
    message: 'Whats your first name'
})

if (answer.firstname == "Hamzah") {
    console.log(`Hello ${answer.firstname}, you are an admin`);
    
}