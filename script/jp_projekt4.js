/*
 * JavaScript zum Zahlenraten
 * =============================
 * Autoren: GitHub Copilot & Christian Leeser
 * Version: 1.1
 * Datum: 12. April 2025
 * 
 * Beschreibung:
 * Dieses Skript implementiert ein Zahlenratenspiel, bei dem der Computer eine zufällige Zahl zwischen 1 und 10 generiert.
 * Der Benutzer muss die Zahl erraten, und das Skript gibt Feedback, ob die Eingabe zu niedrig, zu hoch oder korrekt ist.
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - playGame: Führt das Spiel aus, validiert die Eingabe und zeigt das Ergebnis an.
 * - getRandomNumber: Generiert eine zufällige Zahl zwischen 1 und 10.
 * - checkGuess: Überprüft die Eingabe des Nutzers und gibt das Ergebnis zurück.
 * - updateResultDisplay: Zeigt Nachrichten im Ergebnisbereich an.
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (12.04.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

$(document).ready(function () {
    // =========================
    // Initialisierung
    // =========================
    // Generiert eine Zufallszahl zwischen 1 und 10 und setzt die Anzahl der Versuche auf 0.
    let randomNumber = getRandomNumber(); // Zufallszahl zwischen 1 und 10
    let attempts = 0; // Zählt die Versuche des Nutzers

    // =========================
    // Event-Listener
    // =========================
    // Führt die Funktion `playGame` aus, wenn der Button mit der ID 'sozStartButton' geklickt wird.
    $('#sozStartButton').click(function () {
        playGame();
    });

    /**
     * Funktion: playGame
     * ----------------------------------------------------------------
     * Führt das Zahlenratenspiel aus. Holt die Eingabe des Nutzers, validiert sie,
     * überprüft die Eingabe und zeigt das Ergebnis an.
     */
    function playGame() {
        // Holt die Eingabe des Nutzers aus dem Input-Feld mit der ID 'firstNumber' und konvertiert sie in eine Zahl.
        let userChoice = parseInt($('#firstNumber').val());

        // Überprüft, ob die Eingabe eine gültige Zahl zwischen 1 und 10 ist.
        if (isNaN(userChoice) || userChoice < 1 || userChoice > 10) {
            updateResultDisplay('Bitte nur Zahlen zwischen 1 und 10 eingeben.', 'error'); // Fehlermeldung anzeigen
            return; // Beendet die Funktion, wenn die Eingabe ungültig ist.
        }

        // Erhöht die Anzahl der Versuche um 1.
        attempts++;

        // Überprüft die Eingabe des Nutzers und gibt das Ergebnis zurück.
        let result = checkGuess(userChoice, randomNumber);

        // Zeigt das Ergebnis im Ergebnisbereich an.
        updateResultDisplay(result, result.includes('gewonnen') ? 'success' : 'error');

        // Wenn die Zahl erraten wurde, wird das Spiel zurückgesetzt.
        if (result.includes('gewonnen')) {
            randomNumber = getRandomNumber(); // Neue Zufallszahl generieren
            attempts = 0; // Anzahl der Versuche zurücksetzen
        }
    }

    /**
     * Funktion: getRandomNumber
     * ----------------------------------------------------------------
     * Generiert eine zufällige Zahl zwischen 1 und 10.
     * 
     * @returns {number} - Eine Zufallszahl zwischen 1 und 10.
     */
    function getRandomNumber() {
        return Math.floor(Math.random() * 10) + 1; // Zufallszahl generieren
    }

    /**
     * Funktion: checkGuess
     * ----------------------------------------------------------------
     * Überprüft die Eingabe des Nutzers und gibt das Ergebnis zurück.
     * 
     * @param {number} userChoice - Die Eingabe des Nutzers.
     * @param {number} randomNumber - Die vom Computer generierte Zufallszahl.
     * @returns {string} - Das Ergebnis des Spiels ('gewonnen', 'zu niedrig', 'zu hoch').
     */
    function checkGuess(userChoice, randomNumber) {
        if (userChoice === randomNumber) {
            return `Herzlichen Glückwunsch! Du hast gewonnen! Die Zahl war ${randomNumber}.`; // Richtige Zahl
        } else if (userChoice < randomNumber) {
            return 'Deine Zahl ist zu niedrig. Versuche es erneut.'; // Zahl zu niedrig
        } else {
            return 'Deine Zahl ist zu hoch. Versuche es erneut.'; // Zahl zu hoch
        }
    }

    /**
     * Funktion: updateResultDisplay
     * ----------------------------------------------------------------
     * Zeigt eine Nachricht im Ergebnisbereich an und passt die Hintergrundfarbe an.
     * 
     * @param {string} message - Die anzuzeigende Nachricht.
     * @param {string} type - Der Typ der Nachricht ('success' oder 'error').
     */
    function updateResultDisplay(message, type) {
        // Wählt das HTML-Element mit der ID 'showCallbackOfChallenge' aus.
        const resultElement = $('#showCallbackOfChallenge');

        // Macht das Element sichtbar.
        resultElement.css('visibility', 'visible');

        // Setzt die Hintergrundfarbe basierend auf dem Typ der Nachricht.
        if (type === 'error') {
            resultElement.css('background-color', '#c22b67'); // Rot für Fehler
        } else if (type === 'success') {
            resultElement.css('background-color', '#28a745'); // Grün für Erfolg
        }

        // Setzt den Inhalt des Elements auf die übergebene Nachricht.
        resultElement.html(message);
    }
});