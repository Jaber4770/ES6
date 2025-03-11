console.log(5 * "2");
console.log(5 - "2");


const container = document.getElementById('container');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showUser(data));


const showUser = (users) => {
    for (let user of users) {
        const li = document.createElement('li');
        li.innerText = user.name;
        container.appendChild(li);
    }
}

const getData = async () => {
    try {
        const request = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await request.json();
        console.log(data);
    }
    catch {
        console.log("error khaisi");
    }
}
getData();


setTimeout(() => {
    console.log("Hello, Alice!");
}, 5000);

const jokeInterval = setInterval(() => {
    console.log("Why don't scientists trust atoms? Because they make up everything!");
}, 2000);

setTimeout(() => {
    if(jokeInterval <= 10000){
        clearInterval(jokeInterval);
    }
}, 10000);

