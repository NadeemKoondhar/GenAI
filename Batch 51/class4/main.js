"use strict";
// // Function Greet
// function greet_hamza(){
//     console.log(`Function "Greet" prints "Hello Hamzah"`)
// }
// // Function Sum
// function sum(){
//     console.log(`Function "Sum" prints 2 + 2 = "${4}"`)
// }
// greet_hamza()
// sum()
// greet_hamza()
// function greet(name: string){
//     console.log(`Function "Greet" prints "Hello ${name}"`)
// }
// greet(`Nadeem`);
// greet(`Hamzah`);
// function sum(num1: number, num2: number){
//     console.log(`Function "Sum" prints sum of ${num1} + ${num2} = "${num1 + num2}"`)
// }
// sum(5, 10);
// sum(9, 6);
// sum(5, 10);
// function sum(num1: number, num2: number){
//     // console.log(num1 + num2);
//     return num1 + num2
// }
// function multiply(num3: number){
//     console.log(num3 * 2);
// }
// let ans: number = sum(5, 10)
// multiply(ans)
// let fruits: number[] = ["Apple", "Orange", "Banana", "Pineapple"]
// // console.log(fruits[1]);
// console.log(fruits[2]);
// let menu = [`Kofta`, `Kheer`, `Biryani`, `Gajar Ka Halwa`]
// console.log(menu);
// menu.push(`Chicken Tika`)
// console.log(menu);
// menu.pop()
// let menu = [`Kofta`, `Kheer`, `Biryani`, `Gajar Ka Halwa`]
// let shiftedElement = menu.shift()
// // console.log(shiftedElement);
// let len = menu.unshift("Chicken Tickaa")
// // console.log(menu[2]);
// console.log(len);
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
// // const citrus = fruits.slice(1)
// // const citrus = fruits.slice()
// const citrus = fruits.slice(1,3)
// console.log(fruits);
// console.log(citrus);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(a);
// console.log(fruits);
// console.log(fruits[2]);
