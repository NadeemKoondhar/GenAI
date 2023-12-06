/*Task # 23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

// test01 True
let car = `subaru`;
console.log(`Is car == "subaru"? I predict True.`)
console.log(car == `subaru`)

// test02 True
let favNum = 10;
console.log(`Is my favourite number a multiple of 5? I predict "True".`);
console.log(favNum % 5 == 0);

// test03 True
let secNum = 5000;
console.log(`Is my secret number above 3000? I predict "True".`);
console.log(secNum > 3000);

// test04 True
let secCity = "Islamabad";
console.log(`If my secret city is Islamabad? I predict "True".`);
console.log(secCity == "Islamabad");

// test05 True
let secStreet = "10 Downing Street";
console.log(`If my secret street is 10 Downing Street? I predict "True".`);
console.log(secStreet == "10 Downing Street");

// test06 False
let acar = `subaru`;
console.log(`Is car == "subaru"? I predict True.`)
console.log(acar != `subaru`)

// test07 False
let afavNum = 10;
console.log(`Is my favourite number a multiple of 5? I predict "True".`);
console.log(afavNum % 5 != 0);

// test08 False
let asecNum = 5000;
console.log(`Is my secret number above 3000? I predict "True".`);
console.log(asecNum == 3000);

// test09 False
let asecCity = "Islamabad";
console.log(`If my secret city is Islamabad? I predict "True".`);
console.log(asecCity != "Islamabad");

// test10 False
let asecStreet = "10 Downing Street";
console.log(`If my secret street is 10 Downing Street? I predict "True".`);
console.log(asecStreet != "10 Downing Street");