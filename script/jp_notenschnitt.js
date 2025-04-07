/*
 * JavaScript zur Berechnung des Notendurchschnitts
 * ================================================
 * Autor: Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version: 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - getInputAndCalculate: Holt die Eingabe, validiert sie und berechnet den Durchschnitt.
 * - calculateNotenschnitt: Berechnet den Durchschnitt der eingegebenen Noten.
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

$(document).ready(function () {
    // Initialisierung von Variablen für die Summe der Noten und die Anzahl der Eingaben
    let count = 0; // Anzahl der eingegebenen Noten
    let sum = 0;   // Summe der eingegebenen Noten

    /**
     * Holt die Eingabe aus dem HTML-Input-Feld, validiert sie und berechnet den Durchschnitt.
     * Zeigt eine Fehlermeldung an, wenn die Eingabe ungültig ist.
     */
    function getInputAndCalculate() {
        // Holt den Wert aus dem Input-Feld mit der ID 'firstNumber'
        let getValueForCalc = $('#firstNumber').val();
        getValueForCalc = parseInt(getValueForCalc); // Konvertiert den Wert in eine Ganzzahl

        // Überprüfen, ob die Eingabe eine gültige Note (zwischen 1 und 6) ist
        if (isNaN(getValueForCalc) || getValueForCalc < 1 || getValueForCalc > 6) {
            // Zeigt eine Fehlermeldung an, wenn die Eingabe ungültig ist
            $('#showCallbackOfChallenge').css('background-color', '#c22b67'); // Hintergrundfarbe für Fehler
            $('#showCallbackOfChallenge').css('visibility', 'visible'); // Sichtbarkeit aktivieren
            $('#showCallbackOfChallenge').html('Bitte nur Zahlen zwischen 1 und 6 eintragen.'); // Fehlermeldung
            return; // Beendet die Funktion
        }

        // Fügt die gültige Eingabe zur Summe hinzu und erhöht die Anzahl der Noten
        sum += getValueForCalc;
        count++;

        // Berechnet den Durchschnitt der eingegebenen Noten
        let getCalcDurchschnitt = calculateNotenschnitt(sum, count);

        // Zeigt den berechneten Durchschnitt und die Anzahl der Noten an
        $('#showCallbackOfChallenge').css('background-color', '#28a745'); // Hintergrundfarbe für Erfolg
        $('#showCallbackOfChallenge').css('visibility', 'visible'); // Sichtbarkeit aktivieren
        $('#showCallbackOfChallenge').html('Durchschnitt: ' + getCalcDurchschnitt + '. Anzahl Noten: ' + count);
    }

    // Event-Listener: Führt die Funktion getInputAndCalculate aus, wenn der Button mit der ID 'sozStartButton' geklickt wird
    $('#sozStartButton').click(function () {
        getInputAndCalculate();
    });
});

/**
 * Berechnet den Durchschnitt der eingegebenen Noten.
 * 
 * @param {number} sum - Die Summe der eingegebenen Noten.
 * @param {number} count - Die Anzahl der eingegebenen Noten.
 * @returns {string} - Der Durchschnitt der Noten, gerundet auf 2 Dezimalstellen.
 */
function calculateNotenschnitt(sum, count) {
    // Berechnet den Durchschnitt, indem die Summe durch die Anzahl geteilt wird
    let calcDurchschnitt = sum / count;
    return calcDurchschnitt.toFixed(2); // Rundet den Durchschnitt auf 2 Dezimalstellen
}
