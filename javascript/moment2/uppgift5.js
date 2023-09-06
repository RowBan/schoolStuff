/**
 * Written by Robert Eriksson
 * calculates sum and median of
 * array with integers
 */

function mathStuff() {
    let arr = [51, 67, -33, 5, 1, 87, 900, 2, -3, -363, 18];
    let sum = 0;
    let median = 0;

    for (i = 0; i < arr.length; i++) {
        sum += arr[i]; // The same as sum = sum + arr[i]
    }
    median = sum / arr.length;
    console.log("Totalsumma: " + sum + "\n" + "Medelvärde: " + median);
}

mathStuff();