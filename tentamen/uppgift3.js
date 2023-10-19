/* Skapa en funktion som tar emot en array av tal som argument och returnerar en ny array som innehåller endast de udda talen från den ursprungliga arrayen. */
"use strict";

function getOddNumbers(n) {
	let oddNumbers = n.filter((n) => n % 2 !== 0);
	console.log(oddNumbers);
}

getOddNumbers([
	1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]);

/* Borde ge "[ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]" */
