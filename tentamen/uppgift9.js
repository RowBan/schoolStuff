/* Skriv ett program i JavaScript som skriver ut nedanstående mönster med asterisker (*) till konsollen genom att använda en eller flera loopar.
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 * */
"use strict";

function asterisks() {
	for (let i = 1; i <= 5; i++) {
		// Loopa 1 - 5.

		console.log("*".repeat(i)); // Printa "*" och upprepa för vilken iteration man är på. Console.log breaklinar by default.
	}

	for (let i = 4; i >= 1; i--) {
		// Loopa 4-1, så länge i är mindre än 4, subtrahera i med 1.

		console.log("*".repeat(i)); // Repetera * för vilken iteration i är på
	}
}

asterisks();
