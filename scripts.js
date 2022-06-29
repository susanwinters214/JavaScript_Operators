// Exercise 1

let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;

console.log(add);       // returns 24
console.log(minus);     // returns 16
console.log(multiply);  // returns 80
console.log(dividing);  // returns 5

// Exercise 2 // changed to capital A since small a is used in above exercise
let A = 11; 
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

console.log(A + str);         // returns 1111
console.log(A + str2);        // returns 11eleven
console.log(A + isPresent);   // returns 12
console.log(A + firstName);   // returns 11Jackie
console.log(A + lastName);    // returns 11Chan


// Exercise 3
let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

console.log(d == str3);         // returns true
console.log(d === str3);        // returns false
console.log(!isPresent2);       // returns true
console.log("eleven" == str4 && d >= str3); // returns false
console.log((!isPresent2 || isPresent2));   // returns true
console.log(0 == false);        // returns true
console.log(0 === false);       // returns false
console.log(0 != false);        // returns false
console.log(0 !== false);       // returns true
