/**
 * Written by Robert Eriksson
 * this simply prints which day
 * it is today
 */

let currentDay = new Date();
currentDay = currentDay.getDay();

function getCurrentDay(currentDay) {
    switch (currentDay) {
        case 1:
            console.log("It's monday today");
            break;
        case 2:
            console.log("It's tuesday today");
            break;
        case 3:
            console.log("It's wednesday today");
            break;
        case 4:
            console.log("It's thursday today");
            break;
        case 5:
            console.log("It's friday today\nYaay, weekend!");
            break;
        case 6:
            console.log("It's saturday today\nYaay, weekend!");
            break;
        case 0:
            console.log("It's sunday today\nYaay, weekend!");
            break;
    }
}

getCurrentDay(currentDay);