/**
 * Written by Robert Eriksson
 * prints date and time
 * depending on options given 1-3
 */

"use strict";

function printDateAndTime(option) {

    const date = new Date();
    const month = date.toLocaleDateString('default', { month: 'long' });
    const day = date.toLocaleDateString('day', { weekday: 'long' });
    const time = date.toLocaleTimeString('se-SV', { hour: '2-digit', minute: '2-digit' });

    // Switch for printing date depending on option.
    switch (option <= 3 ? option : 'default') {
        case 1:
            return console.log(time + ", " + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay());
        case 2:
            return console.log(month + " " + date.getDay() + ", " + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes());
        case 3:
            return console.log(day + " " + date.getDay() + "/" + date.getMonth() + ", kl " + time);
        default:
            return console.log("Must choose:\nOption 1: hh:mm, YYYY-MM-MM\nOption 2: Month-DD, YYYY - hh:mm\nOption 3: Day DD/M, hh:mm");
            
    }
}

printDateAndTime(1);
printDateAndTime(2);
printDateAndTime(3);