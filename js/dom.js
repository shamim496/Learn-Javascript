// DOM: Document Objct Model

//  1 *** Javascript Html Dom Methods ***


// const p = document.getElementById("demo");

// p.innerHTML = "Test 0";



// 2 *** Javascript Html Dom Document ***


// * Finding HTML Element

// document.getElementById(id);
// document.getElementsByTagName(name);
// document.getElementsByClassName(name);

// * Changing HTML Elements

// element.innerHTML = new html content
// element.attribute = new value
// element.style.property = new style

// * method
// Element.setAttribute(attribute, value)



// 3 *** Javascript HTML Dom Element ***

// Finding HTML Elements By Tagname
// const x = document.getElementsByTagName("p");

// Finding HTML Elements By class name
// const x = document.getElementsByClassName("intro");

// Finding HTML Elements By CSS Selectors
// const x = document.querySelectorAll("");

// Finding HTML Elements By HTML Object Collections


// document.anchors
// document.body
// document.documentElement
// document.embeds
// document.forms
// document.head
// document.images
// document.links
// document.scripts
// document.title

// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length; i++) {
//     text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;



// 6 *** Javascript Dom Elements ***

// Changing the value of an Attribute


// const element = document.getElementById("myImage");

// element.src = "test.jpg";

// const date = document.getElementById("demo");

// date.innerHTML = `Today's date is ${Date()}`;



// 7 *** Javascript Dom Froms ***

// Javascript From Validation

// function ValidationFrom() {
//     const from = document.forms["myForm"];
//     const value = from['fname'].value;
//     if (value === '') {
//         alert("Type Your name");
//         return false;
//     }
// }


// function myFunction() {
//     let x = document.getElementById("num").value;
//     console.log(value);

//     let text;

//     if (isNaN(x) || x < 1 || x > 10) {
//         text = "Input not valid";
//     }else{
//         text = "Input ok";
//     }
//     document.getElementById("demo").innerHTML = text;
// }



// 8 *** Javascript HTML DOM Changing CSS


// const p = document.querySelector("#demo");

// p.style.color = "red";
// p.style.fontSize = "20px";


// function myStyle() {
//     const p = document.querySelector("#demo");

//     p.style.color = "red";
//     p.style.fontSize = "20px";
// }



// 9 *** Javascript Dom Animations ***

// function myMove() {
//     const move = document.getElementById("animate");

//     let pos = 0;

//     const int = setInterval(frame, 5);

//     function frame() {
//         if (pos < 350) {
//             pos++;
//             animate.style.top = pos + 'px';
//             animate.style.left = pos + 'px';
//         }else{
//             clearInterval(int);
//         }
//     }
// }


// function moveAnimate() {
//     const move = document.getElementById("animate");

//     let pos = 0;

//     const int = setInterval(function frame() {
//         if (pos < 350) {
//             pos++;
//             move.style.top = pos + 'px';
//             move.style.left = pos + 'px';
//         }else{
//             clearInterval(int);
//         }
//     }, 5);
// }



// 10 *** Javascript Dom Events ***

// function changeText() {
//     const title = document.querySelector('#title');
//     title.innerHTML = "Hello world";
// }

// function myFunction() {
//     const btn = document.querySelector("#demo");
//     btn.style.color = "red";
// }



// 11 *** Javascript Event Listener ***

// function myFunction() {
//     console.log("Hello World");
// }

// const button = document.getElementById("btn");

// button.addEventListener("click", myFunction)



// let p1 = 5;
// let p2 = 7;

// const result = document.getElementById("btn");

// result.addEventListener("click", function () {
//     myFunction(p1, p2);
// });


// function myFunction(a, b) {
//     document.getElementById("demo").innerHTML = a * b;
// }


// Bubbling Mode
// function myFunction(text) {
//     console.log(text);
// }

// const button = document.getElementById("btn");
// const container = document.getElementById("container");

// button.addEventListener("click", function () {
//     myFunction("Hello World");
// });

// container.addEventListener("click", function() {
//     myFunction("Hello Div");
// });


// Capturing Mode
// function myFunction(text) {
//     console.log(text);
// }

// const button = document.getElementById("btn");
// const container = document.getElementById("container");

// button.addEventListener("click", function () {
//     myFunction("Hello World");
// }, true);

// container.addEventListener("click", function () {
//     myFunction("Hello Div");
// }, true);


// Javascript removeEventListener()

// document.getElementById("container").addEventListener("mousemove", myFunction);

// function myFunction() {
//     document.getElementById("demo").innerHTML = Math.random();
// };

// function removeHandler() {
//     document.getElementById("container").removeEventListener("mousemove", myFunction);
// }

document.getElementById("container").addEventListener("mousemove", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
}

const button = document.getElementById("btn");

button.addEventListener("click", function() {
    document.getElementById("container").removeEventListener("mousemove", myFunction);
});
