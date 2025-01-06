"use strict";

//Eingabedaten vom Nutzer holen
let titel_1 = prompt("Wie heißt dein Eintrag?", "Wocheneinkauf");
console.log(`"titel:", ${titel_1}`);

let titeltyp_1 = prompt("Ist das eine Einnahme oder Ausgabe?");
console.log(titeltyp_1);

let betrag_1 = prompt("Wie viel hast du dafür ausgegeben?, Betrag in Cent:");
//Beispiel 2064,56 -> 206456
console.log(betrag_1);

let datum_1 = prompt("Wann hast du das gekauft?(jjjj-mm-tt)");
console.log(datum_1);

//Gesamtbilanz berechnen
let bilanz_einnahme;
let bilanz_ausgabe;
let gesamtBilanz; 