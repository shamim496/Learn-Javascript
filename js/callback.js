// *** 1 Javascript Asnchonous Callback ***

// Function Sequence control

// function myDisplay(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function calcultor(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let result = calcultor(5, 5);
// myDisplay(result);

// same here code

// function myDisplay(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function calcultor(num1, num2) {
//     let sum = num1 + num2;
//     myDisplay(sum);
// }

// calcultor(5, 5);


// callback function

// function display(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function calcultor(num1, num2, callback) {
//     let sum = num1 + num2;
//     if (callback) callback(sum);
// }

// calcultor(5, 5, display);


// function calcultor(num1, num2, callback) {
//     let sum = num1 + num2;
//     if (callback) callback(sum);
// }

// calcultor(5, 20, function (result) {
//   document.getElementById("demo").innerHTML = result;
// });



// 2 *** Javascript Asychronous ***

// setTimeout(); //
// setInterval();

// console.log("Line 1 code");

// setTimeout(function() {
//     console.log("line 2 code");
// }, 10000);

// console.log("Line 3 code");


// setInterval()
// console.log("Line 1 code");

// setInterval(function() {
//     console.log("line 2 code");
// }, 2000);

// console.log("Line 3 code");



// 3 *** Javascript Asynchrounos Callback Pattern ***

// const paymentSuccess = true;
// const marks = 90;

// function enroll(pay) {
//     console.log("Course enrollment is in progress");

//     setTimeout(function () {
//         if(paymentSuccess) {
//             pay();
//         }else {
//             console.log("Payment failed");
//         }
//     }, 2000);
// }


// function progress(result) {
//     console.log("Course on progress....");

//     setTimeout(function () {
//         if (marks >= 80) {
//             result();
//         }else{
//             console.log("you could not get enpugh marks to get the certificate");
//         }
//     },3000);
// }

// function getCertificate() {
//     console.log("perparing your certificate");

//     setTimeout(function () {
//         console.log("Congration Certificate");
//     },1000);
// }

// enroll(function () {
//     progress(getCertificate);
// });



// 4 *** Javascript Async Promises ***

// const paymentSuccess = true;
// const marks = 90;

// function enroll(pay) {
//     console.log("Course enrollment is in progress");

//     setTimeout(function () {
//         if(paymentSuccess) {
//             pay();
//         }else {
//             console.log("Payment failed");
//         }
//     }, 2000);
// }


// function progress(result) {
//     console.log("Course on progress....");

//     setTimeout(function () {
//         if (marks >= 80) {
//             result();
//         }else{
//             console.log("you could not get enpugh marks to get the certificate");
//         }
//     },3000);
// }

// function getCertificate() {
//     console.log("perparing your certificate");

//     setTimeout(function () {
//         console.log("Congration Certificate");
//     },1000);
// }

// enroll(function () {
//     progress(function () {
//         C(function () {
//             D(function () {
//                 E(function () {
//                     F(function () { // Callback hell

//                     });
//                 });
//             });
//         });
//     });
// });