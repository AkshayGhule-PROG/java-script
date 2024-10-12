// TYPES OF KEYWORDS TO DECLARE VARIABLES
// 1: VAR // Old method with some drawbacks like hoisting issues and global scope leakage
// 2: LET // New keyword with block-scoping, prevents re-declaration
// 3: CONST // Keyword to declare constant variables that cannot be reassigned

let name = "akshay";
let s1 = "akshay";
let s2 = "ghule";
var num = 200;
const pi = 3.14;

console.log(s1 + s2); // Output: akshayghule

// Rules to declare variables
// 1: A variable should not start with a number or special character, and no spaces between words.
// 2: Variables are case-sensitive (e.g., 'Name' and 'name' are different).

// All about strings   
// strings in java script are not mutaible so there metho can also dnt change it completly
// Strings are zero-based indexed
// Template literals – Using backticks (`) for dynamic strings.
// They can be represented using "", '', or `` (backticks for template literals)

// String concatenation
console.log(`${s1} ${s2}`); // Output using template literals: akshay ghule

// Premetives Data types in JavaScript
// 1: Number
// 2: String
// 3: Undefined (a variable declared but not assigned a value)
// 4: Null (an explicit empty value)
// 5: BigInt (for large integers beyond the safe limit of Number type)
// 6: Symbol (used to create unique identifiers)
// 7: Boolean (true/false)

// Boolean and comparison operators
// Note: == checks value equality but not type; === checks both value and type equality

let x = 5;
let y = '5';

console.log(x == y); // true (value comparison)
console.log(x === y); // false (strict type and value comparison)

console.log(x != y); // false (value comparison)
console.log(x !== y); // true (strict comparison)

// Truthy and Falsy values
// Falsy values in JavaScript: 0, "", null, undefined, NaN, and false
// Truthy values: All values that are not falsy

let a = 0;
let b = "Hello";

console.log(Boolean(a)); // false
console.log(Boolean(b)); // true

// Additional point: Hoisting
// Variables declared with var are hoisted to the top of their scope, but not initialized.
// let and const are also hoisted but cannot be accessed before their declaration (temporal dead zone).

console.log(num2); // undefined (hoisted)
var num2 = 10;

try {
    console.log(num3); // ReferenceError (cannot access before initialization)
    let num3 = 20;
} catch (error) {
    console.log(error);
}

// Ternary Operator
// Syntax: condition ? expressionIfTrue : expressionIfFalse
let age = 20;
let isAdult = (age >= 18) ? "Adult" : "Not an Adult";
console.log(isAdult); // Output: Adult

// Loops in JavaScript

// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}

// 2. while loop
let count = 0;
while (count < 3) {
    console.log(count); // Output: 0 1 2
    count++;
}

// 3. do-while loop
let numLoop = 0;
do {
    console.log(numLoop); // Output: 0 1 2
    numLoop++;
} while (numLoop < 3);

// 4. for...of loop (used for iterating over arrays)
let array = ['a', 'b', 'c'];
for (let element of array) {
    console.log(element); // Output: a b c
}

// 5. for...in loop (used for iterating over object properties)
let person = { name: "Akshay", age: 20 };
for (let key in person) {
    console.log(key, person[key]); // Output: name Akshay, age 20
}

// types of opreator :– Arithmetic, comparison, logical, assignment.

// // some basic methods 
// 1:String methods – split(), join(), substring(), replace(), charAt().
// 2:Number methods – parseInt(), parseFloat(), toFixed().


// Implicit Type Coercion:

// Example 1: Coercion with + operator (converts non-string types to strings)
let n = 10;
let str = "20";
console.log(n + str); // Output: "1020"

// Example 2: Coercion with == (compares values after converting types)
let x1 = "5";
let x2 = 5;
console.log(x1 == x2); // true (string is coerced to number)

// Example 3: Boolean Coercion
let emptyString = "";
let nonEmptyString = "Hello";
console.log(Boolean(emptyString)); // false (falsy value)
console.log(Boolean(nonEmptyString)); // true (truthy value)