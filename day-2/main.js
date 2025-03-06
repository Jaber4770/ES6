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



// ---------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squareArray = numbers.map(number => number * number);
console.log(squareArray);

const friends = ["rahim", "karim", "jodo", "modo"];
const newFriends = friends.map((friend, index) => {
    console.log(index, friend);
})



// ----31-4 foreach, filter, find, and differences between them

const phones = [
    { id: 1, name: "iPhone 15 Pro", color: "Black Titanium", price: 999, brand: "Apple" },
    { id: 2, name: "Samsung Galaxy S24 Ultra", color: "Titanium Gray", price: 1199, brand: "Samsung" },
    { id: 3, name: "Google Pixel 8 Pro", color: "Obsidian", price: 899, brand: "Google" },
    { id: 4, name: "OnePlus 12", color: "Eternal Green", price: 799, brand: "OnePlus" },
    { id: 5, name: "Xiaomi 14 Pro", color: "Black", price: 699, brand: "Xiaomi" },
    { id: 6, name: "Sony Xperia 1 V", color: "Frosted Black", price: 1199, brand: "Sony" },
    { id: 7, name: "Asus ROG Phone 8", color: "Phantom Black", price: 1099, brand: "Asus" },
    { id: 8, name: "Nothing Phone 2", color: "Transparent", price: 599, brand: "Nothing" },
    { id: 9, name: "Realme GT 5", color: "Pulse White", price: 549, brand: "Realme" },
    { id: 10, name: "Motorola Edge 40 Pro", color: "Nebula Blue", price: 799, brand: "Motorola" }
];

phones.forEach(phone => {
    if (phone.price >= 800) {
        console.log(phone);
    }
});

const filter = phones.filter( phone => phone.price > 1000);
console.log(filter);

phones.forEach(phone => {
    console.log(phone.name, phone.price);
});

const sony = phones.find(phone => phone.name.includes("Sony"));
console.log(sony);

console.log(phones.find(p=> p.id===4))

// ----------------------------------------------------
// claass

class products{
    constructor(name,price,brand,owner){
        this.name = name;
        this.price = price;
        this.owner = owner;
        this.brand = brand;
    }
    details(){
        console.log(`Name: ${this.name} Price: ${this.price} owner: ${this.owner} brand: ${this.brand}`);
    }
}

const iPhone = new products("iPhone", 1250, "stib jobs", "apple");
console.log(iPhone);


