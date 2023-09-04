/**
 * Written by Robert Eriksson
 * calculates sum and median of
 * array with integers
 */
let arr = [];
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter integers: ", num => {
    arr = num;
    readline.close();
})


console.log(arr);