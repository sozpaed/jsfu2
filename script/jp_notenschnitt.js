/*
 * JavaScript zum Notendurchschnit berechnen
 * =============================
 * by Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt
 * +++++++++++++++++++++++++++++
 * - createMultiplication -> Die Funktion berechnet von zwei Werten das Produkt
 * - createRandomValue -> Die Funktion berechnet einen zufälligern Wert bis zur rangeValue
 * - createProgressbar -> Die Funktion generiert die Progressbar
 * - valideEingabe -> Erzeugt die Texte und validiert die Ergebnisse der Aufgaben
 * - multiStart -> Die Funktion für die HTML-Datei
 * 
 * Lizenz
 * ++++++++++++++++++++++++++++
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
*/

$(document).ready(function () {
    let count = 0;
    let sum = 0;

    function getInputAndCalculate() {
        let getValueForCalc = $('#valueForCalc').val();
        getValueForCalc = parseInt(getValueForCalc);

        // Überprüfen, ob die Eingabe eine ganze Zahl zwischen 1 und 6 ist
        if (isNaN(getValueForCalc) || getValueForCalc < 1 || getValueForCalc > 6) {
            $('#showCallbackOfChallenge').css('background-color', '#c22b67');
            $('#showCallbackOfChallenge').css('visibility', 'visible');
            $('#showCallbackOfChallenge').html('Bitte nur Zahlen zwischen 1 und 6 eintragen.');
            return; // Beende die Funktion, wenn die Eingabe ungültig ist
        }

        sum += getValueForCalc;
        count++;

        let getCalcDurchschnitt = calculateNotenschnitt(sum, count);

        $('#showCallbackOfChallenge').css('background-color', '#c22b67');
        $('#showCallbackOfChallenge').css('visibility', 'visible');
        $('#showCallbackOfChallenge').html('Durchschnitt: ' + getCalcDurchschnitt);
    }

    $('#calcDurchschnitt').click(function () {
        getInputAndCalculate();
    });
});

function calculateNotenschnitt(sum, count) {
    let calcDurchschnitt = sum / count;
    return calcDurchschnitt.toFixed(2); // Durchschnitt auf 2 Dezimalstellen runden
}
