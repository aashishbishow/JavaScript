const accountId = 144553;
// can't be changes, values is locked
let accountEmail = "aashishbishow@gmail.com";
// work on the basis of scope
// changes the variable value only in scope

var accountPassword = " 12345";
// we don't use var today, doesn't work on basis of scope
// changes the variable value in all part of code where var is used


accountCity = "Lalitpur";
// we can reserve memory for variable without defining var, let const because javascript is a type safe language

let accountState;
// if we declare a variable in JavaScript without giving a value javascript will put undefined on that declared variable

// accountId =2; not allowed in const

accountEmail = "admin@aashishbishow.com";

accountPassword = "21212121";

accountCity = "Kathmandu";

console.log("accountId");
/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

