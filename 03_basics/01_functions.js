"use strict";

// Functions
// Jo pani hamile code lekhya hunxa teslai eauta package ma encloed gardiyem,tyo package ja chahe uthayera copies lera jana sakxau ani wo kaam hamro hunxa



// hami sanga eauta tarika hunxa function jastko help le yo kaam hamile 5 times garauna sakxau i.e functions
// syntax
function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I"); // yo function ko vayo defination 
    console.log("S");
    console.log("H");
}

// sayMyName() // sayMyName function ko reference vayo vani () execute vayo

// function addTwoNumbers(number1, number2){ // function defination banauni time ma j input liye pani teslai parameters vaninxa
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2){ // function defination banauni time ma j input liye pani teslai parameters vaninxa
//     return (number1 + number2);
// }

function addTwoNumbers(number1, number2){ // function defination banauni time ma j input liye pani teslai parameters vaninxa
    let result = number1 + number2;
    // console.log("result");
    
    return result; // return pani tyo scope ma kei kaam execute hunna
    console.log("result2");
    
}


// console.log(addTwoNumbers(3,5)); // function call ko time ma jati pani input diyinxa teslai arguments vaninxa

const result = addTwoNumbers(5,3);
// console.log("Result: ", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a usename");
//         return;
        
//     }
//     return `${username} just logged in`
// }


// function loginUserMessage(username){
//     if(!username){ // undefined is a false value in js
//         console.log("please enter a usename");
//         return ;
        
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "Sam"){
    if(!username){ // undefined is a false value in js
        console.log("please enter a usename");
        return ;
        
    }
    return `${username} just logged in`
}


// const user = loginUserMessage("aashishbishow");
// console.log(user);


// console.log(loginUserMessage("aashish")); // undefined aauxa, kinaki defined gareko xaina


// In context of sopping cart jaha kati parameter aauxa thaha hunna but price add garnu parxa 

// ... yo 3ta dot lai nei rest operator vaninxa ani yo ... 3ta dot lai dpread operator vanxina dependa upon use case

// function vitra multiple params pass hunxa

function calculateCartPrice(val1, val2, ...num1){ // as an array return garxa rest operator le, matlap jati pani arguments aai raxa tyo khulla bikreta ho yani hamile la khulla ma mili raxa using rest yelai bundle gardei jun hunxa rest ma
    return num1;
}

console.log(calculateCartPrice(200, 300, 500, 600, 700));// yesko first value val1 ma gayo, second value gayo val2 ma  ani baki jati pani xa tyo gayo rest ma

// yo cart wala problem solve garna lai hami sanga rest operator hunxa


const user = {
    username: "aashishbishow",
    price: 199
}
// how to pass object in function and use

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); // type cheacking must be done
}

// handleObject(user);

// direct objetc banayaera defined function ma pass garna ni milxa

handleObject({
    username: "Sam",
    price: 399
});

// yesma hamile array ni pass garna milxa
const myNewArray = [200, 400, 100, 600];

function handleArray(anyArray){
    return anyArray[1];
}
console.log(handleArray(myNewArray));


console.log(handleArray([400, 600, 500]));
