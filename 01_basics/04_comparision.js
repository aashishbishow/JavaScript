"use strict";

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);
// console.log("02" < 1
// // not a good practise to compare two distinct data types
// );

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // values get converted, conversion problem aauxa because null is converted into 0
console.log(null <= 0);
// The reasonis that an equality check == comparision >< >= <= works differently
// Comparision convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// JavaScript ma comparision and equality check alag alag tarika le kaam garxa

// equality == ma datatype check vayera value false vayo vani comparision ma datatype number ma convert vayera compare vayo
// === strict check: value matra check gardein but also datatype pani check garxa

console.log("2" === 2);


