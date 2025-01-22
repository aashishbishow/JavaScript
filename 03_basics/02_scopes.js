"use strict";

// scopes
// let a = 10;
// const b = 20;
// var c = 30; // does works on specific blocks {}: scope

// object ko curly braces vaneko object declaration ho

// var c = 300;

let a =30;

if (true){ // if vitra jati pani xa teslai vaninxa block scope, if bahira jati pani xa teslai vaninxa global scope. gbobal scope ma declared garko variable ko value and variable block scope le access pauxa but vice vers hudeina

    let a = 10;
    const b = 20;
    // c = 30; // by default var declared hunxa
    console.log("Inner a: ", a);
    function num(params) {
        // local scope function, can't be accessed in global scope
    }
    
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// scope vitra declared variable scope bahira interact garyo vani problem hunxa as in context of loop suppose we use 4 loop using i variable teti bela variable ko value change vako karan le predicted behaviour dekhaudeina

// console.log(a);
// console.log(b);
console.log(a); // var le scope rule follow garena


// node envirnment ma ide or editor ko through lekheko global scope ra windows global scope: browser ko console ko global scope different ho
