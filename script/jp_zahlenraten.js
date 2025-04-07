/*
 * JavaScript zum Zahlenraten
 * =============================
 * Autor: Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version: 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - playGame: Holt die Eingabe des Nutzers, validiert sie und führt das Spiel aus.
 * - getRandomNumber: Generiert eine zufällige Zahl zwischen 1 und 10.
 * - checkGuess: Überprüft die Eingabe des Nutzers und gibt das Ergebnis zurück.
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

$(document).ready(function () {
    // Initialisierung der Zufallszahl und der Anzahl der Versuche
    let randomNumber = getRandomNumber(); // Generiert eine Zufallszahl zwischen 1 und 10
    let attempts = 0; // Zählt die Anzahl der Versuche des Nutzers

    // Event-Listener: Führt die Funktion playGame aus, wenn der Button mit der ID 'sozStartButton' geklickt wird
    $('#sozStartButton').click(function () {
        playGame();
    });

    /**
     * Führt das Spiel Zahlenraten aus.
     * Holt die Eingabe des Nutzers, validiert sie, überprüft die Eingabe und zeigt das Ergebnis an.
     */
    function playGame() {
        // Holt die Eingabe des Nutzers aus dem Input-Feld mit der ID 'firstNumber'
        let userChoice = $('#firstNumber').val();
        userChoice = parseInt(userChoice); // Konvertiert die Eingabe in eine Ganzzahl

        // Überprüft, ob die Eingabe eine gültige Zahl zwischen 1 und 10 ist
        if (isNaN(userChoice) || userChoice < 1 || userChoice > 10) {
            // Zeigt eine Fehlermeldung an, wenn die Eingabe ungültig ist
            $('#showCallbackOfChallenge').css('background-color', '#c22b67'); // Hintergrundfarbe für Fehler
            $('#showCallbackOfChallenge').css('visibility', 'visible'); // Sichtbarkeit aktivieren
            $('#showCallbackOfChallenge').html('Bitte nur Zahlen zwischen 1 und 10 eintragen.'); // Fehlermeldung
            return; // Beendet die Funktion bei ungültiger Eingabe
        }

        // Erhöht die Anzahl der Versuche
        attempts++;

        // Überprüft die Eingabe des Nutzers und gibt das Ergebnis zurück
        let result = checkGuess(userChoice, randomNumber);

        // Zeigt das Ergebnis des Spiels an
        $('#showCallbackOfChallenge').css('background-color', '#28a745'); // Hintergrundfarbe für Erfolg
        $('#showCallbackOfChallenge').css('visibility', 'visible'); // Sichtbarkeit aktivieren
        $('#showCallbackOfChallenge').html(result);

        // Wenn der Nutzer die richtige Zahl errät, wird das Spiel zurückgesetzt
        if (result.includes('gewonnen')) {
            randomNumber = getRandomNumber(); // Neue Zufallszahl generieren
            attempts = 0; // Versuche zurücksetzen
        }
    }

    /**
     * Generiert eine zufällige Zahl zwischen 1 und 10.
     * 
     * @returns {number} - Eine Zufallszahl zwischen 1 und 10.
     */
    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1; // Zufällige Zahl zwischen 1 und 10
    }

    /**
     * Überprüft die Eingabe des Nutzers und gibt das Ergebnis zurück.
     * 
     * @param {number} userChoice - Die Eingabe des Nutzers.
     * @param {number} randomNumber - Die vom Computer generierte Zufallszahl.
     * @returns {string} - Das Ergebnis des Spiels ('gewonnen', 'zu niedrig', 'zu hoch').
     */
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
