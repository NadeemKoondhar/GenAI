/*Task # 16: More Guests: You just found a bigger dinner table, so now more space 
is available. Think of three more guests to invite to dinner.
  • Start with your program from Exercise 15. Add a print statement to the end of 
  your program informing people that you found a bigger dinner table.
  • Add one new guest to the beginning of your array.
  • Add one new guest to the middle of your array. 
  • Use append() to add one new guest to the end of your list. 
  • Print a new set of invitation messages, one for each person in your list.
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


