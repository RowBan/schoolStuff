/**
Skapa en enkel kalkylator som kan utföra fyra grundläggande matematiska operationer: addition, subtraktion, multiplikation och division. Kalkylatorn ska kunna hantera två heltal och en operator som anges.

Skapa en funktion calculate som tar tre argument: num1 (det första talet), num2 (det andra talet) och operator (en sträng som representerar operatorn: "+", "-", "*", eller "/").

Inuti funktionen, använd en selektion (t.ex. en switch-sats) för att avgöra vilken operation som ska utföras beroende på värdet av operator.

Utför den valda operationen skriv ut resultatet till skärmen.

Om felaktigt val angetts för räknesätt eller om de två talen ej är av typen heltal - ge ett felmeddelande.

Anropa funktionen för att visa samtliga av de fyra räknesätten.

Förväntade resultat:

1, 2, "+" -> 3

3, 1, "-" -> 2

4, 2, "*" -> 8

4, 2, "/" -> 2

x, 2, "/" -> Felaktig inmatning
 */

"use strict";

function calculate(num1, num2, operator) {
	if (
		Number.isInteger(num1) &&
		Number.isInteger(num2) &&
		typeof operator === "string"
	) {
		switch (operator) {
			case "+":
				return num1 + num2;
			case "-":
				return num1 - num2;
			case "/":
				return num1 / num2;
			case "*":
				return num1 * num2;
		}
	}
	return console.log(
		"Error: You must chose 2 integers and an operator (+, -, /, *)"
	);
}

console.log(calculate(9, 9, "+"));
console.log(calculate(9, 9, "-"));
console.log(calculate(9, 9, "/"));
console.log(calculate(9, 9, "*"));
console.log(calculate("x", 9, "+"));
