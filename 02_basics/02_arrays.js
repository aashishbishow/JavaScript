"use strict";

const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["batman", "superman", "flash"];

// marvel_heros.push(dc_heros); // array ko vitra array aauxa, js ma array le kunei pani type ko entry data lidinxa

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // array vitra ko array nikalxa using this

// let allHeros = marvel_heros.concat(dc_heros); // returns naya array adding elements into original array to with another array concatinated 
// console.log(allHeros);


// Spread Operator

const all_new_heros = [...marvel_heros, ...dc_heros]; // spread vayera add vayo plus concat ma limitation hunxa eautei array add agrni, yesma multipla array add garna milyo 
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];

const real_another_array = another_array.flat(Infinity); // nested array lai eautei array ma dinxa

console.log("U ", real_another_array);



/* kaile kai kasto hunxa vani data scraping gareko bela kunei pani format ma aauna sakxa nodelist, object, string aayo vani yo use garna milxa array chaiyeko situation ma */

console.log(Array.isArray("Aashish")); // fasle return garxa kinaki string ho
console.log(Array.from("Aashish")); // array ma convert gardinxa

console.log(Array.from({name: "Aashish"})); // empty array return garxa kinaki yeslai directly convert garna sakena tesai karan we need to explicitly define k ko basis ma convert gerni

console.log(Array.from(Object.entries({name: "Aashish"}))); // entries ko basis ma convert garyo
console.log(Array.from(Object.values({name: "Aashish"}))); // valuies ko basis ma convert garyo


let score1 = 100;
let score2 = 200;
let score3 = 300;

// multiple variables ko values lai array ma convert garna

console.log(Array.of(score1,score2,score3)); // returns a new array of set of variable or any
