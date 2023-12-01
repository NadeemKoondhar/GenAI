"use strict";
/*Task # 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/
const magicians = ["Maandhoo", "Kaloo Baba", "Naangoo Shaaa"];
const copyMagicians = ["Maandhoo", "Kaloo Baba", "Naangoo Shaaa"];
const changedMagicians = [];
function make_great(copyMagicians) {
    for (let i = 0; i < copyMagicians.length; i++) {
        changedMagicians[i] = `The Great ${copyMagicians[i]}`;
    }
}
make_great(copyMagicians); // Modify the array of magicians
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians); // Print original array of magicians
show_magicians(changedMagicians); // Print modified array of magicians
