/*
 * JavaScript zum ggT berechnen
 * =============================
 * by Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt
 * +++++++++++++++++++++++++++++
 * - calculateGgTOfTwoValues -> GGT-Berechnung nach Euklid
 * 
 * Lizenz
 * ++++++++++++++++++++++++++++
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
*/

$(document).ready(function () {
    $('#calcGgT').click(function () {
        let firstValueforGgT = $('#firstValueFromUser').val();
        let secoundValueforGgT = $('#secondValueFromUser').val();

        let resultOfGgT = calculateGgTOfTwoValues(firstValueforGgT,secoundValueforGgT);

        $('#showCallbackOfChallenge').css('background-color','#c22b67');
        $('#showCallbackOfChallenge').css('visibility','visible');
        $('#showCallbackOfChallenge').html('ggT(' + firstValueforGgT + ','+ secoundValueforGgT + ') = ' + resultOfGgT);
        
    });
    
});

/*
 * calculateGgTOfTwoValues -> GGT-Berechnung nach Euklid
 * ---------------------------------------------------------------------------
 * value1 = erster Wert (int)
 * value2 = zweiter Wert (int)
 * 
 * Hinweis: es wird SozCalc aus der SozLib verwendet
*/
function calculateGgTOfTwoValues(value1,value2) {
    value1 = parseInt(value1, 10);
    value2 = parseInt(value2, 10);

    if (isNaN(value1) || isNaN(value2) || value1 <= 0 || value2 <= 0) {
        return 1; // Rückgabe 1, wenn einer der Werte ungültig ist
    }

    while (value1 != value2) {
        if (value1 > value2) {
            value1 = value1 - value2;
        } else {
            value2 = value2 - value1;
        }
    }
    return value1;
}