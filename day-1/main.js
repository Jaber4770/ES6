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
    for(let hero of heros){
        if (star.length < hero.length)
            star = hero;
    }
    return star;
}
console.log(hero(heros));