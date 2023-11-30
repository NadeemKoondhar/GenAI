/*Task # 13: Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items, such as 
“I would like to own a Honda motorcycle.”*/

// Store few features of the car I like
let carFeatures = [
  "I like the safety features of ", 
  "Breaking is one of the great safety features of ", 
  "Build quality and balance is also one of the plus in "
];

// Prints car features of my favorite car
for (let carFeature of carFeatures) {
  console.log(carFeature + "Honda Car");
}