"use strict";

let score = "Aashish";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN: Not a Number :typeof NaN is Number
// true =>1; false => 0

// let isLoggedIn = 1 => true
// let isLoggedIn = 0 => false
// let isLoggedIn = "Aashish" => true
// let isLoggedIn = "" => false
// let isLoggedIn = null; => false
// let isLoggedIn = undefined; => false
let isLoggedIn = 1


let booleanIsloggedIn = Boolean(isLoggedIn); // is converted in boolean
console.log(booleanIsloggedIn);


let someNumber = 33;
let stringNumber = String(someNumber); // number is converted into string

console.log(stringNumber);
console.log(typeof stringNumber);
