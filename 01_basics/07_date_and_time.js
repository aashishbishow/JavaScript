"use strict";

// Date and Time

let myDate = new Date(); // Date Object Initilizator
console.log(myDate); // 2025-01-21T18:58:07.086Z
console.log(myDate.toString()); // Tue Jan 21 2025 18:58:07 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue Jan 21 2025
console.log(myDate.toISOString()); // 2025-01-21T18:58:07.086Z
console.log(myDate.toJSON()); // 2025-01-21T18:58:07.086Z
console.log(myDate.toLocaleDateString()); // 1/21/2025
console.log(myDate.toLocaleString());  // 1/21/2025, 6:58:07 PM
console.log(myDate.toLocaleTimeString());  // 6:58:07 PM

console.log(typeof myDate); // Object


let myCreatedDate =  new Date(2023, 0, 23); // month zero bata suru hunxa js ma
console.log(myCreatedDate.toDateString());

let myCreatedDate1 =  new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString());


let myCreatedDate3 = new Date("2023-01-24");
console.log(myCreatedDate3.toDateString());
console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("11-26-2001");
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate4.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()} and the time is `

newDate.toLocaleString('default', {
    weekday:"long",
    timeZone: 'GMT'
}) // customizing toLocaleString