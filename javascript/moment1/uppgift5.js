/**
 * Written by Robert Eriksson
 * this converts any given number
 * into hours and minutes
 */

const NUMBER_DIVISION = 60;
let number = 196;

function timeConvert(number, dividend) {
    let hours = Math.floor(number / dividend);
    let minutes = number % dividend;
    return console.log(hours + " hour(s) and " + minutes + " minute(s)");
}

timeConvert(number, NUMBER_DIVISION);