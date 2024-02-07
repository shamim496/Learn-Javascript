// Javascript object Learn


// 1 ***Object Definitions ***

// Javascript Primitives data types

// String, number, boolean, null, undefined

// const person = {    //Object literal
//     name: "Shamim",
//     age: 35,
//     getName: function () {
//         return "sumit"
//     }
// };



// 2 *** Javascript object properties

// const Person = {
//     name: "Shamim",
//     age: 35
// };

// Person.country = "Bangladesh"; // object add
// delete Person.age; // object delete
// console.log(Person);

// const Person = {
//     name: "Shamim",
//     age: 35
// };

// // Same to use
// console.log(Person.age)  // Same to use access
// console.log(Person['age']); //Same to use access

// Javascript object for in loop

// const Person = {
//     fname: " Shamim",
//     lname: " Hasan",
//     age: 35
// };

// let txt = '';

// for(let x in Person) {
//     txt += Person [x];
// }

// console.log(txt);

// Nested Object

// const myObj = {
//     name: "Shamim",
//     age: 20,
//     cars: {
//         car1: "Ford",
//         car2: "BMW",
//         car3: "Fiat"
//     }
// }

// Nested Arrays and Objects


// const myObj = {
//     name: "Shamim",
//     age: 20,
//     cars: [
//         {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
//         {name: "BMW", models: ["320", "x3", "xs"]}
//     ]
// }

// for (let i in myObj.cars) {
//     x += "<h1>" + myObj.cars[i].name + "</h1>";
//     for (let j in myObj.cars[i].models) {
//         x += myObj.cars[i].models[j];
//     }
// }

// Property Attibutes is it readable, is it writable


// prototype properties

// let a = "Bangladesh";

// console.dir(a);