const button = document.querySelector("#json");
const uz = document.querySelector("#uz");
const rus = document.querySelector("#rus");

uz.addEventListener("keyUp", function(event){
    console.log(event.target);
});

rus.addEventListener("keydown", function(event){
    console.log("123");
});

button.addEventListener("click", function () {

    const Http = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
});

