// export const a = "Hamzah"
export {};
// import inquirer from "inquirer";
// let a: string | number | boolean = "Hamzah"
// a = 10
// a = "Hamzah"
// a = true
// let age: number = 22;
// console.log(age.toFixed(2));
// let firstName: string = "Nadeem";
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// let age: string | number;
// // union reduces the function properties to common only
// age.
// age = 22
// // But when we assingned a number then typescript only shows the properties of the numbers
// age.
// age = `22`
// // similarly when we assingned a string then typescript only shows the properties of the strings
// age.
// let age: string | number = "22";
// console.log(typeof age);
// let age: string | number = "22";
// console.log(typeof age);
// let age: string | number;
// WRONG METHOD
// if (typeof age === "string"){
//     age.toLowerCase()
// }   else {
//     age.
// }
// console.log(typeof age);
// console.log(Math.random());
// generates 0 to 1 number with 16 decimals in random
// let newAge = Math.random() > 0.5 ? 22 : "Khan"
// // ternary operator helps to write if else in one line
// console.log(newAge);
// console.log(typeof newAge);
// let newAge = Math.random() > 0.5 ? 22 : "Khan"
// // with the help of ternary function
// if (typeof newAge === "string"){
//     newAge.toLowerCase()
// } else {
//     newAge.toFixed()
// }
// this function "typeof" is used for narrowing and is called the type card
// literal data type
// let trafficLights: "red" | "yellow" | "green" = "yellow"
// trafficLights = "red"
// howering will also show the literal values assigned
// created object ==Variable name + data type + Property values
// let teacher: {
//     name: string,
//     salary: number,
// } = {
//     name: "Hamza",
//     salary: 30000
// }
// console.log(teacher.name);
// console.log(typeof teacher.name);
// let teacher: {
//     name: string,
//     salary: number,
//     "full-name": string,
// } = {
//     name: "Hamza",
//     salary: 30000
//     "full-name": `Hamza Syed`
// }
// console.log(teacher.name);
// console.log(teacher["full-name"]);
// console.log(typeof teacher.name);
// let student: {
//     name: string,
//     age: number,
// }
// student = {
//     name: "Nadeem",
//     age: 40,
// }
// console.log(student.name);
// console.log(student.age);
// console.log(`Type of Student Name Varibale is ${typeof student.name}`);
// // type Aliace, its name should be in capital
// type Student = string | boolean | number | undefined
// // instead of 
// let a: string | boolean | number | undefined
// // I will write
// let a: Student
// type Student = {
//     name: string,
//     age: number,
// }
// let student1: Student = {
//     name: "Hamzah",
//     age: 22 
// }
// let student2: Student = {
//     name: "Zeeshan",
//     age: 25 
// }
// console.log(student1.name);
// console.log(student1.age);
// console.log(student2.name);
// // console.log(student2.age);
// import inquirer from "inquirer";
// let answer = await inquirer.prompt([{
//     type: `number`,
//     name: `num1`,
//     message: `Enter your First Number`
// },
// {
//     type: `number`,
//     name: `num2`,
//     message: `Enter your Last Number`
// },
// {
//     type: `list`,
//     name: `operator`,
//     message: `Select the operation you want to perform`,
//     choices:['add', `sub`, `multiply`, `divide`]
// },
// ]);
// if (answer.operator === 'add'){
//     console.log((answer.num1 + answer.num2));
// } else if (answer.operator === 'sub'){
//     console.log((answer.num1 - answer.num2));
// } else if (answer.operator === 'multiply'){
//     console.log((answer.num1 * answer.num2));
// } else {
//     console.log((answer.num1 / answer.num2));
// }
// console.log(answer);
// interface Deal1 {
//     food: string,
// }
// type Deal2 = {
//     food: string,
//     drink: string,
// }
// type Deal3 = {
//     food: string,
//     drink: string,
//     sweet: string,
// }
// let hamzahOrder: Deal1 = {
//     food: `Chicken`
// }
// let ocashaOrder: Deal2 = {
//     food: `Biryani`,
//     drink: `Coke`,
// }
// let bilalOrder: Deal3 = {
//     food: `Biryani`,
//     drink: `Coke`,
//     sweet: `Rasmalai`,
// }
// hamzahOrder = bilalOrder // not throwing the error as ocashaorder has an additional order item
// console.log(hamzahOrder);
// bilalOrder = hamzahOrder
// console.log(ocashaOrder);
// These two interfaces are completely
// transferrable in a structural type system:
// interface Ball {
//     diameter: number;
// }
// interface Sphere {
//     diameter: number;
// }
// let ball: Ball = { diameter: 10 };
// let sphere: Sphere = { diameter: 20 };
// sphere = ball;
// ball = sphere;
// // If we add in a type which structurally contains all of
// // the members of Ball and Sphere, then it also can be
// // set to be a ball or sphere.
// interface Tube {
// diameter: number;
// length: number;
// }
// let tube: Tube = { diameter: 12, length: 3 };
// //tube = ball;//Error
// ball = tube;
// tube = ball
// interface Ball {
//     diameter: number,
// }
// let ball: Ball = {diameter = 10, radius = 2}
