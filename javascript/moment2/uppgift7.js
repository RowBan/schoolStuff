/**
 * Written by Robert Eriksson
 * uses multiplication table function
 * in a loop to print multiple tables
 */

"use strict";

function getMultiplicationTable(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(i + " * " + num + " = " + i * num);
    }
}

for (let i = 0; i <= 10; i++) {
    getMultiplicationTable(i);
}