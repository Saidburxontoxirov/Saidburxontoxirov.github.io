const button = document.querySelector("#json");

button.addEventListener("click", function () {

    const Http = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
});

