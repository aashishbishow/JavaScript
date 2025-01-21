"use strict";

const name = "aashish";
const repoCount = 50;

// console.log(name + repoCount + " Value"); => Outdated Syntax
// `` => backticks, benefits of using backticks is string interpolation: we can ccreate place holder and inject variables

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // => better and readable, modern way of writing syntax: string interpolation and faida we can do many things on the go example ${name.touppercase}


// Declaring string another way

const gameName = new String("aashish-bishow"); // we use object of javascript using new keyword
// hitesh-hc

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0, 4); // => last ko value include hudeina
console.log(newString);

const anotherString = gameName.slice(-12, 4); // staring value: negative ko conditions ma: yedi string value ko full length deko xa vani slice garni bela jati vanya xa tei ota character slice vayera print hunxa, yedi string value ko legth vanda kaam deko xa vani slice garni bela full length bata deko length jati le kaam xa tei kaam slcie vayera print hunxa

console.log(anotherString);


const newStringOne = "   aashish   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // removes whitespaces and \n newline


const url = "https://aashishbishow.com/aashish%20bishow";

console.log(url.replace('%20', '-')); // replaces the value 


console.log(url.includes('aashish'));
console.log(url.includes('sundar'));  // => can checks if a value exists or not


console.log(gameName.split('-'));
