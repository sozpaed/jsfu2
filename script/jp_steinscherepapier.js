/*
 * JavaScript zum Spiel Stein, Schere, Papier
 * =============================
 * by Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt
 * +++++++++++++++++++++++++++++
 * - playGame -> Holt die Eingabe, validiert sie und spielt das Spiel
 * - getComputerChoice -> Generiert die Wahl des Computers
 * - determineWinner -> Bestimmt den Gewinner des Spiels
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
        let userChoice = $('#userChoice').val();
        userChoice = parseInt(userChoice);

        // Überprüfen, ob die Eingabe eine ganze Zahl zwischen 1 und 3 ist
        if (isNaN(userChoice) || userChoice < 1 || userChoice > 3) {
            $('#showCallbackOfChallenge').css('background-color', '#c22b67');
            $('#showCallbackOfChallenge').css('visibility', 'visible');
            $('#showCallbackOfChallenge').html('Bitte nur Zahlen zwischen 1 und 3 eintragen.');
            return; // Beende die Funktion, wenn die Eingabe ungültig ist
        }

        let computerChoice = getComputerChoice();
        let result = determineWinner(userChoice, computerChoice);
        $('#showCallbackOfChallenge').css('background-color', '#c22b67');
        $('#showCallbackOfChallenge').css('visibility', 'visible');
        $('#showCallbackOfChallenge').html('<b>Spieler:</b> ' + choiceToString(userChoice) + '. <b>Computer:</b> ' + choiceToString(computerChoice) + '. ' + result);
    }

    function getComputerChoice() {
        return Math.floor(Math.random() * 3) + 1;
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Unentschieden!';
        } else if ((userChoice === 1 && computerChoice === 2) ||
                   (userChoice === 2 && computerChoice === 3) ||
                   (userChoice === 3 && computerChoice === 1)) {
            return 'Gewonnen!';
        } else {
            return 'Verloren!';
        }
    }

    function choiceToString(choice) {
        switch (choice) {
            case 1:
                return 'Stein';
            case 2:
                return 'Schere';
            case 3:
                return 'Papier';
            default:
                return '';
        }
    }
});
