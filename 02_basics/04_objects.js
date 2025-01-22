"use strings";

// Object Singleton

// const tinderUser = new Object()
const tinderUser =  {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);



const regularUser = { // object nesting
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aashish",
            lastname: "BishowKarma"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstname); // ? use garera value xa xaina verify garna milxa

// optional chaining ? lagayera garni value aako context ma process natra break


// Object merging

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};
const obj4 = {5:"a", 6:"b"};
// const obj3 = {obj1, obj2}; // object vitra ovject aauxa nested problem hunxa
// const obj3 = Object.assign(obj1, obj2) // yo case ma chai obj1 target hunxa ani aru source means aruko value obj1 ma janxa
// const obj3 = Object.assign({}, obj1, obj2, obj4) // jati pani xa sabei combine hunxa ani guranted result aauxa, yo case ma empty object target hunxa ani sabei value empty object ma janxa
const obj3 = {...obj1, ...obj2} // speread operator
// console.log(obj3);


// database bata value aao condition ma
// array vitra object aauda
const users = [
    {
        id: 1,
        email: "a@gmail.com",
    },
    {
        // ..
    },
    {
        // ..
    }
]

// loop thorugh garda ya value print garda
// .map layera loop garna milxa
users[1].email;
console.log((tinderUser));

console.log(Object.keys(tinderUser)); // return data type array aauxa, abba yesma hamile loop lagauna milxa

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged')); // property check
