// 41 *** Javascript Modules Export Import ***

// export const pi = 3.14;
// export const a = 2.9;

// const b = 3.9;
// export default b;


// 1 *** Javascript Function Definitions ***

// Function Declarations
// function name(params) {

// }



// function Expression

// const a = function (a, b) {

// }



// function () Constructor
//  not use
// const myFunction = new Function() {

// };



// function not hosting
// const a = function name(params) {

// }



// funcion Hosting

// console.log(a(4, 5));

// function a(a, b) {
//     return a * b;
// }



// Self Invoking Functions -> IIFE

// (function () {
//     console.log("I am a Shamim")
// })();



// Functions Can Be Used as Values

// function myFunction(a, b) {
//     return a * b;
// }

// let x = myFunction(4, 3);
// console.log(x);



// Function are objects

// function myFunction(a, b) {
//     return arguments.length;
// }
// console.log(myFunction(1, 3))



// Arrow function

// const x = function name(x, y) {
    // console.log("I am a Shamim")
//     return x * y;
// }

// const x = (x, y) => x * y;

// console.log(x(5, 9));


// const x = (x, y) => {
//     console.log("This is Function")
//     return x * y;
// };

// console.log(x(5, 3));


// const y = function (a, b) {
//     console.log(arguments.length);
//     return a + b;
// }

// console.log(y(23, 50));



// 2 *** Javascript Function Parameters ***

// function a(x, y) { //parameters
//     return x * y;
// }

// a(4, 3); // arguments


// default parameters

// function myFunction(x, y) {
//     if (y === undefined) {
//         y = 2;
//     }
// }

// console.log(myFunction(10))


// function a(x, y = 2) {
//     return x * y;
// }

// console.log(a(4));


// arguments Object


// function sumAll() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(sumAll(1, 123, 500, 115, 44, 88));


// arguments passed by value

// function a(x, y) {
//     x = x * 5;
//     return x * y;
// }

// let m = 5;
// let n = 6;

// console.log(a(m,n));
// console.log(m);


// object are passing by Referance

// function a(x) {
//     x.one = 7;
//     return x.one * x.two;
// }

// let m = {
//     one: 4,
//     two: 5
// };

// console.log(a(m));
// console.log(m);



// 3 *** Javascript Function Invocation ***


// invoking a javascript function

// function myFunction(a, b) {
//     return a * b;
// }
// myFunction(2, 3);

// let a = 5;

// function a() {
//     console.log("I am a function")
// }
// console.log(window.a());

// function a() {
//     console.log(this);
// }
// a();

// constructor function

// This is constructor function
// function myFunction(a, b) {
//     this.fname = a;
//     this.lanme = b;
// }

// This create a new object
// const myObj = new myFunction("shamim", "hasan");

// This will return "Shamim"
// console.log(myObj.fname);



// 4 *** Javascript Function Call ***

// function myFunction(a, b) {
//     this.fname = a;
//     this.lname = b;
// }

// // call to function

// myFunction(); // Invocation

// new myFunction(); // Invocation // constructor function

// myObject.myFunction(); // in


// const a = {
//     fname: "Shamim",
//     sleep: function () {
//         console.log(`${this.fname} is sleeping`);
//     }
// }

// console.log(a.sleep());

// function sleep () {
//     console.log('i am sleeping');
// }


// const person = {
//     fullName: function (city, country) {
//         return this.firstName + " " + this.lastName + "" + city + " " + country;
//     }
// };
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// };
// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// };

// // This will return "John Doe":
// const personAll = person.fullName.call(person1, "Dhaka", "Bangladesh");
// console.log(personAll);



// 5 *** Javascript Function Apply() Method ***

// The apply() method is similar to the call() function

// const person = {
//     fullName: function (city, country) {
//         return this.fname + " " + this.lname + " " + city + " " + country;
//     }
// }

// const person1 = {
//     fname: "Shamim",
//     lname: "Hasan"
// }

// const person2 = {
//     fname: "Asmaul",
//     lname: "akter"
// }

// console.log(person.fullName.apply(person1, ["Bogura", "Bangladesh"]));


//  Javascript Srrict mode



// 6 *** Javascript Closures ***


// function myFunction() {
//     let a = 4; //local variables
//     return a * a;
// }


// let a = 4; //global variables
// function myFunction() {
//     return a * a;
// }

// function myFunction() {
//     a = 4; //global variables
// }


// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter;
// }

// // call add() 3 times
// add();
// add();
// add();

// console.log(counter);


// Javascript Nested functions

// function add() {
//     let counter = 0;

//     function plus() {
//         counter += 1;
//     }

//     plus()

//     return counter;
// }


// function temporary() {
//     let counter = 0;

//     return function() {
//         counter += 1;
//     }
// }

// const add = temporary(); // add is function iat the end

// console.dir(add);
// add();
// console.dir(add);
// add();
// console.dir(add);
// add();
