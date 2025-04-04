/*
 * JavaScript zum Zahlenraten
 * =============================
 * by Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt
 * +++++++++++++++++++++++++++++
 * - playGame -> Holt die Eingabe, validiert sie und spielt das Spiel
 * - getRandomNumber -> Generiert eine zufällige Zahl zwischen 1 und 10
 * - checkGuess -> Überprüft die Eingabe des Nutzers und gibt das Ergebnis zurück
 * 
 * Lizenz
 * ++++++++++++++++++++++++++++
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
*/

$(document).ready(function () {
    let randomNumber = getRandomNumber();
    let attempts = 0;

    $('#playGame').click(function () {
        playGame();
    });

    function playGame() {
        let userChoice = $('#userChoice').val();
        userChoice = parseInt(userChoice);

        // Überprüfen, ob die Eingabe eine ganze Zahl zwischen 1 und 10 ist
        if (isNaN(userChoice) || userChoice < 1 || userChoice > 10) {
            $('#showCallbackOfChallenge').css('background-color', '#c22b67');
            $('#showCallbackOfChallenge').css('visibility', 'visible');
            $('#showCallbackOfChallenge').html('Bitte nur Zahlen zwischen 1 und 10 eintragen.');
            return; // Beende die Funktion, wenn die Eingabe ungültig ist
        }

        attempts++;
        let result = checkGuess(userChoice, randomNumber);

        $('#showCallbackOfChallenge').css('background-color', '#c22b67');
        $('#showCallbackOfChallenge').css('visibility', 'visible');
        $('#showCallbackOfChallenge').html(result);

        if (result.includes('gewonnen')) {
            randomNumber = getRandomNumber(); // Neue Zufallszahl generieren
            attempts = 0; // Versuche zurücksetzen
        }
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    function checkGuess(userChoice, randomNumber) {
        if (userChoice === randomNumber) {
            return 'Herzlichen Glückwunsch! Sie haben gewonnen! Die Zahl war ' + randomNumber + '.';
        } else if (userChoice < randomNumber) {
            return 'Ihre Zahl ist zu niedrig. Versuchen Sie es erneut.';
        } else {
            return 'Ihre Zahl ist zu hoch. Versuchen Sie es erneut.';
        }
    }
});
