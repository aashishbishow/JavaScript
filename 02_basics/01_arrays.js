"use strict";

// arrays

// const myArr = [0, 1, 2, 3, 4, 5, true, "aashish"];
const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr[4]);

// javascript create shallow copies: sharing same reference

const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

// Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9)); // boolean ma return garyo
// console.log(myArr.indexOf(9)); // value doesn't exists : -1
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr); // values tei aauxa, datatype change hunxa string ma
// console.log(typeof newArr); // string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3); // splice le original array nei manipulate garxa meaning original array bata slice vako array nei hatei dinxa to range value slice le original array manipulate gardeina
console.log("C ", myArr);
console.log(myn2);