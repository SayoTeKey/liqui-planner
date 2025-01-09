"use strict";
//Unterschied String und Number
// console.log(206456);
// console.log("206456");

//Gesamtbilanz anlegen (Codeumbau -> bessere optische Strukturierung)
let bilanz_einnahme = 0,
    bilanz_ausgabe = 0,
    bilanz = 0;
//let bilanz = 206456 -5236; 


//Umbau mit Funktionen
// anonyme Funktion erstellen //zusammenfassende Schreibweise zur Deklaration von Variablen
let titel,
    typ,
    betrag,
    datum;


//Eingabedaten vom Nutzer holen ->
//Anmerkung: ein prompt liefert immer einen String zurück!!

//Umbau mit Funktionen
const eintragErfassen = function () {
    titel = prompt("Wie heißt dein Eintrag?", "Gehalt");
    typ = prompt("Ist das eine Einnahme oder Ausgabe?");
    betrag = parseInt(prompt("Betrag (in Cent)?"));
    datum = prompt("Datum? (jjjj-mm-tt)");
};

//eintragErfassen();


// Datensatz 1
// -->Codeblock ist durch Funktion ersetzt
// let titel_1 = prompt("Wie heißt dein Eintrag?", "Gehalt");
// let titeltyp_1 = prompt("Ist das eine Einnahme oder Ausgabe?");
// let betrag_1 = parseInt(prompt("Betrag (in Cent)?"));
// //Beispiel 2064,56 -> 206456
// let datum_1 = prompt("Datum? (jjjj-mm-tt)");

// console.log(`Titel: ${titel_1}
//     Titeltyp: ${titeltyp_1}
//     Betrag: ${betrag_1} ct
//     Datum: ${datum_1}`
// );

//Code an neue Variablen angepasst
// console.log(`Titel: ${titel}
//     Titeltyp: ${typ}
//     Betrag: ${betrag} ct
//     Datum: ${datum}`
// );

//Umbau mit Funktionen
const eintragAusgeben = function (titel, typ, betrag, datum) {
    console.log(`Titel: ${titel}
Titeltyp: ${typ}
Betrag: ${betrag} ct
Datum: ${datum}`
    );
};

eintragAusgeben(titel, typ, betrag, datum);

// -->Codeblock ist durch Funktion ersetzt
// if (titeltyp_1 === "Einnahme") {
//     bilanz_einnahme += betrag_1;
//     bilanz += betrag_1;
// } else if (titeltyp_1 === "Ausgabe") {
//     bilanz_ausgabe += betrag_1;
//     bilanz = bilanz - betrag_1;
// } else {
//     console.log(`Der Typ "${titeltyp_1}" ist nicht bekannt.`);
// }

// Umbau mit Funktion
const eintragMitGesamtBilanzVerrechnen = function (typ, betrag) {
    if (typ === "Einnahme") {
        bilanz_einnahme += betrag;
        bilanz += betrag;
    } else if (typ === "Ausgabe") {
        bilanz_ausgabe += betrag;
        bilanz = bilanz - betrag;
    } else {
        console.log(`Der Typ "${typ}" ist nicht bekannt.`);
    }
};

eintragMitGesamtBilanzVerrechnen(typ, betrag);

// //Datensatz 2
// -->Codeblock ist durch Funktion ersetzt
// let titel_2 = prompt("Wie heißt dein Eintrag?", "Einkauf");
// let titeltyp_2 = prompt("Ist das eine Einnahme oder Ausgabe?");
// let betrag_2 = parseInt(prompt("Betrag (in Cent)?"));
// let datum_2 = prompt("Datum? (jjjj-mm-tt");

// console.log(`Titel: ${titel_2}
//     Titeltyp: ${titeltyp_2}
//     Betrag: ${betrag_2} ct
//     Datum: ${datum_2}`
// );

// if (titeltyp_2 === "Einnahme") {
//     bilanz_einnahme += betrag_2;
//     bilanz += betrag_2;
// } else if (titeltyp_2 === "Ausgabe") {
//     bilanz_ausgabe += betrag_2;
//     bilanz = bilanz - betrag_2;
// } else {
//     console.log(`Der Typ "${titeltyp_2}" ist nicht bekannt.`);
// }

//Gesamtbilanz ausgeben

// -->Codeblock ist durch Funktion ersetzt
// let positiv = bilanz >= 0; //true
// console.log(`Einnahmen: ${bilanz_einnahme} ct
//     Ausgaben: ${bilanz_ausgabe} ct
//     Bilanz: ${bilanz} ct
//     Bilanz ist positiv: ${positiv}`);

// Umbau mit Funktion
const gesamtBilanzAusgeben = function (bilanz_einnahme, bilanz_ausgabe, bilanz) {
    console.log(`Einnahmen: ${bilanz_einnahme} ct
Ausgaben: ${bilanz_ausgabe} ct
Bilanz: ${bilanz} ct
Bilanz ist positiv: ${bilanz >= 0}`);
};

gesamtBilanzAusgeben(bilanz_einnahme, bilanz_ausgabe, bilanz);


//alle Funktionen mit einer Funktion aufrufen 
const eintragHinzufuegen = function(){
    eintragErfassen();
    eintragAusgeben(titel, typ, betrag, datum);
    eintragMitGesamtBilanzVerrechnen(typ, betrag);
    gesamtBilanzAusgeben(bilanz_einnahme, bilanz_ausgabe, bilanz);
};

eintragHinzufuegen();
eintragHinzufuegen();
eintragHinzufuegen();