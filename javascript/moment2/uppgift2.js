/**
 * Written by Robert Eriksson
 * a function that displays the
 * multiplication table of a given number
 * up to the number of 10.
 */
"use strict";

function getMultiplicationTable(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(i + " * " + num + " = " + i * num);
    }
}

getMultiplicationTable(8)