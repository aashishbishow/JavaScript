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


console.log(loginUserMessage("aashish")); // undefined aauxa, kinaki defined gareko xaina
