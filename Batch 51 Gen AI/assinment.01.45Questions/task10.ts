/*Task # 10: Adding Comments: Choose two of the programs you’ve written, 
and add at least one comment to each. If you don’t have anything specific to write 
because your programs are too simple at this point, just add your name and the current 
date at the top of each program file. Then write one sentence describing what the 
program does.*/

/* Nadeem Hussain - Nov 25, 2023
   Below program takes a string and prints its lower, upper and title case*/

/*Task # 03: Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, 
and titlecase.*/

const buddy: string = "Saad Aslam";
console.log(`Lowercase: ${buddy.toLowerCase()}`);
console.log(`Uppercase: ${buddy.toUpperCase()}`);
console.log(`Titlecase: ${buddy.replace(/\w\S*/g, (txt: string) => 
txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())}`);

/* Nadeem Hussain - Nov 25, 2023
   Below program takes a number as my favorite and a string as a message
   to unveal that number.*/
   
/*Task # 09: Favorite Number: Store your favorite number in a variable. Then, 
using that variable, create a message that reveals your favorite number. Print 
that message..*/

let favNumber = 10
let favMessage = "And my favorite number is "
console.log(favMessage, favNumber);