/* Skapa en funktion som tar ett datum i formatet "yyyy-mm-dd" som argument och returnerar en sträng som representerar veckodagen på svenska för det datumet.
Använd Date-objektet för att utföra detta.

Exempel:

getWeekday("2023-10-17"); */ // returnerar "Tisdag".

"use strict";

function getDay(inputDate) {
	const date = new Date(inputDate);
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	return console.log(days[date.getDay()]);
}

getDay("2020-01-01");
