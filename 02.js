// # Arrays in JavaScript: Key Concepts

// ## 1. Definition
// An array is a collection of ordered elements (indexed starting from 0). 
// Arrays in JavaScript are reference data types, and their type is 'object'.

// ## 2. Array Indexing
// Arrays are zero-based, meaning the first element is at index 0.

// ## 3. Syntax to Declare Arrays
let string1 = ["akshay", "subhash", "ghule"];
let number1 = [1, 2, 3, 4, 5, 6];
let mixed = ["akshay", "subhash", 1, 2, 3, 4, 5, undefined, null];

console.log(string1);         // Output: ["akshay", "subhash", "ghule"]
console.log(number1);         // Output: [1, 2, 3, 4, 5, 6]
console.log(mixed);           // Output: ["akshay", "subhash", 1, 2, 3, 4, 5, undefined, null]

// Arrays are mutable (modifications affect the original array)
number1[0] = 0;
console.log(number1);         // Output: [0, 2, 3, 4, 5, 6]

// ## 4. Checking Array Type
let arr = ["aks", "hay", "ghu", "le"];
let obj = {};  // Object literal

console.log(typeof(arr));     // Output: "object"
console.log(Array.isArray(arr));  // Output: true
console.log(Array.isArray(obj));  // Output: false

// ## 5. Basic Methods
// ### push() - Adds one or more elements to the end of an array.
arr.push("software engineer");
console.log(arr);              // Output: ["aks", "hay", "ghu", "le", "software engineer"]

// ### pop() - Removes the last element from an array and returns it.
let lastElement = arr.pop();
console.log(arr);              // Output: ["aks", "hay", "ghu", "le"]
console.log(lastElement);      // Output: "software engineer"

// ### shift() - Removes the first element from an array and returns it.
let firstElement = arr.shift();
console.log(arr);              // Output: ["hay", "ghu", "le"]
console.log(firstElement);     // Output: "aks"

// ### unshift() - Adds one or more elements to the beginning of an array.
arr.unshift("akshay", "is the");
console.log(arr);              // Output: ["akshay", "is the", "hay", "ghu", "le"]

// ## 6. Array Iteration Methods
// ### forEach() - Executes a provided function once for each array element.
arr.forEach((element) => {
    console.log(element); // Output: "akshay", "is the", "hay", "ghu", "le"
});

// ### map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
const fruitLengths = arr.map((fruit) => fruit.length);
console.log(fruitLengths); // Output: [6, 8, 3, 3, 2]

// ### filter() - Creates a new array with all elements that pass the test implemented by the provided function.
const longFruits = arr.filter((fruit) => fruit.length > 3);
console.log(longFruits); // Output: ["akshay", "is the", "hay", "ghu", "le"]

// ### reduce() - Executes a reducer function on each element of the array, resulting in a single output value.
const totalLength = arr.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength); // Output: (sum of lengths)

// ## 7. Array Manipulation Methods
// ### concat() - Merges two or more arrays and returns a new array.
const vegetables = ["carrot", "potato"];
const combined = arr.concat(vegetables);
console.log(combined); // Output: combined array

// ### slice() - Returns a shallow copy of a portion of an array into a new array.
const slicedFruits = arr.slice(0, 1); // Extracts from index 0 to 1 (excluding 1)
console.log(slicedFruits); // Output: ["akshay"]

// ### splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
arr.splice(1, 1, "kiwi"); // Removes 1 element at index 1 and adds "kiwi"
console.log(arr); // Output: updated array

// ### find() - Returns the value of the first element in the array that satisfies the provided testing function.
const foundFruit = arr.find((fruit) => fruit.startsWith("k"));
console.log(foundFruit); // Output: "kiwi"

// ## 8. Cloning Arrays
// Cloning an array can be done using different methods:

let arr1 = ["ak", "sh", "ay"];

// 1. slice() method:
let arr2 = arr1.slice(0);  // Creates a shallow copy of arr1

// 2. concat() method:
let arr3 = [].concat(arr1);  // Another way to clone

// 3. Spread operator:
let arr4 = [...arr1, "is", "or", ...arr2];  // Combines arr1 and arr2 with new elements

console.log(arr1 === arr2);  // Output: false (arr2 is a clone)
console.log(arr3);            // Output: ["ak", "sh", "ay"]
console.log(arr4);            // Output: combined array

// ## 9. Const Arrays
// Arrays declared with `const` can still be modified, but you cannot reassign the whole array to a new value.
const fruitsConst = ["mango", "apple", "orange"];
fruitsConst.push("banana");  // Works fine
console.log(fruitsConst);    // Output: ["mango", "apple", "orange", "banana"]

// Attempting to reassign the entire array will result in an error
// fruitsConst = ["grapes", "pineapple"];  // Error: Assignment to constant variable.

// ## 10. Array Destructuring
const fruitsArr = ["mango", "apple", "orange", "grapes", "pineapple", "banana"];
// Destructuring syntax allows us to unpack values from arrays into variables
let [myVar1, myVar2, , myVar4, ...myRemainingArr] = fruitsArr;

console.log(myVar1);  // Output: mango
console.log(myVar2);  // Output: apple
console.log(myVar4);  // Output: grapes

// Looping through the remaining array
for (let ele of myRemainingArr) {
    console.log(ele);  // Output: pineapple, banana
}

// ## 11. Nested Destructuring
const user = {
    id: 1,
    info: {
        username: "akshay",
        email: "akshay@example.com",
    },
};
const {
    info: { username, email },
} = user; // Nested destructuring
console.log(username); // Output: "akshay"
console.log(email);    // Output: "akshay@example.com"
