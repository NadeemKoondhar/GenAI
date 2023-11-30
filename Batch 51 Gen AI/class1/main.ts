/*Task # 01: insatlled the VS Code, node.js & 
Typescreipt*/
/*Testing: printed the simple message*/
console.log("Nadeem Hussain")
console.log("S/O Abdul Fattah")
/*Task # 02: Personal Message: Store a person’s name in a 
variable, and print a message to that person. Your message 
should be simple,such as, “Hello Eric, would you like to 
learn some Python today?”*/
const my_boy = "Dr Waqas Ali";
console.log("Hello ".concat(my_boy," are you learning TypeScript these days?"));
/*Task # 03: Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, 
and titlecase.*/
let my_bro: string = "Saad Aslam";
console.log(`Lowercase: ${my_bro.toLowerCase()}`);
console.log(`Uppercase: ${my_bro.toUpperCase()}`);
console.log(`Titlecase: ${my_bro.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())}`);