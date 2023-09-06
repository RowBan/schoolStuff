/**
 * Written by Robert Eriksson
 * returns string with the most
 * characters in it
 */
let arr = ["Örnsköldsvik", "Sundsvall", "Härnösand", "Östersund"];

function findLongString(arg1) {

    // Determin length of largest string
    longestString = Math.max(...(arg1.map(element => element.length)));

    // Compare largest string with all strings and print it
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i].length >= longestString) {
            return console.log(arg1[i]);
        }
    }
}

// Call function with array as argument
findLongString(arr);