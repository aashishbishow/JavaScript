"use strict";

// scopes
// let a = 10;
// const b = 20;
// var c = 30; // does works on specific blocks {}: scope

// object ko curly braces vaneko object declaration ho

// var c = 300;

let a =30;

// if (true){ // if vitra jati pani xa teslai vaninxa block scope, if bahira jati pani xa teslai vaninxa global scope. gbobal scope ma declared garko variable ko value and variable block scope le access pauxa but vice vers hudeina

//     let a = 10;
//     const b = 20;
//     // c = 30; // by default var declared hunxa
//     console.log("Inner a: ", a);
//     function num(params) {
//         // local scope function, can't be accessed in global scope
//     }
    
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// scope vitra declared variable scope bahira interact garyo vani problem hunxa as in context of loop suppose we use 4 loop using i variable teti bela variable ko value change vako karan le predicted behaviour dekhaudeina

// console.log(a);
// console.log(b);
// console.log(a); // var le scope rule follow garena


// node envirnment ma ide or editor ko through lekheko global scope ra windows global scope: browser ko console ko global scope different ho

// nested scope 
function one() {
    const username = "aashish";
    function two(){
        const website = "YouTube";
        // console.log(username);
    }
    // console.log(website); // website variable access hunnna
    
    two();
    
}

one();

// yeslainei kafi haad tak closure ni vaninxa

if(true){
    const username = "aashish";
    if (username === "aashish") {
        const website = "YouTube";
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++ interesting +++++++++++++++++


// Suppose hami sanga eauta function xa
console.log(addOne(5));

function addOne(num) { // basic function
    return num + 1;
}


// const value = addOne(5);
// console.log(value);

console.log(addTwo(5)); // decalred garnu ko sath variable ma hold garya xau. concept hoisting // variable declaration vanda gadi use garna mildeina

const addTwo = function (num) { // yo ni function nei ho but often refered as expression
    return num + 2;   
}

