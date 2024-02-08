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

// let a = new String ("Bangladesh");

// console.dir(a);



// 3 *** Javascript object Method

// const person = {
//     firstName: "Shamim",
//     lastName: "Hasan",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     };
// }

// console.log(person.fullName());

// const person = {
//     firstName: "Shamim",
//     lastName: "Hasan",
//     id: 4968,
// };

// // Adding a method to an object
// person.fullName = function () {
//     return this.firstName + " " + this.lastName;
// }

// console.log(person.fullName());

// using Bulit in methods

// const person = {
//     fname: "shamim",
//     lname: "hasan",
//     id: 4968
// };

// person.fullName = function () {
//     return (this.fname + " " + this.lname).toUpperCase();
// }

// console.log(person.fullName());



// 4 *** Javascript object Display ***

// How to Display Javascript Objects [object object]

// const person = {
//     fname: "Shamim",
//     lname: "Hasan",
//     city: "Bogura"
// };

// document.getElementById("demo").innerHTML = person.fname + ' ' + person.city;

// const person = {
//     name: "Shamim",
//     age: 30,
//     city: "Bogura"
// };

// let all = "";

// for (let x in person) {
//     all += person[x];
// };

// document.getElementById("demo").innerHTML = all;


// using Object.values()

// const person = {
//     name: "Shamim",
//     age:  30,
//     city: "Bogura"
// }

// const myArray = Object.values(person);

// Object loop for of
// for (let x of myArray) {
//     console.log(x);
// }


// using JSON.stringify()

// const person = {
//     name: "Shamim",
//     age: 30,
//     city: "Bogura"
// };

// console.log(JSON.stringify(person));

// strigify date

// const person = {
//     name: "shamim",
//     today: new Date()
// };

// let myString = JSON.stringify(person);
// console.log(myString);

// strigify function

// const person = {
//     name: "John",
//     age: function () { return 30; }
// };
// person.age = person.age.toString();

// let myString = JSON.stringify(person);
// document.getElementById("demo").innerHTML = myString;

// Strigify Array

// const arr = ["John", "Peter", "Sally", "Jane"];

// let myString = JSON.stringify(arr);
// document.getElementById("demo").innerHTML = myString;



// 5 *** Javascript Object Accessors ***

// Javascript Accessors Getters and Setters

// Javascript Getter Keywords

// const person = {
//     fname: "Shamim",
//     lname: "Hasan",
//     language: "English",
//     get lang() {
//         return this.language;
//     }
// }

// document.getElementById("demo").innerHTML = person.lang;


//     const person = {
//     fname: "Shamim",
//     lname: "Hasan",
//     language: "English",
//     set lan(lang) {
//         this.language = lang
//     }
// };

// person.lan = "bn";

// console.log(person);


// Object.define property()

// Define setters and getters

// Object.defineProperty(obj, "reset", {
    // get : function () {this.counter = 0;}
// });


// const person = {
//     fname: "Shamim",
//     lname: "Hasan",
// };


// Object.defineProperty(person, "fullName", {
//     get : function () {
//         return this.fname + " " + this.lname;
//     }
// });

// console.log(person.fullName);



// 6 *** Javascript Object Constructor ***

// function Person(first, last, age, eye) { // Constructor function
//     this.fname = first;
//     this.lname = last;
//     this.age = age;
//     this.eyes = eye;
//     this.fullName = function () {
//         return this.fname + " " + this.lname;
//     }
//  };

//  const shamim = new Person("Shamim", "Hasan", 35, "Black");
//  const hamim = new Person("Shamim", "Hasan", "35");


//  shamim.country = "Bangladesh";
//  console.log(shamim);


//  Built in Javascript Constructors

// new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object

// Math() is a global object



// 7 *** Javascript Object Prototypes ***

// Prototype inhiretance

// function Person(first, last, age, eye) {
//     this.fname = first;
//     this.lname = last;
//     this.age = age;
//     this.eyes = eye;
//     this.fullName = function () {
//         return this.fname + " " + this.lname;
//     }
// };

// const shamim = new Person("Shamim", "Hasan", 35, "Black");

// Person.prototype.country = "Bangladesh";
// console.dir(Person);

// String.prototype.doingFun = function () {
//     return 'I am Doing Fun';
// }

// const x = "";

// console.log(x.doingFun())