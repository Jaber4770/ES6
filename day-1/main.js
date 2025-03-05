// arrow function:
const numbers = [12, 34, 43, 45, 56, 506, 7];
const findMax = (numbers) => {
    return Math.max(...numbers)
}

console.log(findMax(numbers));

// arrow 2:

const heros = ["hero Alam", "bapparaj", "joshim", "maruf", "salman khan"];
const hero = (heros) => {
    let star = heros[0];
    for (let hero of heros) {
        if (star.length < hero.length)
            star = hero;
    }
    return star;
}
console.log(hero(heros));

// object destructuring:


const person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "traveling", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};

console.log(person.name);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person)
delete person.name;
console.log(person)
person.name = "Jack Sargey";
console.log(person)
Object.seal(person);
person.status = "not availalbe"
console.log(person)
person.age = 50;
console.log(person)
Object.freeze(person);
person.age = 500;
console.log(person)







