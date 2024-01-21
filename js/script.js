// 1. ***Javascript Variables***

// using var
// using let
// using const

// 2. ***Function***

// function name(parameter1, parameter2, parameter3) {

// }

// Function is called, the return value will end up in x
// let x = myFunction(4, 3);

// function myFunction(a, b) {
// // Function returns the product of a and b
//   return a * b;
// }

// 3. ***Object***

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };

// Object Method

// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   id       : 5566,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// 4. ***String Method***


// String length
// String charAt()
// String charCodeAt()
// String at()
// String[]
// String slice()
// String substring()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()

// 5. ***String Search Method***

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

// 6. ***JavaScript Template Strings***

// let firstName = "John";
// let lastName = "Doe";
// let text = `Welcome ${firstName}, ${lastName}!`;

// 7. ***JavaScript Numbers***

// Binarry Base 2 = 0-1
// Decimal Base 10 = 0-9
// Octal Base 8 = 0-8
// Hexadecimal Base 16 = 0-F
// let x = 123e5;    // 12300000
// let y = 123e-5;  // 0.00123

// 8. ***Javascript BigInt***

// let x = 1234567890123456789012345n;
// let y = BigInt(1234567890123456789012345)
// console.lo(y);

// 9. ***JavaScript Number Methods***

// toString()
// toExponential()
// toFixed()
// toPrecision()
// ValueOf()

// Number Object Methods

// Number.isInteger()
// Number.isSafeInteger()
// Number.parseFloat()
// Number.parseInt()

// 10. ***JavaScript Number Properties***

// EPSILON	The difference between 1 and the smallest number > 1.
// MAX_VALUE	The largest number possible in JavaScript
// MIN_VALUE	The smallest number possible in JavaScript
// MAX_SAFE_INTEGER	The maximum safe integer(253 - 1)
// MIN_SAFE_INTEGER	The minimum safe integer - (253 - 1)
// POSITIVE_INFINITY	Infinity(returned on overflow)
// NEGATIVE_INFINITY	Negative infinity(returned on overflow)
// NaN not a Number

// 11. ***Arrays***

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// 12. ***Array Method***

// Array length
// const fruits = ["Apple","Orange","Jackfruits"];
// console.log(fruits.length);

// Array toString()
// const fruits = ["Apple", "Orange", "Jackfruits"];
// console.log(fruits.toString());

// Array at()
// const fruits = ["Apple", "Orange", "Jackfruits"];
// console.log(fruits.at());

// Array join()
// const fruits = ["Apple", "Orange", "Jackfruits"];
// console.log(fruits.join(" + "));

// Array pop()
// const popMethod = ["Banana", "Orange", "Apple", "Mango"];
// console.log(popMethod.pop());

// Array push()
// const pushMethod = ["Banana", "Orange", "Apple", "Mango"];
// pushMethod.push("shamim");
// console.log(pushMethod);

// Array shift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let shift = fruits.shift();
// console.log(shift);

// Array unshift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let unshift = fruits.unshift("pineapple");
// console.log(unshift);

// Array delete()

// Array concat()
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

// Array copyWithin()
// Array flat()

// Array splice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let splice = fruits.splice(2,0, "Lemon", "Kiwi");
// console.log(fruits);

// Array toSpliced()

// Array slice()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let splice = fruits.slice(2,0, "Lemon", "Kiwi");
// console.log(fruits);

// 13 ***Javascript Sorting Array***

// Alpabetic Sort

