/*Task # 20: Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/

// Random data Array
const randNames: string[] = [
  "K2", 
  "Indus", 
  "Keenjhar",
  "KT Bander",
  "Arabian Sea"
];

// print array in list form
console.log("\nRandom Array data in the List form is given below\n");
randNames.map((item) => console.log(item));