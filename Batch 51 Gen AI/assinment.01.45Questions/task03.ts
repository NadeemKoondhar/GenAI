/*Task # 03: Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, 
and titlecase.*/
const buddy: string = "saad aslam";
console.log(`Lowercase: ${buddy.toLowerCase()}`);
console.log(`Uppercase: ${buddy.toUpperCase()}`);
console.log(`Titlecase: ${buddy.replace(/\w\S*/g, (txt: string) => 
txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())}`);