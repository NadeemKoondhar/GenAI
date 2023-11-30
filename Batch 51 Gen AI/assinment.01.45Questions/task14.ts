/*Task # 14: Guest List: If you could invite anyone, living or deceased, 
to dinner, who would you invite? Make a list that includes at least three 
people you’d like to invite to dinner. Then use your list to print a message 
to each person, inviting them to dinner.*/

// Store few Guest names
let guestList = [
  "Engr Saad Aslam", 
  "Engr Waheed Ali", 
  "Dr Waqas Ali"
];

// Prints an invititation message to my guests
for (let guest of guestList) {
  console.log("My dear friend " + guest + ", you are being invited to a Dawat");
}