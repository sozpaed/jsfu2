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
    $('#calcDurchschnitt').click(function () {
        let count = 0;
        let sum = 0;
        let getValueForCalc = 0;

        while (getInput > -1) {
            getValueForCalc = $('#valueForCalc').val();
            getValueForCalc =parseInt(getValueForCalc);

            sum = sum + getValueForCalc;
            count++;

            let getCalcDurchschnitt = calculateNotenschnitt(count,sum);

            $('#showCallbackOfChallenge').css('background-color','#c22b67');
            $('#showCallbackOfChallenge').css('visibility','visible');
            $('#showCallbackOfChallenge').html('Durchschnitt:' + getCalcDurchschnitt);
        }
        
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
function calculateNotenschnitt(sum,count) {
    
    let calcDurchschnitt = sum / count;
    return calcDurchschnitt;
}
