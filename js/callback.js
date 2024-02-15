// *** 1 Javascript Asnchonous ***

// Function Sequence control

function myDisplay(some) {
    document.getElementById("demo").innerHTML = some;
}

function calcultor(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = calcultor(5, 5);
myDisplay(result);