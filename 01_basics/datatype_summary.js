"use strict";
/*
Categorization of Datatype in Javascript
Categorization of datatype in javascript is done on the basic of how a data is stored and accessed in/from memory: Call by Value and Call by reference


Types
#.Primitive Data Type: Call by Value: jab pana copy garinxa reference garideina but orginal variable bata copy garera garinxa, changes gariyo vani copy variable ma change hunxa na ki original variable ma change hunxa

1.String
2.Number
3.Boolean: true or false
4.Null: empty not 0 or empty string
5.Undefiend: variable and memory space is declared but value isnot defined
6.Symbol: kunei pani value lai unique banauna use garinxa
7.BigInt: kunei pani scientific value or large value jun number ma cover hudeina bitint ma use hunxa

# Non Primitive DataType: Call by Reference: yesto value jun chai memory ma reference garna sakinxa and accessed using a reference ani reference ligera  value change garda original value pani change hunxa:

1.Array
2.Objects
3.Functions

// JavaScript is dynamically type language
// const variable = value;
// const scoreValue = 100.3; decimal ho ya normal number mei aauxa tyo variable ko datatype ko category
// const isLoggedIn = false;
// const outside Temp = null;
let userEmail; automatically undefined hunxa datatype

let userPass = undefined manually undefined vanera datatype batauna pani milxa

// const id = Symbol('123);
// const anotherId = Symbol ('123); value same diye pani dutei variable ko value unique hunxa
*/

const id = Symbol('123');
const anotherId = Symbol ('123');
const outsideTemp = null;

console.log(id);
console.log(anotherId);

console.log(id === anotherId); // strict check => false

// const bigNumber = 316727651256715281858n;
// console.log(typeof bigNumber);


// Reference Type


// Array
const heros = ["shaktiman", "naagraj", "doga"];

//Object
{
    name: "xyz";
    age: 23
}

// Object in declared variable
//curly braces ma huni jati objects, ra yeslai eauta variable ma assign garna ni milxa
let myObj = {
    name: "aashish", // yedi variable ma assign xaina vani curly braces vitra key value pair ma ; use hunxa natra , use hunxa
    age: 22
}
// Function
// function without storing in a variable
function hello(){ // function name is mandatory
    console.log("Hello, Function!");
    
}

// Function in declared variable
const myFunction = function(){
    console.log("Hello, World!");
    
}

console.log(typeof bigNumber); // bigNumber declared nei xaina code ma so undefined aayo auto declared vayera without any value
console.log(typeof myFunction);
console.log(typeof hello); // function typeof garda function nei aauxa but yeslai hamile object function vanxau
console.log(typeof outsideTemp);  // null is treated as object in javascript tei vayera type of check garda object aauxa

console.log(typeof heros);
console.log(typeof myObj);

// Jati pani non-primitive data type hunxa, tesko return type object nei aauxa typeof check garda
// Jati pani non-primitive type hunxa tesko actually datatype or return type function nei aauxa javascript ma, function return type chei  object function vaninxa

// Reference link https:262.ecma-international.org/5.1/#sec-11.4.3