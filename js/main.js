// Conditionals = ***If statements*** 
// If statements are great to start with conditionals
// syntax
/*if (condition) {
   //if condition is true then run some code 
} else {
    // if condition is false then run some code 
}*/
//let soup = "chicken noodle soup!";
//let reply;
//if (soup) {
 //   reply = `Here's your order of ${soup}`;
//} 
//console.log(reply);
/* here the ${soup} is the template literal used to 
assign soup value */
// what if we don't have any soup value?

//let soup;
//let reply;
/*if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, today we're out of soup:(`;
}
console.log(reply);*/
// let's add another condition which holds a boolean
/* if the customer is banned then don't offer any 
soup even if it's there ready to go. so that's why 
we need (customerIsBanned) condition at top */
/*let customerIsBanned = true;
let soup = "chicken noodle soup";
let reply;
if (customerIsBanned) {
    reply = `No soup for you!!`
}else if (soup) {
    reply = `Here's your order of ${soup}`;
}else {
    reply = `Sorry, we're out of soup:(`;
}
console.log(reply);
*/
////////////////////////////////////////////////////////////////////
let customerIsBanned = false;
let soup = false ;
let crackers = false;
let reply;
if (customerIsBanned) {
    reply = `No soup for you!`;
} else if (soup && crackers) {
    reply = `Here's your order ${soup} & crackers`;
} else if (soup) {
    reply = `Here's your order ${soup}`;
} else {
    reply = `Sorry, we're out of soup today:(`;
}
console.log(reply);

/////////////////////////////////////////////////////////////////////

















