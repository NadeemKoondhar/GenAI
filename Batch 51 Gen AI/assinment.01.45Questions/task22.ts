/*Task # 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

const numbers = [1, 2, 3, 4, 5];

// Intentionally cause an index error
console.log(numbers[6]); // This will cause an index error because there is no element at index 6

// Correct the error by using a conditional statement to check if the index is valid
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`The elemnt at index number ${i} is ${numbers[i]}`);
}

