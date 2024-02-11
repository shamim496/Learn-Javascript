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