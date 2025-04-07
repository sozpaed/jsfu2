/*
 * JavaScript zur Berechnung des größten gemeinsamen Teilers (ggT)
 * ===============================================================
 * Autor: Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version: 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - calculateGgTOfTwoValues: Berechnung des ggT nach dem Euklidischen Algorithmus
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

$(document).ready(function () {
    // Event-Listener für den "Berechnen"-Button
    $('#sozStartButton').click(function () {
        // Werte aus den Eingabefeldern abrufen
        let firstValueforGgT = $('#firstNumber').val();
        let secoundValueforGgT = $('#secondNumber').val();

        // Berechnung des ggT
        let resultOfGgT = calculateGgTOfTwoValues(firstValueforGgT, secoundValueforGgT);

        // Ergebnis anzeigen
        $('#showCallbackOfChallenge').css('background-color', '#c22b67'); // Hintergrundfarbe setzen
        $('#showCallbackOfChallenge').css('visibility', 'visible'); // Sichtbarkeit aktivieren
        $('#showCallbackOfChallenge').html('ggT(' + firstValueforGgT + ', ' + secoundValueforGgT + ') = ' + resultOfGgT); // Ergebnis einfügen
    });
});

/*
 * Funktion: calculateGgTOfTwoValues
 * ----------------------------------------------------------------
 * Berechnet den größten gemeinsamen Teiler (ggT) zweier positiver Ganzzahlen
 * mithilfe des Euklidischen Algorithmus.
 * 
 * Parameter:
 * - value1: Erste Zahl (int)
 * - value2: Zweite Zahl (int)
 * 
 * Rückgabewert:
 * - Der größte gemeinsame Teiler (ggT) der beiden Zahlen (int)
 * - Gibt 1 zurück, wenn einer der Werte ungültig ist (z. B. nicht positiv oder keine Zahl)
 * 
 * Hinweis:
 * - Es wird die SozCalc-Bibliothek aus der SozLib verwendet.
 */
function calculateGgTOfTwoValues(value1, value2) {
    // Eingabewerte in Ganzzahlen umwandeln
    value1 = parseInt(value1, 10);
    value2 = parseInt(value2, 10);

    // Überprüfung auf ungültige Eingaben
    if (isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0) {
        return 1; // Rückgabe 1, wenn einer der Werte ungültig ist
    }

    // Euklidischer Algorithmus zur Berechnung des ggT
    while (value1 != value2) {
        if (value1 > value2) {
            value1 = value1 - value2; // Größere Zahl wird reduziert
        } else {
            value2 = value2 - value1; // Kleinere Zahl wird reduziert
        }
    }

    // Rückgabe des ggT
    return value1;
}