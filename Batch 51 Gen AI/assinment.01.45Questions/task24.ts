/*Task # 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

let n = 5;
console.log(n == 5); // True
console.log(n === 5); // True
console.log(n != 5); // False
console.log(n > 8); // False
console.log(n < 8); // True
console.log(n >= 8); // False
console.log(n <= 8); // True
console.log(n >= 5 && n < 10); // True
console.log(n > 5 && n < 10); // False
console.log(n >= 5 || n < 10); // True
console.log(n > 5 || n < 10); // True
console.log(!(n < 10)); // False
console.log(!(n > 10)); // True