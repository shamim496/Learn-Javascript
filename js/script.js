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
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const d = new Date("2021-03-25");
// let month = months[d.getMonth()];
// console.log(month);

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

// 19 *** Date Set Methods ***

// setDate()	Set the day as a number(1 - 31)
// setFullYear()	Set the year(optionally month and day)
// setHours()	Set the hour(0 - 23)
// setMilliseconds()	Set the milliseconds(0 - 999)
// setMinutes()	Set the minutes(0 - 59)
// setMonth()	Set the month(0 - 11)
// setSeconds()	Set the seconds(0 - 59)
// setTime()	Set the time(milliseconds since January 1, 1970)

// let text = "";
// const today = new Date();
// const someday = new Date();

// console.log(today);
// console.log(someday);

// someday.setFullYear(2100, 1, 14);

// if (someday > today) {
//     console.log(text = "Today is before jaunary 14 2100.");
// }else{
//     console.log(text = "Today is after Jaunary 14, 2100.");
// }

// 19 *** Javascript Math Object ***

// Example
// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// Math Methods Number To Integer
// Math.round(4.5 up/4.4 down)
// Math.ceil(4.5 up/4.6 up)
// Math.floor(4.1/4.2/4.7 down)
// Math.trunc(4.5 points right cut)

// Math.sign(;)
// Math.sign(-4);
// Math.sign(0);
// Math.sign(4);

// Math.pow()
// const po =Math.pow(8, 2);
// console.log(po);

// Math.sqrt(x) returns the square root of x:
// const sqr = Math.sqrt(64);
// console.log(sqr);

// Math.abs() returns the absolute (positive) value of x:
// const ab = Math.abs(-4.7);
// console.log(ab);

// Math.sin();
// const si = Math.sin(90 * Math.PI/180);
// console.log(si);

// Math.min() and Math.max()
// const mi = Math.min(150, 20, 10, 20, 3, 9);
// console.log(mi);
// const mi = Math.max(150, 20, 10, 20, 3, 9);
// console.log(mi);

// Math.random()
// returns a random number between 0(inclusive), and 1(exclusive):

// Math.random();

// Math.log(10);

// Math.log2();
// Math.log10();

// 20 *** JavaScript Random ***

// Math.random()
// Returns a random integer form 0 to 9
// const rand = Math.random() * 10;
// console.log(rand);

// Returns a random interger from 0 to 10
// const fl = Math.floor(Math.random() * 11);
// console.log(fl);

// A proper Random funtion
// function getInterger(min, max) {
//     return Math.floor(Math.random() * max - min) + min;
// }
// const myFunction = getInterger(0, 21);
// console.log(myFunction);

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const myFunction = getRndInteger(0, 20);
// console.log(myFunction);

// 20 *** Problem Sloving Javascript ***

// Random ludu number
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max-min+1))+min;
// }
// console.log(getRndInteger(1, 6));

// // Alphabetically name
// const students = ["shamim", "hasan", "arif", "saad"];
// console.log(students.sort());

// // roll number chrome big small
// const roll_numbers = [2,3,56,1,8,9,];

// console.log(roll_numbers.sort(function (a, b) {
//     return a - b;
// }));

// // leap year
// function isleap(year) {
//     if((year % 400 ===0) || ((year % 4 === 0) && (year % 100 !== 0))) {
//         console.log(`${year} is a leap year`);
//     }else{
//         console.log(`${year} is not a leap year`);
//     }
// }

// isleap(2024);

