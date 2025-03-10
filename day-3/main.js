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
