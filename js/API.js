// 1 *** Javascript From Validation Api ***


// function validation() {
//     const inputObj = document.getElementById("id1");

//     if (inputObj.validity.rangeOverflow) {
//         inputObj.setCustomValidity("You have made a range overflow error");
//     }else if(inputObj.validity.rangUnderflow){
//         inputObj.setCustomValidity("you have range underflow error")
//     }else if(inputObj.validity.valueMissing) {
//         inputObj.setCustomValidity("you have range valueMissing error");
//     }

//     if (!inputObj.checkValidity()) {
//         document.getElementById("demo").innerHTML = inputObj.validationMessage;
//     }
// }



// 2 *** Javascript Web History Api ***

// History Object Method
// back(), forward(), go()

// function back() {
//     window.history.back();
// }

// function backTo() {
//     window.history.go(n); +
// }

// function forward() {
//     window.history.forward();
// }

// function getHistory() {
//     alert(window.history.length);
// }



// 3 *** Javascript Web Storage Api ***

// Storage method

// localStorage.setItem() // key value pair
// localStorage.getItem() // key value pair

// sessionStorage Object

// sessionStorage.setItem()
// sessionStorage.getItem()
// removeItem()
// clear()



// 4 *** Javascript Web Worker api ***

// let w;

// function startWorker() {
//     if (typeof (w) == "undefined") {
//         w = new Worker("demoWorkers.js");
//     }
//     w.onmessage = function (event) {
//         document.getElementById("result").innerHTML = event.data;
//     };
// }

// function stopWorker() {
//     w.terminate();
//     w = undefined;
// }



// 5 *** Javascript Fetch Api ***

// const display = document.getElementById("display");

// const getData = () => {
//     fetch("https://api.publicapis.org/entries")
//     .then((res) => res.text())
//     .then((data) => {
//         display.innerHTML = data;
//     })
// }



// const display = document.getElementById("display");

// async function getData () {
//     let x = await fetch("https://api.publicapis.org/entries");
//     let y = await x.json();
//     display.innerText = y;
// }



// 6 *** Javascript Web Geolocation Api ***

// Web api Geolocation method


const display = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        // navigator.geolocation.getCurrentPosition(showPosition, showError);
        navigator.geolocation.watchPosition(showPosition, showError);
    } else {
        display.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    display.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            display.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            display.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            display.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            display.innerHTML = "An unknown error occurred."
            break;
    }
}