// sentence vowels count

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence) {
//     let count = 0;
//     const letters = Array.from(sentence);

//     letters.forEach(function (value){
//         if (vowels.includes(value)) {
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countVowels("i love bangladesh"));

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence) {
//     let count = 0;
//     const letters = Array.from(sentence);

//     letters.forEach(function (value) {
//         if (vowels.includes(value)) {
//             count++;
//         }
//     });
//     return count;
// }

// console.log(countVowels("I love Bangladesh"));

//Duplicate number

// const numbers = [1,5,5,5,4,4,3,8,6,6,7,9,10,10,8,11,12];

// const duplicate = numbers.filter(function (value, index, array) {
//     return array.indexOf(value) !== index
// });

// console.log(duplicate);

// const numbers = [1, 5, 5, 5, 4, 4, 3, 8, 6, 6, 7, 9, 10, 10, 8, 11, 12];

// const duplicate = numbers.filter(function (value, index, array) {
//     return array.indexOf(value) == index
// });

// console.log(duplicate);

// 20 *** Booleans Function() ***

// Boolean(10>9); //return true
// false c value null, Nan, false, undefined, 0, empty string,


// 21 *** Comparison operators ***

// let age = 17;

// if(age >= 18) {
//     console.log ("you are adult");
// }else{
//     console.log("you are not adult");
// }

// let age = 17;

// if (age >16 && age < 18 && age == 17) {
//     console.log("you are adult");
// } else {
//     console.log("you are not adult");
// }

// Ternary Operator
// let age = 30;
// console.log(age >= 18 ? (age > 30) ? "your are adult" : "your are old" : "your are not adult");

// let age = 17;
// age = Number(age);

// if(isNaN(age)){ //checking
//     console.log("input is not a number");
// }else{
//     console.log(age < 18 ? "Too young" : "Old enough");
// }

// 22 *** Condition If else else if ***

// if
// else
// else if
// switch

// The else Statement

// if (condition) {

// }

// let age = 31;

// if (age < 18) {
//     console.log("you are young");
// }else if (age == 18) {
//     console.log("welcome adult");
// }else if (age > 18 && age < 30) {
//     console.log("you are matured");
// }else{
//     console.log("you are old");
// }

// switch statement

// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//     default:
//         text = "Looking forward to the weekend";
// }

// document.getElementById("demo").innerHTML = `Today is ${day}`;

// 23 *** Javascript For Loop ***

// For loop
// const cars = ["A", "B", "C", "D", "E", "F", "G"];

// for (i = 0; i < cars.length; i++) {
//     console.log(i);

// }
// console.log("i am done");

// let i = 10;

// for (; ; i--){
//     if (i == 5) {
//         break;
//     }else{
//         console.log(i);
//     }
// }

// Javascript for in loop
// const person = { // object loop
//     fname: "Shamim",
//     lame: "Hasan",
//     age: 25
// };

// // x porperity fname,lanme,age
// for (let x in person){
//     console.log(person[x]); //arrray sentence
// }

// const numbers = [45, 4, 9, 16, 25]; //array not used

// for (let number in numbers){
//     console.log(numbers[number]);
// }

// 24 *** Javascript For of loop iterable object ***

// iterable object Arrays, Strings, Maps, Nodelists and MutationRecord;

// let a = [1, 5, 6, 7]; for of array used

// for (let x of a) {
//     console.log(x);
// }

// 25 *** While Loop ***

// Syntax

// while (condition) {
//     // code block to be executed
// }

// let i = 0;
// let text = "";

// while (i < 10) {
//     text += "the number is" + i;
//     i++;
// }

// console.log(text);

// Do while loop
// let i = 0;
// let text = "";

// do {
//     text += "the number is" + i;
//     i++;
// } while (i < 10);

// console.log(text);

// 26 *** Break and Continue ***

// Break
// let text = "";

// for (let i = 0; i < 10; i++) {
//     if (i === 3) { break; }
//     text += "The number is " + i + "<br>";
// }
// console.log(text);

// Javascript Label
// label:
// statement

// 27 *** Javascript ilterable ***

// const person = {
//     fname: "Shamim",
//     lname: 'islam',
// }

// lterating over a set
// Create a Set map string

// const letters = new Set(["a", "b", "c"]);

// for (const x of letters) {
//     // code block to be executed
// }

// 28 *** Javascript Sets Method ***

// new Set()
// Create a Set
// const myset = new Set();
// create varibles

// Add Values to the Set
// myset.add("a");
// myset.add("b");
// myset.add("c");
// console.log(myset);

// add()
// delete ()
// has()
// forEach()
// const letters = new Set(["A", "B", "C"]);

// let text = "";
// letters.forEach(function (value) {
//     text += value;
// })
// console.log(text);

// values()
// const letter = new Set(["a", "b", "c", "d"]);

// console.log(letter.values());