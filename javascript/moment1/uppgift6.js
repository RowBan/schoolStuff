/**
 * Written by Robert Eriksson
 * this simply calculates your current age
 * and prints it to console
 */

let birthday = new Date("1989-04-08");
let currentDate = new Date();

// Takes a full year date as X and subtracts a full year date as Y. Eg X - Y or 2023-1989.
function getAge(x, y) {
    return x.getFullYear() - y.getFullYear();
}

console.log("Grattis! Du är nu " + getAge(currentDate, birthday) + " år gammal!");