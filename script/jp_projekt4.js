/*
 * JavaScript zum Zahlenraten
 * =============================
 * Autor: Christian Leeser
 * Version: 0.2 (Stand: 11.04.2025)
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - playGame: Führt das Spiel aus, validiert die Eingabe und zeigt das Ergebnis an.
 * - getRandomNumber: Generiert eine zufällige Zahl zwischen 1 und 10.
 * - checkGuess: Überprüft die Eingabe des Nutzers und gibt das Ergebnis zurück.
 * - updateResultDisplay: Zeigt Nachrichten im Ergebnisbereich an.
 */

$(document).ready(function () {
    // Initialisierung der Zufallszahl und der Anzahl der Versuche
    let randomNumber = getRandomNumber(); // Zufallszahl zwischen 1 und 10
    let attempts = 0; // Zählt die Versuche des Nutzers

    // Event-Listener: Startet das Spiel, wenn der Button geklickt wird
    $('#sozStartButton').click(function () {
        playGame();
    });


    /**
     * Führt das Spiel Zahlenraten aus.
     * Holt die Eingabe des Nutzers, validiert sie, überprüft die Eingabe und zeigt das Ergebnis an.
     */
    function playGame() {
        // Eingabe des Nutzers abrufen und in eine Zahl umwandeln
        let userChoice = parseInt($('#firstNumber').val());

        // Eingabe validieren
        if (isNaN(userChoice) || userChoice < 1 || userChoice > 10) {
            updateResultDisplay('Bitte nur Zahlen zwischen 1 und 10 eingeben.', 'error');
            return;
        }

        // Anzahl der Versuche erhöhen
        attempts++;

        // Überprüfung der Eingabe
        let result = checkGuess(userChoice, randomNumber);

        // Ergebnis anzeigen
        updateResultDisplay(result, result.includes('gewonnen') ? 'success' : 'error');

        // Wenn die Zahl erraten wurde, Spiel zurücksetzen
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
        return Math.floor(Math.random() * 10) + 1;
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
            return `Herzlichen Glückwunsch! Du hast gewonnen! Die Zahl war ${randomNumber}.`;
        } else if (userChoice < randomNumber) {
            return 'Deine Zahl ist zu niedrig. Versuche es erneut.';
        } else {
            return 'Deine Zahl ist zu hoch. Versuche es erneut.';
        }
    }

    /**
     * Zeigt eine Nachricht im Ergebnisbereich an und passt die Hintergrundfarbe an.
     * 
     * @param {string} message - Die anzuzeigende Nachricht.
     * @param {string} type - Der Typ der Nachricht ('success' oder 'error').
     */
    function updateResultDisplay(message, type) {
        const resultElement = $('#showCallbackOfChallenge');

        // Sichtbarkeit aktivieren
        resultElement.css('visibility', 'visible');

        // Hintergrundfarbe basierend auf dem Typ setzen
        if (type === 'error') {
            resultElement.css('background-color', '#c22b67'); // Rot für Fehler
        } else if (type === 'success') {
            resultElement.css('background-color', '#28a745'); // Grün für Erfolg
        }

        // Nachricht anzeigen
        resultElement.html(message);
    }
});