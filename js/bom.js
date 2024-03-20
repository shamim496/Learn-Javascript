// 1 *** window object ***

// let myWindow;

// const width = document.getElementById("width");
// const height = document.getElementById("height");

// width.innerHTML = "Window is inner width is: " + window.innerWidth;
// height.innerHTML = "Window inner height is: " + window.innerHeight;


// function openWindow() {
//     myWindow = window.open("https://google.com", "_self");
// }

// function closeWindow() {
//     myWindow.close();
// }


// let myWin;

// function openWin() {
//     myWin = window.open("https://google.com", "myWin", "width=500, height=500");
// }

// function closeWin() {
//     if (myWin) {
//         myWin.close();
//     }
// }

// function checkWin() {
//     let text = "";

//     if (!myWin) {
//         text = "It never been opened!";
//     } else {
//         if (myWin.closed) {
//             text = "It is closed.";
//         } else {
//             text = "It is open";
//         }
//     }
//     document.getElementById("demo").innerHTML = text;
// }



// 2 *** Javascript Bom Screen ***

// const width = document.getElementById("width");
// const height = document.getElementById("height");
// const availWidth = document.getElementById("availWidth");
// const availHeight = document.getElementById("availHeight");
// const colorDepth = document.getElementById("colorDepth");
// const pixelDepth = document.getElementById("pixelDepth");

// width.innerHTML = "Screen width: " + screen.width;
// height.innerHTML = "Screen height: " + screen.height;
// availHeight.innerHTML = "Screen availheight: " + screen.availHeight;
// colorDepth.innerHTML = "Screen colorDepth: " + screen.colorDepth;
// pixelDepth.innerHTML = "Screen pixelDepth: " + screen.pixelDepth;



// 3 *** Javascript Window Location ***

const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const path = document.getElementById("pathname");
const protocol = document.getElementById("protocol");

href.innerHTML = "href: " + location.hostname;
hostname.innerHTML = "Hostname: " + location.hostname;
path.innerHTML = "Pathname: " + location.pathname;
protocol.innerHTML = "Protocol: " + location.protocol;

// window location method

// location.href
// location.hostname
// location.pathname
// location.protocol
// location.assign()

function loadgoogle() {
    window.location.assign("https://www.google.com");
}