"use strict";
//Unterschied String und Number
// console.log(206456);
// console.log("206456");

//Gesamtbilanz anlegen (Codeumbau -> bessere optische Strukturierung)
// (--> jetzt im Objekt zu finden als "gesamtbilanz")
// let bilanz_einnahme = 0,
//     bilanz_ausgabe = 0,
//     bilanz = 0;
//let bilanz = 206456 -5236; 


//neues Objekt anlegen:
const haushaltsbuch = {
    gesamtbilanz: {
        bilanz_einnahmen: 0,
        bilanz_ausgaben: 0,
        bilanz: 0
    },

    neuer_eintrag: {
        titel: null,  // immer wenn man etwas mit "nichts" leer definieren will, ist "null" eine gute Option, man könnte genauso gut einen leeren String verwenden
        typ: null,
        betrag: null,
        datum: null
    },

    eintragErfassen() {
        this.neuer_eintrag.titel = prompt("Wie heißt dein Eintrag?", "Gehalt");
        this.neuer_eintrag.typ = prompt("Ist das eine Einnahme oder Ausgabe?");
        this.neuer_eintrag.betrag = parseInt(prompt("Betrag (in Cent)?"));
        this.neuer_eintrag.datum = prompt("Datum? (jjjj-mm-tt)");
    },

    eintragAusgeben() {
        console.log(`Titel: ${this.neuer_eintrag.titel}
Titeltyp: ${this.neuer_eintrag.typ}
Betrag: ${this.neuer_eintrag.betrag} ct
Datum: ${this.neuer_eintrag.datum}`
        )
    },

    eintragMitGesamtBilanzVerrechnen() {
        if (this.neuer_eintrag.typ === "Einnahme") {
            this.gesamtbilanz.bilanz_einnahmen += this.neuer_eintrag.betrag;
            this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
        } else if (this.neuer_eintrag.typ === "Ausgabe") {
            this.gesamtbilanz.bilanz_ausgaben += this.neuer_eintrag.betrag;
            this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
        } else {
            console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt.`);
        }
    },

    gesamtBilanzAusgeben() {
        console.log(`Einnahmen: ${this.gesamtbilanz.bilanz_einnahmen} ct
Ausgaben: ${this.gesamtbilanz.bilanz_ausgaben} ct
Bilanz: ${this.gesamtbilanz.bilanz} ct
Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`);
    },

    eintragHinzufuegen() {
        this.eintragErfassen();
        this.eintragAusgeben();
        this.eintragMitGesamtBilanzVerrechnen();
        this.gesamtBilanzAusgeben();
    }
};


haushaltsbuch.eintragHinzufuegen();
haushaltsbuch.eintragHinzufuegen();
haushaltsbuch.eintragHinzufuegen();


//Umbau mit Funktionen (--> jetzt im Objekt zu finden als "neuer_eintrag")
// anonyme Funktion erstellen //zusammenfassende Schreibweise zur Deklaration von Variablen
// let titel,
//     typ,
//     betrag,
//     datum;


//Eingabedaten vom Nutzer holen ->
//Anmerkung: ein prompt liefert immer einen String zurück!!

//Umbau mit Funktionen (--> jetzt im Objekt zu finden als "eintragErfassen()")
// const eintragErfassen = function () {
//     titel = prompt("Wie heißt dein Eintrag?", "Gehalt");
//     typ = prompt("Ist das eine Einnahme oder Ausgabe?");
//     betrag = parseInt(prompt("Betrag (in Cent)?"));
//     datum = prompt("Datum? (jjjj-mm-tt)");
// };

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

//Umbau mit Funktionen (--> jetzt im Objekt zu finden als "eintragAusgeben()")
// const eintragAusgeben = function (titel, typ, betrag, datum) {
//     console.log(`Titel: ${titel}
// Titeltyp: ${typ}
// Betrag: ${betrag} ct
// Datum: ${datum}`
//     );
// };

// eintragAusgeben(titel, typ, betrag, datum);

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

// Umbau mit Funktion (--> jetzt im Objekt zu finden als "eintragMitGesamtBilanzVerrechnen()")
// const eintragMitGesamtBilanzVerrechnen = function (typ, betrag) {
//     if (typ === "Einnahme") {
//         bilanz_einnahmen += betrag;
//         bilanz += betrag;
//     } else if (typ === "Ausgabe") {
//         bilanz_ausgaben += betrag;
//         bilanz = bilanz - betrag;
//     } else {
//         console.log(`Der Typ "${typ}" ist nicht bekannt.`);
//     }
// };

// eintragMitGesamtBilanzVerrechnen(typ, betrag);

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

// Umbau mit Funktion (--> jetzt im Objekt zu finden als "gesamtBilanzAusgeben()")
// const gesamtBilanzAusgeben = function (bilanz_einnahmen, bilanz_ausgaben, bilanz) {
//     console.log(`Einnahmen: ${bilanz_einnahmen} ct
// Ausgaben: ${bilanz_ausgaben} ct
// Bilanz: ${bilanz} ct
// Bilanz ist positiv: ${bilanz >= 0}`);
// };

// gesamtBilanzAusgeben(bilanz_einnahmen, bilanz_ausgaben, bilanz);


//alle Funktionen mit einer Funktion aufrufen  (--> jetzt im Objekt zu finden als "eintragHinzufuegen()")
// const eintragHinzufuegen = function () {
//     eintragErfassen();
//     eintragAusgeben(titel, typ, betrag, datum);
//     eintragMitGesamtBilanzVerrechnen(typ, betrag);
//     gesamtBilanzAusgeben(bilanz_einnahmen, bilanz_ausgaben, bilanz);
// };

// eintragHinzufuegen();
// eintragHinzufuegen();
// eintragHinzufuegen();