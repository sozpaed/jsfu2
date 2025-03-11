/*
 * JavaScript zur Kopfübung mit Multiplikation
 * =============================
 * by Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version 0.1 (Stand: 16.10.2021)
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
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (16.10.2021)
 * https://creativecommons.org/licenses/by-sa/4.0/
*/

$(document).ready(function () {
    let counterOfPoints = 0;
    let checkIfChallengeJump = false;
    let checkIfChallengeDone = false;
    
    $('#SozProgress').html('Punkte: ' + counterOfPoints);

    $(function() { 
        $('#mySlider').slider(); 
        $('#mySlider').slider({
            range: "min",
            min: 10,
            max: 50,
            value:10,
            step: 1,
            slide: function changeValue(event, ui) {
                $('#showCalcRange').html('Die Werte für die Aufgaben sind aus dem Bereich von 10 bis ' + ui.value);
            }
        });
    });

    $('#newButton').click(function () {
        
        let theFirstValue = createRandomValue($('#mySlider').slider('value'));
        let theSecondValue = createRandomValue($('#mySlider').slider('value'));
        let resultOfMulti = createMultiplication(theFirstValue,theSecondValue);

        $('#showChallenge').html('Die Aufgabe lautet: ' + theFirstValue + ' &times; ' + theSecondValue);

        /*
        * Prüfung (Schleife), ob Aufgabe übersprungen wurde.
        * ++++++++++++++++++++++++++++++++++++++++++++++++++++
        */
        if (checkIfChallengeJump == true) {
            $('#showCallbackOfChallenge').css('background-color','#c22bab');
            $('#showCallbackOfChallenge').css('visibility','visible');
            $('#showCallbackOfChallenge').html('<b>Kein Überspringen.</b> Drücke auf "Prüfe Dein Ergebnis".');
        } else {

            /*
            * checkIfChallengeJump wird auf true gesetzt, da Aufgabe generiert wurde.
            * ++++++++++++++++++++++++++++++++++++++++++++++++++++
            */
            checkIfChallengeJump = true;

            /*
            * checkIfChallengeDone generiert. Prüfung, ob eine Aufgabe mehrfach gelöst (Hintereinander) gelöst würde
            * ++++++++++++++++++++++++++++++++++++++++++++++++++++
            * false = Aufgabe wurde noch nicht gelöst -> der Vergleich zwischen Eingabe und Aufgabe kann vollzogen werden
            * true = Aufgabe wurde bereits gelöst -> Warnhinweis, dass die Aufgabe schon gelöst wurde. (weiter unten)
            * 
            * Da eine Aufgabe erzeugt wurde, wird Wert auf false gesetzt, falls dieser auf true stand.
            */
            let checkIfChallengeDone = false;
            if (checkIfChallengeDone == true) {
                checkIfChallengeDone = false;
            }
            $('#checkButton').click(function () {
            
                let getValueOfUserInput = $('#resultFromUser').val();
    
                 /*
                    * Prüfung, ob die Aufgabe schon 'geprüft (berechnet) wurde
                    * ++++++++++++++++++++++++++++++++++++++++++++++++++++
                    */
                if (checkIfChallengeDone == true) {
                    $('#showCallbackOfChallenge').css('background-color','#c22bab');
                    $('#showCallbackOfChallenge').css('visibility','visible');
                    $('#showCallbackOfChallenge').html('<b>Schon berechnet.</b> Drücke auf <i>"Neue Aufgabe"</i>.');
                } else {
        
                    if(getValueOfUserInput==resultOfMulti) {
                        counterOfPoints ++;
                        checkIfSolved = 1;
                        $('#SozProgress').html('Punkte: ' + counterOfPoints);
                        $('#showCallbackOfChallenge').css('background-color','#2bc283');
                        $('#showCallbackOfChallenge').css('visibility','visible');
                        $('#showCallbackOfChallenge').html('Gratulation. Dein Ergebnis ist korrekt.');
                    } else {
                        counterOfPoints = counterOfPoints;
                        checkIfSolved = 0;
                        $('#showCallbackOfChallenge').css('background-color','#c22b67');
                        $('#showCallbackOfChallenge').css('visibility','visible');
                        $('#showCallbackOfChallenge').html('Falsch. Korrektes Ergebnis: ' + resultOfMulti);
                    }

                checkIfChallengeDone = true;
                checkIfChallengeJump = false;
                }
            });
        }
    });
    
});

/*
 * createMultiplication -> Die Funktion berechnet von zwei Werten das Produkt
 * ---------------------------------------------------------------------------
 * value1 = erster Wert (int)
 * value2 = zweiter Wert (int)
 * 
 * Hinweis: es wird SozCalc aus der SozLib verwendet
*/
function createMultiplication(value1,value2) {
    const getCreateMulti = new SozCalc(value1,value2);
    return getCreateMulti.getResultOfMultiplication;
}

/*
 * createRandomValue -> Die Funktion berechnet einen zufälligern Wert bis zur rangeValue
 * ---------------------------------------------------------------------------
 * rangeValue = zeigt das Ende des Bereiches aus dem ein zufälliger Wert bestimmt werden soll (int)
 * 
 * Hinweis: es wird SozMath aus der SozLib verwendet
*/
function createRandomValue(rangeValue) {
    const getCreateRandomValue = new SozMath(rangeValue);
    return getCreateRandomValue.getRandomOfMathNumber;
}