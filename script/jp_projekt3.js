/*
 * JavaScript zur Berechnung des Notendurchschnitts
 * ================================================
 * Autoren: Christian Leeser
 * Version: 1.1
 * Datum: 12. April 2025
 * 
 * Beschreibung:
 * Dieses Skript ermöglicht die Berechnung des Notendurchschnitts basierend auf Benutzereingaben.
 * Es validiert die Eingaben, speichert die Noten und zeigt den Durchschnitt sowie die Anzahl der eingegebenen Noten im HTML an.
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - addGrade: Fügt eine Note zur Gesamtsumme hinzu und erhöht die Anzahl der Noten.
 * - calculateAverage: Berechnet den Durchschnitt der eingegebenen Noten.
 * - getInputAndCalculate: Holt die Eingabe, validiert sie und berechnet den Durchschnitt.
 * - updateResultDisplay: Zeigt das Ergebnis oder eine Fehlermeldung im HTML an.
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (12.04.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
  
 * Hinweis: Die Quelltexte wurden teilweise mit Unterstützung von Microsoft Copilot erstellt.
 */

$(document).ready(function () {
    // =========================
    // Globale Variablen
    // =========================
    // Variablen zur Speicherung der Gesamtsumme der Noten und der Anzahl der eingegebenen Noten
    let sum = 0; // Gesamtsumme der Noten
    let count = 0; // Anzahl der eingegebenen Noten

    /**
     * Funktion: addGrade
     * ----------------------------------------------------------------
     * Fügt eine Note zur Gesamtsumme hinzu und erhöht die Anzahl der Noten.
     * 
     * @param {number} grade - Die eingegebene Note (zwischen 1 und 6).
     */
    function addGrade(grade) {
        sum += grade; // Addiert die Note zur Gesamtsumme
        count++; // Erhöht die Anzahl der Noten um 1
    }

    /**
     * Funktion: calculateAverage
     * ----------------------------------------------------------------
     * Berechnet den Durchschnitt der eingegebenen Noten.
     * 
     * @returns {string} - Der Durchschnitt der Noten, auf zwei Dezimalstellen gerundet.
     */
    function calculateAverage() {
        return (sum / count).toFixed(2); // Durchschnitt berechnen und auf zwei Dezimalstellen runden
    }

    /**
     * Funktion: getInputAndCalculate
     * ----------------------------------------------------------------
     * Holt die Eingabe aus dem HTML-Input-Feld, validiert sie und berechnet den Durchschnitt.
     * Zeigt eine Fehlermeldung an, wenn die Eingabe ungültig ist.
     */
    function getInputAndCalculate() {
        // Holt den Wert aus dem Input-Feld mit der ID 'firstNumber'
        const inputValue = parseInt($('#firstNumber').val(), 10);

        // Überprüft, ob die Eingabe eine gültige Zahl zwischen 1 und 6 ist
        if (isNaN(inputValue) || inputValue < 1 || inputValue > 6) {
            updateResultDisplay('Bitte nur Zahlen zwischen 1 und 6 eintragen.', 'error'); // Fehlermeldung anzeigen
            return; // Beendet die Funktion, wenn die Eingabe ungültig ist
        }

        // Fügt die gültige Note hinzu
        addGrade(inputValue);

        // Berechnet den Durchschnitt der Noten
        const average = calculateAverage();

        // Zeigt das Ergebnis (Durchschnitt und Anzahl der Noten) an
        updateResultDisplay(`Durchschnitt: ${average}. Anzahl Noten: ${count}`, 'success');
    }

    /**
     * Event-Listener: Führt die Funktion `getInputAndCalculate` aus, wenn der Button mit der ID 'sozStartButton' geklickt wird.
     */
    $('#sozStartButton').click(getInputAndCalculate);

    /**
     * Funktion: updateResultDisplay
     * ----------------------------------------------------------------
     * Zeigt eine Nachricht (Ergebnis oder Fehlermeldung) im HTML an und passt die Hintergrundfarbe an.
     * 
     * @param {string} message - Die anzuzeigende Nachricht (HTML-Format erlaubt).
     * @param {string} type - Der Typ der Nachricht ('error' oder 'success').
     */
    function updateResultDisplay(message, type) {
        // Wählt das HTML-Element mit der ID 'showCallbackOfChallenge' aus
        const resultElement = $('#showCallbackOfChallenge');

        // Macht das Element sichtbar
        resultElement.css('visibility', 'visible');

        // Setzt die Hintergrundfarbe basierend auf dem Typ der Nachricht
        if (type === 'error') {
            resultElement.css('background-color', '#c22b67'); // Rot für Fehler
        } else if (type === 'success') {
            resultElement.css('background-color', '#28a745'); // Grün für Erfolg
        }

        // Setzt den Inhalt des Elements auf die übergebene Nachricht
        resultElement.html(message);
    }
});
