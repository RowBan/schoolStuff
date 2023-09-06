/**
 * Written by Robert Eriksson
 * returns string with the most
 * characters in it
 */
let arr = ["Örnsköldsvik", "Sundsvall", "Härnösand", "Östersund"];

function findLongString(arg1) {
    return console.log(Math.max(...(arg1.map(element => element.length))));
}

findLongString(arr);