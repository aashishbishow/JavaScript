"use strict";
const score = 400;
// console.log(score);

const balance = new Number(100); // Initially number as object
// console.log(balance);

// console.log(balance.toString().length); // convert to string and strings prototype can be used
// console.log(balance.toFixed(2)); // precison value : use specially in ecommerce websites

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(3)); // precision priority is given to decimal vanda agadiko digits, decimal paxadi ko garna lai value ra calculation ma dependency  hunu parxa 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In')); // converts hundreds into readable number using commas


//+++++++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6)); // normal roundup
console.log(Math.ceil(4.2)); // lowest value use garxa
console.log(Math.floor(4.8)); // highest value use garxa
console.log(Math.min(4, 3, 6, 8)); // lowest value on array
console.log(Math.max(4, 3, 6, 8)); // highest value on array

// Maths library: most use is math.random
console.log(Math.random()); // yesko value jaile pani 0-1 ko bich ma aaauxa
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * ((max-min) + 1)) + min);
