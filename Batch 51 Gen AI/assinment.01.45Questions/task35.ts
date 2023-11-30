/*Task # 35: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


*/

let animanls = ["baffallow", "cow", "goat"]

for (let animal of animanls) {
    console.log(`${animal} is in my list of pet animals`);
}

console.log(animanls[0] + `, ` + animanls[1] + ` and ` + animanls[2] + ` are very nice to have as a pet animals. We have milk from them and we can eat their meat also`);
