"use strict";
/*Task # 12: Greetings: Start with the array you used in Exercise 11, but instead
of just printing each person’s name, print a message to them. The text of each
message should be the same, but each message should be personalized with the
person’s name.*/
// Store the names of a few of your friends in a array called names
let names = ["Saad", "Aslam", "Naveed", "Hassan", "AbuBakr"];
/* Prints a message for each person's name by accessing each element in the list
, one at a time.*/
for (let name of names) {
    console.log("How are you my dear " + name);
}
