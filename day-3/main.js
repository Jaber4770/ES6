console.log(5 * "2");
console.log(5 - "2");

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))