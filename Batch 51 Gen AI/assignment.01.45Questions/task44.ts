/*Task # 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/

const magicians: string[] = ["Maandhoo", "Kaloo Baba", "Naangoo Shaaa"]

function make_great(magicians: string[]) {
  const great_magicians = [];
  for (const magician of magicians) {
    great_magicians.push(`The Great ${magician}`);
  }
  return great_magicians;
}

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

const original_magicians: string[] = [...magicians]; // Create a copy of the original array

show_magicians(original_magicians); // Print the original array
const great_magicians: string[] = make_great(original_magicians); // Modify and return a new array
show_magicians(great_magicians); // Print the modified array
