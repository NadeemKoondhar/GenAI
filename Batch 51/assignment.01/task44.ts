/*Task # 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

*/

function orderedSandwich (...items: string[]): void {
  console.log(`You have ordered a Sandwich with `);
  for (const item of items) {
    console.log(`- ${item}`);
  }
  console.log(`\nEnjoy the healthy and tasty Sandwich assembled just for you\n`);
  
}

orderedSandwich(`Cheese`, `Peper`, `Salad`, `Chicken shahlick`)
orderedSandwich(`Cheesy Bread`, `Peper`, `Garlic`, `Spicy Chicken shahlick`)
orderedSandwich(`Cheesy Bread`, `Chili Sauce`, `Tomato Ketchup`, `Peper`, `Garlic`, `Spicy Chicken shahlick`, `Chicken Spread`)