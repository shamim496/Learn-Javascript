const loadData = () => {
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function () {
        const conatiner = document.getElementById("demo");
        demo.innerHTML = xhr.responseText;
    };

    // prepare request methods: GET, POST, PUT, PATCH, DELETE
    xhr.open("GET", "../data/data.txt ");

    // send request
    xhr.send();
}