// Array sort()

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function (a, b) {
//     return b - a;
// });
// console.log(points);

// const point = [40, 100, 1, 5, 25, 10];
// point.sort(function (a, b) {
//     return 0.5 - Math.random();
// });
// console.log(point);

// Array reverse()
// Array toSorted()
// Array toReversed()
// Sorting Objects

// Numeric Sort

// Numeric Sort
// Random Sort
// Math.min()
// Math.max()
// Home made Min()
// Home made Max()

// 14. ***Array Search Method***

// Array indexOf()
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Apple") + 1;
// console.log(position);

// Array lastIndexOf()
// const fruits = ["Apple", "Orange", "jackfruits", "Mango"];
// let position = fruits.lastIndexOf("Orange");
// console.log(position);

// // Array includes() true/ false
// const fruit = ["Apple", "Orange", "jackfruits", "Mango"];
// let includ = fruit.includes("Apple");
// console.log(includ);

// Array find(value, index, array)
// const numbers = [4, 9, 16, 25, 29];

// function myFunction(value, index, array) {
//     return value > 18;
// }
// let first = numbers.find(myFunction);
// console.log(first);

// Array findIndex()

// Array findLast()
// Array findLastIndex()

// 15. ***Array Iteration Methods***

// Array forEach(value, index, array)
// const numbers = [45, 4, 5, 6, 7];
// function myFunction(value, index, array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log("------");
// }
// numbers.forEach(myFunction);

// Array map(value, index, array)
// const maps = [45, 4, 5, 6, 7];
// function myFunction(value) {
//     return value + 2;
// }
// const newArray = maps.map(myFunction);
// console.log(newArray);

// Array flatMap()

// Array filter(value, index, array)
// const numbers = [45, 4, 5, 6, 7, 12];
// function myFunction(value) {
//     return value > 10;
// }
// const newArray = numbers.filter(myFunction);
// console.log(newArray);

// Array reduce(total, value, index, array)
// const numbers = [45, 4, 5, 6, 7, 12];
// function myFunction(total, value, index, array) {
//     console.log(total);
//     return total + value;
// }
// const newArray = numbers.reduce(myFunction);
// console.log(newArray);

// const numbers = [45, 4, 9, 16, 25];
// function myFunction(total, value, index, array) {
//     console.log(total);
//     return total + value;
// }
// const newArray = numbers.reduce(myFunction, 10);
// console.log(newArray);

// Array reduceRight(total, value, index, array)
// const numbers = [45, 4, 5, 6, 7, 12];
// function myFunction(total, value, index, array) {
//     console.log(total);
//     return total + value;
// }
// const newArray = numbers.reduceRight(myFunction);
// console.log(newArray);

// Array every(value, index, array) true/ false value return
// const numbers = [45, 4, 5, 6, 7, 12];
// function myFunction(value, index, array) {
//     return value > 2;
// }
// const newNumbers = numbers.every(myFunction);
// console.log(newNumbers);

// Array some()
// const numbers = [45, 4, 5, 6, 7, 12];
// function myFunction(value, index, array) {
//     return value < 5;
// }
// const newNumbers = numbers.some(myFunction);
// console.log(newNumbers);

// Array.from()
// const ary = Array.from("ABCDEFGH");
// console.log(ary);

// Array keys()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();
// console.log(keys);
// Array entries()
// Array with()
// Array Spread(...)

// 16 ***Array Constant***

// Array list of value, Array name not change, Box with Change
// Const Block scope
// const cars = ["Volvo", "BMW"];   // Allowed
// {
//     const cars = ["Volvo", "BMW"]; // Allowed
// }
// {
//     const cars = ["Volvo", "BMW"]; // Allowed
// }

// 17 *** Javascript Dates ***

// const date = new Date(); Constructor

// Creating Date Objects
// new Date()
// new Date(date string)

// new Date(year, month)
// new Date(year, month, day)
// new Date(year, month, day, hours)
// new Date(year, month, day, hours, minutes)
// new Date(year, month, day, hours, minutes, seconds)
// new Date(year, month, day, hours, minutes, seconds, ms)

// const dat = new Date(2024);
// console.log(dat);

// 18 *** Date Formats ***

// Javascript Date Input
// ISO Date "2015-03-25"
// Short Date "03/25/2015"
// Long Date "Mar 25 2015"
// Date Input - Parse() Dates

// 19 *** Date Get Methods ***

// getFullYear()	Get year as a four digit number(yyyy)
// getMonth()	Get month as a number(0 - 11)
// getDate()	Get day as a number(1 - 31)
// getDay()	Get weekday as a number(0 - 6)
// getHours()	Get hour(0 - 23)
// getMinutes()	Get minute(0 - 59)
// getSeconds()	Get second(0 - 59)
// getMilliseconds()	Get millisecond(0 - 999)
// getTime()	Get time(milliseconds since January 1, 1970)

// const d = new Date();
// console.log(d.getTime());