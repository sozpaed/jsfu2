/*
 * JavaScript zum 1x1 (Einmaleins)
 * =============================
 * by Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt
 * +++++++++++++++++++++++++++++
 * - playGame -> Holt die Eingabe, validiert sie und erstellt die Multiplikationsreihe
 * 
 * Lizenz
 * ++++++++++++++++++++++++++++
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
*/

$(document).ready(function () {
    $('#playGame').click(function () {
        playGame();
    });

    function playGame() {
        let valueOfRow = $('#firstNumber').val();
        let numberOfRow = $('#secondNumber').val();
        valueOfRow = parseInt(valueOfRow);
        numberOfRow = parseInt(numberOfRow);

        // Überprüfen, ob die Eingaben ganze Zahlen sind
        if (isNaN(valueOfRow) || valueOfRow < 1 || isNaN(numberOfRow) || numberOfRow < 1) {
            $('#showCallbackOfChallenge').css('background-color', '#c22b67');
            $('#showCallbackOfChallenge').css('visibility', 'visible');
            $('#showCallbackOfChallenge').html('Bitte gültige Zahlen eintragen.');
            return; // Beende die Funktion, wenn die Eingaben ungültig sind
        }

        let result = createMultiplicationRow(valueOfRow, numberOfRow);

        $('#showCallbackOfChallenge').css('background-color', '#c22b67');
        $('#showCallbackOfChallenge').css('visibility', 'visible');
        $('#showCallbackOfChallenge').html(result);
    }

    function createMultiplicationRow(valueOfRow, numberOfRow) {
        let result = `<h3>Multiplikationsreihe für ${valueOfRow}:</h3>`;
        let i = 1;
        while (i <= numberOfRow) {
            result += `${valueOfRow} x ${i} = ${valueOfRow * i}<br>`;
            i++;
        }
        return result;
    }
});
