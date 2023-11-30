"use strict";
/*Task # 18: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
// Create an array of desired travel destinations
const destinations = [
    "Makkah",
    "Madinah",
    "Jarusalem",
    "Lahore",
    "Islamabad"
];
// Print the original array
console.log("\nDestinations array in unmodified Order:\n" + destinations);
// Print the array in alphabetical order without modifying the original list
console.log("\nDestinations in Alphabetical Order:\n" + destinations.slice().sort());
// Show that the original array is still in its original order
console.log("\nDestinations array in unmodified Order:\n" + destinations);
// Print the array in reverse alphabetical order without changing the original list
console.log("\nDestinations array in reverse Alphabetical Order:\n" + destinations.slice().reverse());
// Show that the original array is still in its original order
console.log("\nDestinations array in unmodified Order:\n" + destinations);
// Reverse the order of the original list
// create a temporary array to store the reversed order destination array
const reversedDestinations = [];
// Reverse the order of the elements of original array 
for (let i = destinations.length - 1; i >= 0; i--) {
    reversedDestinations.push(destinations[i]);
}
// Copy reverse elements back to original array 
for (let i = 0; i < destinations.length; i++) {
    destinations[i] = reversedDestinations[i];
}
console.log("\nDestinations array in reversed Order:\n" + destinations);
// Restore the original order of the array
// for (let i = destinations.length - 1; i >= 0; i--) {
for (let i = 0; i < destinations.length; i++) {
    destinations[i] = reversedDestinations.pop();
}
console.log("\nDestinations array back to its original Order:\n" + destinations);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
destinations.sort();
console.log("\nDestinations array order sorted to Alphabetical Order:\n" + destinations);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
destinations.reverse();
console.log("\nDestinations array order sorted to reverse Alphabetical Order:\n" + destinations);
