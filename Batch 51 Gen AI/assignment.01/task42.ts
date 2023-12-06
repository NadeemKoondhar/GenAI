/*Task # 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/

const magicians: string[] = ["Maandhoo", "Kaloo Baba", "Naangoo Shaaa"]

function show_magicians(magicians: string[]){
  for (const magician of magicians) {
    console.log(magician);
    }
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `The Great ${magicians[i]}`;
  }
}

show_magicians(magicians); // Print original array of magicians
make_great(magicians); // Modify the array of magicians
show_magicians(magicians); // Print modified array of magicians