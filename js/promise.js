// const status = false;

// console.log("Task 1");

// // promise Difinition
// const promise = new Promise(function(resolve, reject) { //resolve, reject anyone parameters
//     setTimeout(function () {
//         if (status) {
//             resolve("Task 2");
//         } else {
//             reject("Failed");
//         }
//     }, 2000);
// });

// // promise call
// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// console.log("Task 3");



// const paymentSuccess = true;
// const marks = 0;


// function enroll() {
//     console.log("Course enrollment is in progress");

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (paymentSuccess) {
//                 resolve();
//             }else{
//                 reject("Payment Failed");
//             }
//         }, 2000);
//     });

//     return promise;
// }


// function progress() {
//     console.log("Course on progress...");

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (marks >= 80) {
//                 resolve();
//             }else{
//                 reject("You could not get enough marks to get the certificate");
//             }
//         }, 3000);
//     });
//     return promise;
// }

// function getCertificate() {
//     console.log("Preparing your certificate");

//     const promise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Congrats! You got the certificate");
//         }, 3000);
//     });
//     return promise;
// }

// enroll()
    // .then(progress) // function body
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })