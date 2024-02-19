// const paymentSuccess = false;
// const marks = 80;


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


// async function course() {
//     try {
//     await enroll();
//     await progress();
//     const massage = await getCertificate();

//     console.log(massage);
//     }catch(err) {
//         console.log(err);
//     }

// }

// course();

// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })