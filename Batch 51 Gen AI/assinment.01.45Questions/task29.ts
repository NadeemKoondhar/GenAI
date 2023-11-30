/*Task # 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let favorite_fruits = ["mango", "banana", "apple"];

for (let i = 0; i < favorite_fruits.length; i++) {
  if (favorite_fruits[i] == "kiwi"){
  console.log("You really like Kiwi");
    }
  if (favorite_fruits[i] == "mango"){
  console.log("You really like Mango");
    }
  if (favorite_fruits[i] == "orange"){
    console.log("You really like Orange");
    }
  if (favorite_fruits[i] == "apple"){
    console.log("You really like Apple");
    }
  if (favorite_fruits[i] == "banana"){
    console.log("You really like Banana");
    }
}