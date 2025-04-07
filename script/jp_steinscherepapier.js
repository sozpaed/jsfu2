/*
 * JavaScript zum Spiel Stein, Schere, Papier
 * ==========================================
 * Autor: Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version: 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - playGame: Holt die Eingabe des Spielers, validiert sie und führt das Spiel aus.
 * - getComputerChoice: Generiert die zufällige Wahl des Computers.
 * - determineWinner: Bestimmt den Gewinner basierend auf den Spielregeln.
 * - choiceToString: Wandelt die numerische Wahl (1, 2, 3) in einen lesbaren String um.
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

$(document).ready(function () {
    // Event-Listener: Führt die Funktion playGame aus, wenn der Button mit der ID 'sozStartButton' geklickt wird.
    $('#sozStartButton').click(function () {
        playGame();
    });

    /**
     * Führt das Spiel Stein, Schere, Papier aus.
     * Holt die Eingabe des Spielers, validiert sie, generiert die Wahl des Computers
     * und zeigt das Ergebnis an.
     */
    function playGame() {
        // Holt die Eingabe des Spielers aus dem Input-Feld mit der ID 'firstNumber'.
        let userChoice = $('#firstNumber').val();
        userChoice = parseInt(userChoice); // Konvertiert die Eingabe in eine Ganzzahl.

        // Überprüft, ob die Eingabe eine gültige Zahl zwischen 1 und 3 ist.
        if (isNaN(userChoice) || userChoice < 1 || userChoice > 3) {
            // Zeigt eine Fehlermeldung an, wenn die Eingabe ungültig ist.
            $('#showCallbackOfChallenge').css('background-color', '#c22b67'); // Hintergrundfarbe für Fehler.
            $('#showCallbackOfChallenge').css('visibility', 'visible'); // Sichtbarkeit aktivieren.
            $('#showCallbackOfChallenge').html('Bitte nur Zahlen zwischen 1 und 3 eintragen.'); // Fehlermeldung.
            return; // Beendet die Funktion bei ungültiger Eingabe.
        }

        // Generiert die Wahl des Computers.
        let computerChoice = getComputerChoice();

        // Bestimmt den Gewinner basierend auf den Spielregeln.
        let result = determineWinner(userChoice, computerChoice);

        // Zeigt das Ergebnis des Spiels an.
        $('#showCallbackOfChallenge').css('background-color', '#28a745'); // Hintergrundfarbe für Erfolg.
        $('#showCallbackOfChallenge').css('visibility', 'visible'); // Sichtbarkeit aktivieren.
        $('#showCallbackOfChallenge').html('<b>Spieler:</b> ' + choiceToString(userChoice) + '. <b>Computer:</b> ' + choiceToString(computerChoice) + '. ' + result);
    }

    /**
     * Generiert die zufällige Wahl des Computers.
     * 
     * @returns {number} - Eine Zahl zwischen 1 und 3 (1 = Stein, 2 = Schere, 3 = Papier).
     */
    function getComputerChoice() {
        return Math.floor(Math.random() * 3) + 1; // Zufällige Zahl zwischen 1 und 3.
    }

    /**
     * Bestimmt den Gewinner des Spiels basierend auf den Spielregeln.
     * 
     * @param {number} userChoice - Die Wahl des Spielers (1 = Stein, 2 = Schere, 3 = Papier).
     * @param {number} computerChoice - Die Wahl des Computers (1 = Stein, 2 = Schere, 3 = Papier).
     * @returns {string} - Das Ergebnis des Spiels ('Gewonnen!', 'Verloren!' oder 'Unentschieden!').
     */
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'Unentschieden!';
        } else if (
            (userChoice === 1 && computerChoice === 2) || // Stein schlägt Schere.
            (userChoice === 2 && computerChoice === 3) || // Schere schlägt Papier.
            (userChoice === 3 && computerChoice === 1)    // Papier schlägt Stein.
        ) {
            return 'Gewonnen!';
        } else {
            return 'Verloren!';
        }
    }

    /**
     * Wandelt die numerische Wahl (1, 2, 3) in einen lesbaren String um.
     * 
     * @param {number} choice - Die numerische Wahl (1 = Stein, 2 = Schere, 3 = Papier).
     * @returns {string} - Der lesbare String ('Stein', 'Schere' oder 'Papier').
     */
    function choiceToString(choice) {
        switch (choice) {
            case 1:
                return 'Stein';
            case 2:
                return 'Schere';
            case 3:
                return 'Papier';
            default:
                return ''; // Leerer String für ungültige Eingaben.
        }
    }
});
