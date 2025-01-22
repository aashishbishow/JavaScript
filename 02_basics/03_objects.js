"use strict";

// Ojects in JavScripts
// We can declare objects in javascript in teo way
// 1. Literal
// 2. Constructor

// Concept => Singleton, kunei pani object constructor use garera banako xa vani singleton hunxa meaning the object is unique, tyo object tyo jasto ek matra hunxa

// Literal use garyo vani multiple instances banxa

// Object Literals

// Object.create("myObj"); // Constructor through object banako


const mySym = Symbol("key1");

const JsUser  = { // Literals thriugh object banako
    keys: "Values", 
    name: "Aashish",  // by defalult name lai string ko rup ma processgarxa 
    "full name" : "Aashish BishowKarma",
    [mySym]: "myKey1", // symbol key pair gareko only method is [] vitra symbol variable halni
    age: 23,
    location: "Lalitpur",
    email: "admin@aashishbishow.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// myArr = ["a", "i"];
// myArr[1];

// Accessing an Object
// console.log( JsUser.email); // . use garera
// console.log((JsUser["email"])); // [] brackets use garera
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser[mySym]); // symbol return garxa as  variable ko datatype
// console.log(typeof (JsUser["mySym"])); //  string return garxa
// console.log(typeof JsUser[mySym]); //  string return garxa kinaki yess vitra vako value string ho yo case ma
// most cases ma object access garda . use garinxa but on some special cases we use square brackets

JsUser.email = "aashish@chatgpt.com"; // object ko value change garna
// Object.freeze(JsUser)
// JsUser.email = "aashish@microsoft.com"; // changes propogate hudeina eroor throw garxa

// console.log(JsUser);

// javascript ma functions lai type 1 dataype jasari treat garinxa meaning we can treat functions as variables

JsUser.greeting = function(){
    console.log("Hello Js User");
}


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // backticks use garera string interpolation gareko
}


console.log(JsUser.greeting()); // ya nira greetings garda function return back aauxa ani greeting() garda function execute hunxa
console.log(JsUser.greetingTwo());
