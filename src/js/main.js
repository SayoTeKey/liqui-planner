"use strict";

//Eingabedaten vom Nutzer holen -
//Anmerkung: ein prompt liefert immer einen String zurück!!
// Datensatz 1

//Unterschied String und Number
// console.log(206456);
// console.log("206456");




let titel_1 = prompt("Wie heißt dein Eintrag?", "Gehalt");
console.log(`Titel: ${titel_1}`);

let titeltyp_1 = prompt("Ist das eine Einnahme oder Ausgabe?");
console.log(`Titeltyp: ${titeltyp_1}`);

let betrag_1 = parseInt(prompt("Betrag (in Cent)?"));
//Beispiel 2064,56 -> 206456
console.log(`Betrag: ${betrag_1} ct`);
console.log(betrag_1);


let datum_1 = prompt("Datum? (jjjj-mm-tt)");
console.log(`Datum: ${datum_1}`);

//Datensatz 2

let titel_2 = prompt("Wie heißt dein Eintrag?", "Einkauf");
console.log(`Titel: ${titel_2}`);

let titeltyp_2 = prompt("Ist das eine Einnahme oder Ausgabe?");
console.log(`Titeltyp: ${titeltyp_2}`);

let betrag_2 = parseInt(prompt("Betrag (in Cent)?"));
console.log(`Betrag: ${betrag_2} ct`);
console.log(betrag_2);


let datum_2 = prompt("Datum? (jjjj-mm-tt");
console.log(`Datum: ${datum_2}`);



//Gesamtbilanz berechnen
let bilanz_einnahme;
let bilanz_ausgabe;
//let bilanz = 206456 -5236; 
let bilanz = betrag_1 + betrag_2;
console.log(`Bilanz: ${bilanz} ct`);

let positiv = bilanz >= 0; //true
console.log(`Bilanz ist positiv: ${positiv}`);

