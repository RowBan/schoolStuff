/**
 * Written by Robert Eriksson
 * This simply checks the time and
 * prints if it's morning, afternoon or night
 */

let currentTime = new Date();

// Checks the time of the day, if not between 6 & 12 or 13 & 17 it assumes nighttime.
function checkTime(hours, minutes, seconds) {
    if (hours >= 6 && hours <= 12) {
        return console.log("Current time is: " + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + "\nIt is morning.");
    }
    else if (hours >= 13 && hours <= 17) {
        return console.log("Current time is: " + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + "\nIt is afternoon.");
    }
    else {
        return console.log("Current time is: " + currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds() + "\nIt is night.");
    }
}
checkTime(currentTime.getHours());