//  destructuring:
const person = {
    name: "jack",
    age: 11,
    job: {
        delivery: {
            tazz: false,
            bolt: true,
            glovo: true
        },
        other: "no",
    }
}

// optional chaining:
console.log(person.job.delivery.bolt);
console.log(person.job.delivery.foodpanda?.mode);
console.log(person.job?.delivery?.glovo);




const { name, age } = person;
console.log(name, age);

const array = ["dhaka", "chittagong", "sylhet"];
const [first, second, third] = array;
console.log(first, second, third);
console.log(...array);
const newPlace = ["barisal", "maymansign", "Brahmanbaria", ...array];
console.log(newPlace);

console.log(`hello
     world!`)

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));



