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


function moveAnimate() {
    const move = document.getElementById("animate");

    let pos = 0;

    const int = setInterval(function frame() {
        if (pos < 350) {
            pos++;
            move.style.top = pos + 'px';
            move.style.left = pos + 'px';
        }else{
            clearInterval(int);
        }
    }, 5);
}


