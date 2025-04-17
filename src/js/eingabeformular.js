"use strict";

const eingabeformular = {

  formulardatenHolen(event) {
    // formulardaten-Objekt erstellen
    return {
      titel: event.target.elements.titel.value,
      betrag: event.target.elements.betrag.value,
      einnahme: event.target.elements.einnahme.checked,
      ausgabe: event.target.elements.ausgabe.checked,
      datum: event.target.elements.datum.valueAsDate,
    }
  },

  formulardatenVerarbeiten(formulardaten) {
    let typ;

    if (formulardaten.einnahme === true) {
      typ = "einnahme";
    } else if (formulardaten.ausgabe === true) {
      typ = "ausgabe";
    }
    return {
      titel: formulardaten.titel.trim(),
      typ: typ,
      betrag: parseFloat(formulardaten.betrag) * 100,
      datum: formulardaten.datum
    }
  },

  formulardatenValidieren(formulardaten) {
    let fehler = [];
    if (formulardaten.titel === "") {
      fehler.push("Titel");
    }
    if (
      formulardaten.typ === undefined ||
      formulardaten.typ.match(/^(?:einnahme|ausgabe)$/i) === null
    ) {
      fehler.push("Typ");
    }
    if (isNaN(formulardaten.betrag)) {
      fehler.push("Betrag");
    }
    if (formulardaten.datum === null) {
      fehler.push("Datum");
    }
    return fehler;
  },

  datumAktualisieren() {
    let datumsInput = document.querySelector("datum");
    if (datumsInput !== null) {
      datumsInput.valueAsDate = new Date();
    }
  },

  absendenEventHinzufuegen(eingabeformular) {
    eingabeformular.querySelector("#eingabeformular").addEventListener("submit", event => {
      event.preventDefault();

      // Formulardaten holen und Formulardaten verarbeiten
      console.log(event);
      // let abc = this.formulardatenHolen(event)
      // let formulardaten = this.formulardatenVerarbeiten(abc);
      let formulardaten = this.formulardatenVerarbeiten(this.formulardatenHolen(event));
      console.log(formulardaten);

      // Formulardaten validieren
      let formular_fehler = this.formulardatenValidieren(formulardaten);
      console.log(formular_fehler);

      // wennn die Formulardaten valide sind
      if (formular_fehler.length === 0) {
        // Eintrag zum Haushaltbuch hinzufügen
        haushaltsbuch.eintragHinzufuegen(formulardaten);

        // wenn bereits Fehlermeldung angezeigt wird
        // Fehlermeldung entfernen 
        // Formular zurücksetzen
        event.target.reset();
        // Datum auf heutigen Tag setzen
        this.datumAktualisieren();
      } else {
        // wenn die Formulardaten NICHT valide sind
        // wenn bereits Fehlermeldung angezeigt wird
        // Fehlermeldung entfernen 
        // Fehlermeldung im Eingabeformular-Container anzeigen
      }



    });
  },

  htmlGenerieren() {

    let eingabeformular = document.createElement("section");
    eingabeformular.setAttribute("id", "eingabeformular-container");
    eingabeformular.innerHTML = `<form id="eingabeformular" action="#" method="get"></form>
      <div class="eingabeformular-zeile">
        <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
      </div>
      <div class="eingabeformular-zeile">
        <div class="titel-typ-eingabe-gruppe">
          <label for="titel">Titel</label>
          <input
            type="text"
            id="titel"
            form="eingabeformular"
            name="titel"
            placeholder="z.B. Einkaufen"
            size="10"
            title="Titel des Eintrags" 

          />
          <input
            type="radio"
            id="einnahme"
            name="typ"
            value="einnahme"
            form="eingabeformular"
            title="Typ des Eintrags"
          />
          <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
          <input
            type="radio"
            id="ausgabe"
            name="typ"
            value="ausgabe"
            form="eingabeformular"
            title="Typ des Eintrags"
            checked
           
          />
          <label for="ausgabe" title="Typ des Eintrags">Ausgabe</label>
        </div>
      </div>
      <div class="eingabeformular-zeile">
        <div class="betrag-datum-eingabe-gruppe">
          <label for="betrag">Betrag</label>
          <input
            type="number"
            id="betrag"
            name="betrag"
            form="eingabeformular"
            placeholder="z.B. 10,42"
            size="10"
            step="0.01"
            title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)" 

            />
          <label for="datum">Datum</label>
          <input
            type="date"
            id="datum"
            name="datum"
            form="eingabeformular"
            placeholder="jjjj-mm-tt"
            size="10"
            title="Datum des Eintrags (Format: jjjj-mm-tt)"

          />
        </div>
      </div>
      <div class="eingabeformular-zeile">
        <button class="standard" type="submit" form="eingabeformular">
          Hinzufügen
        </button>
      </div>`;

    this.absendenEventHinzufuegen(eingabeformular);

    return eingabeformular;

  },

  anzeigen() {
    document.querySelector("#navigationsleiste").insertAdjacentElement("afterend", this.htmlGenerieren());
    // Datum auf heutigen Tag setzen
    this.datumAktualisieren();
  }

};