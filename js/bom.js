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

// const href = document.getElementById("href");
// const hostname = document.getElementById("hostname");
// const path = document.getElementById("pathname");
// const protocol = document.getElementById("protocol");
// const port = document.getElementById("port");

// href.innerHTML = "href: " + location.hostname;
// hostname.innerHTML = "Hostname: " + location.hostname;
// path.innerHTML = "Pathname: " + location.pathname;
// protocol.innerHTML = "Protocol: " + location.protocol;
// port.innerHTML = "Port: " + location.port;

// window location method

// location.href
// location.hostname
// location.pathname
// location.protocol
// location.assign()

// function loadgoogle() {
//     window.location.assign("https://www.google.com");
// }



// 4 *** Javascript Window History ***

// History method

// history.back()
// history.forward()

// function goback() {
//     window.history.back();
// }

// function goforward() {
//     window.history.forward();
// }



// 5 *** Javascript Window Navigator ***

// Navigator method

// navigator.appName
// navigator.appCodeName
// navigator.platfrom

// const name = document.getElementById("appName");

// name.innerHTML = navigator.appName;



// 6 *** Javascript Popup Boxes ***

// Javascript has three kind of popup boxes: alert box, confirm box, prompt box

const confirm = document.getElementById("confirm");
const prompt = document.getElementById("prompt");

const showAlert = ()=> {
    window.alert("Hello World");
}

const showConfirm = ()=> {
    let text;

    if(window.confirm("Press a button")) {
        text = "you pressed ok";
    }else{
        text = "you pressed cancle";
    }

    confirm.innerHTML = text;
}


const showPrompt = ()=> {
    let person = window.prompt("Please enter your name", "Hasan");
    let txt;

    if(person === null || person === ""){
        txt = "user canclled the prompt";
    }else{
        txt = "Hello " + person + " !How are you";
    }
    prompt.innerHTML= txt;
}



// 7 *** Javascript Timing Event ***

// The two key methods to use with javascript

// 1 setTimeout(function, milliseconds)
// 2 setInterval(function, milliseconds)

// const timeout = document.getElementById("timeout");
// const interval = document.getElementById("interval");

// let timeInstance;
// let intervalIntance;

// setTimeout
// function startTimeout() {
//     timeInstance = setTimeout(() => {
//         timeout.innerHTML = "3s seconds over";
//     }, 1000);
// }


// function stopTimeout() {
//     clearTimeout(timeInstance);
// }


// setInterval
// function startInterval() {
//     intervalIntance = setInterval(() => {
//         interval.innerHTML = new Date().toLocaleTimeString();
//     }, 1000);
// }

// function stopInterval() {
//     clearInterval(intervalIntance);
// }



// 8 *** Javascript Cookies ***

