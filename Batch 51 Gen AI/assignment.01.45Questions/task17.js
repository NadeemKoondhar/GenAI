"use strict";
/*Task # 17: Shrinking Guest List: You just found out that your new dinner table won’t
arrive in time for the dinner, and you have space for only two guests.
  • Start with your program from Exercise 16. Add a new line that prints a message
  saying that you can invite only two people for dinner.
  • Remove guests from your list one at a time until only two names remain in your
  list. Each time you pop a name from your list, print a message to that person
  letting them know you’re sorry you can’t invite them to dinner.
  • Print a message to each of the two people still on your list, letting them know
  they’re still invited.
  • Remove the last two names from your list, so you have an empty list. Print your
  list to make sure you actually have an empty list at the end of your program.
*/
// Store few Guest names
let guestList = [
    "Engr Saad Aslam",
    "Engr Waheed Ali",
    "Dr Waqas Ali"
];
// Prints an invititation message to my guests
for (let guest of guestList) {
    console.log("My dear friend " + guest + ", you are being invited to a Dinner");
}
// Add a print statement to identify the guest who can't make it
console.log("\nUnfortunately, Dr Waqas Ali is unable to attend the dinner.");
// Modify the guest list to replace the unavailable guest
guestList.splice(guestList.indexOf("Dr. Waqas Ali"), 1, "Nadeem Ahmed");
// Print a second set of invitation messages
console.log("\nUpdated Invitations:\n");
for (let guest of guestList) {
    console.log("My dear friend " + guest + ", you are cordially invited to a Dinner");
}
// Add a print statement to the availability of a bigger Dinner Table
console.log("\nGood News, We can have a bigger dinner arrangement to see a few more friends.");
// Add one new guest to the beginning of your array
guestList.unshift("Ahsan Ali");
// Add one new guest to the middle of your array
guestList.splice(2, 0, "Bilal Ahmed");
// Use append() to add one new guest to the end of your list
guestList.push("Muhammad Ibrahim");
// A new invitation messages for bigger get together
console.log("\nNew & Big Invitations:\n");
for (let guest of guestList) {
    console.log("My dear friend " + guest + ", you are cordially invited to a Dinner");
}
// Add new line that prints a message that you can invite only two people for dinner.
console.log("\nVery Bad, I can invite only two people now for dinner due to an issue\n");
// Remove guests one by one until only two names remain in the list. Each time you pop 
// a name from your list, print a message to that person letting him know you’re sorry 
// you can’t invite them to dinner.
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log("Dear " + removedGuest + ", we regret to inform you that we can no longer accommodate you at the dinner.");
}
console.log("");
// Print a message to remaining two people, letting them know they’re still invited.
for (let guest of guestList) {
    console.log("My dear friend " + guest + ", it is immensly exciting that we are still on for Dinner");
}
// Empty the list & Print it to make sure it is actually empty.
guestList = [];
console.log("\nNo guest in the guest list", guestList);
