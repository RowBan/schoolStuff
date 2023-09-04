/**
 * Written by Robert Eriksson
 * array-exercise program
 */

let array = ["string on index 0", 4, "index 1 is an integer", 99, "index 2 and 3 are also integers. Where's the float?", null, 99.99];

// Remove 1 element from index 1
array.splice(1, 1);

// Add one element to the beginning of the array
array.unshift("No float here!");

// Remove last element in array
array.pop();

// Add as last element in array
array.push("99.99")

array.forEach((randomVarName) => console.log(randomVarName));
console.log("Int 4 is gone, added string on index 0, removed integer on last element and replaced it with a string.")