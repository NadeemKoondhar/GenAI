/*Task # 15: Changing Guest List: You just heard that one of your guests can’t 
make the dinner, so you need to send out a new set of invitations. You’ll have 
to think of someone else to invite.
  1. Start with your program from Exercise 14. Add a print statement at the end 
  of your program stating the name of the guest who can’t make it.
  2. Modify your list, replacing the name of the guest who can’t make it with 
  the name of the new person you are inviting.
  3. Print a second set of invitation messages, one for each person who is still 
  in your list.
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
