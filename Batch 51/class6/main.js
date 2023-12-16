// for (let a = 1; a <= 3; a++) {
//     console.log("2", "X", a, "=", a * 2);
// }
// for (let a = 1; a <= 3; a++) {
//     console.log(a);
//     for (let b = 1; b <= 2; b++) {
//         console.log(b);
//     }
// }
// lett msg = "Hello World" - Syntax Error
// console.loge("ratan lal"); - Type Error
// let a = 10 // type inferred
// a = 20
// a = "20" - Assignability Error
// let a: string = "Pakistan" // strongly typed syntax or explicitly defined type of data
// const and let
// both can not be reseclared while
// let allows reassignment but const don't allow the reassingment
// runtime Error
// let a = 20;
// if (true){
//     const b = 10;
//     var c = 30;
// }
// console.log(a);  // What is Hoisting??
// console.log(b);
// console.log(c);
// when we define a variable, the compiler defines its scope. let and const give the variable a block scope, hence
// it won't be accessed outside the block as it is block scopped. while var keyword assigns function scope to a 
// varriable, means if it is created in a function then it will not be accessible outside the function but it is 
// accessible otherwise
// global scope is created if varriable is created out of the boundaries means out of function or if block etc etc
// Modules: Import and Export the Modules
// maintainable, reusable, independent from the errors of the program where it is imported.
// export ways are different explore and work on those
// export default only exports one thing, if anything else is exported it will through the error
// import {a, b, c, f} from './service'; // service file is on sibling level of main.ts
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(f);
import inquirer from "inquirer";
// difference between devdependencies and dependencies
// code in {} below is an object being given to the arguement
let answer = await inquirer.prompt({
    type: `input`,
    name: `firstname`,
    message: 'Whats your first name'
});
if (answer.firstname == "Hamzah") {
    console.log(`Hello ${answer.firstname}, you are an admin`);
}
// console.log(answer.firstname);
// enter your 1st num
// enter your 2nd num
// enter your 2nd num
