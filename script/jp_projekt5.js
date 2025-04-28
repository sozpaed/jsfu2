/*
 * Spiel: Stein, Schere, Papier
 * ============================
 * Autoren: Christian Leeser
 * Version: 1.0
 * Datum: 12. April 2025
 * 
 * Beschreibung:
 * Dieses Skript implementiert das Spiel "Stein, Schere, Papier". Der Benutzer gibt seine Wahl ein (1 = Stein, 2 = Schere, 3 = Papier),
 * und der Computer generiert eine zufällige Wahl. Das Skript bestimmt den Gewinner basierend auf den Spielregeln und zeigt das Ergebnis an.
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - playGame: Führt das Spiel aus, validiert die Eingabe und zeigt das Ergebnis an.
 * - isValidChoice: Überprüft, ob die Eingabe des Benutzers gültig ist.
 * - getComputerChoice: Generiert die Wahl des Computers.
 * - determineWinner: Bestimmt den Gewinner basierend auf den Spielregeln.
 * - choiceToString: Wandelt die Wahl (1, 2, 3) in einen lesbaren Text um.
 * - updateResultDisplay: Zeigt Nachrichten im Ergebnisbereich an.
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (12.04.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
  
 * Hinweis: Die Quelltexte wurden teilweise mit Unterstützung von Microsoft Copilot erstellt.
 */

// =========================
// Spieloptionen als Konstanten
// =========================
const STEIN = 1; // Repräsentiert die Wahl "Stein"
const SCHERE = 2; // Repräsentiert die Wahl "Schere"
const PAPIER = 3; // Repräsentiert die Wahl "Papier"

// =========================
// Event-Listener
// =========================
// Startet das Spiel, wenn der Button mit der ID 'sozStartButton' geklickt wird.
$(document).ready(function () {
    $('#sozStartButton').click(function () {
        playGame();
    });
});

// =========================
// Funktion: playGame
// =========================
// Führt das Spiel aus. Holt die Eingabe des Benutzers, validiert sie, generiert die Wahl des Computers,
// bestimmt den Gewinner und zeigt das Ergebnis an.
function playGame() {
    // Eingabe des Spielers abrufen und in eine Zahl umwandeln
    let userChoice = parseInt($('#firstNumber').val());

    // Eingabe validieren
    if (!isValidChoice(userChoice)) {
        updateResultDisplay('Bitte nur Zahlen zwischen 1 und 3 eingeben.', 'error'); // Fehlermeldung anzeigen
        return; // Beendet die Funktion, wenn die Eingabe ungültig ist
    }

    // Wahl des Computers generieren
    let computerChoice = getComputerChoice();

    // Gewinner bestimmen
    let result = determineWinner(userChoice, computerChoice);

    // Ergebnis anzeigen
    updateResultDisplay(
        `Spieler: ${choiceToString(userChoice)}. Computer: ${choiceToString(computerChoice)}. ${result}`,
        'success'
    );
}

// =========================
// Funktion: isValidChoice
// =========================
// Überprüft, ob die Eingabe des Benutzers gültig ist (1 = Stein, 2 = Schere, 3 = Papier).
//
// @param {number} choice - Die Eingabe des Benutzers.
// @returns {boolean} - True, wenn die Eingabe gültig ist, andernfalls False.
function isValidChoice(choice) {
    return !isNaN(choice) && choice >= STEIN && choice <= PAPIER;
}

// =========================
// Funktion: getComputerChoice
// =========================
// Generiert die Wahl des Computers (1 = Stein, 2 = Schere, 3 = Papier).
//
// @returns {number} - Die Wahl des Computers.
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1; // Zufällige Zahl zwischen 1 und 3
}

// =========================
// Funktion: determineWinner
// =========================
// Bestimmt den Gewinner basierend auf den Spielregeln.
//
// @param {number} userChoice - Die Wahl des Benutzers.
// @param {number} computerChoice - Die Wahl des Computers.
// @returns {string} - Das Ergebnis des Spiels ('Gewonnen!', 'Verloren!' oder 'Unentschieden!').
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Unentschieden!'; // Beide haben die gleiche Wahl
    } else if (
        (userChoice === STEIN && computerChoice === SCHERE) || // Stein schlägt Schere
        (userChoice === SCHERE && computerChoice === PAPIER) || // Schere schlägt Papier
        (userChoice === PAPIER && computerChoice === STEIN) // Papier schlägt Stein
    ) {
        return 'Gewonnen!'; // Benutzer gewinnt
    } else {
        return 'Verloren!'; // Computer gewinnt
    }
}

// =========================
// Funktion: choiceToString
// =========================
// Wandelt die Wahl (1, 2, 3) in einen lesbaren Text um.
//
// @param {number} choice - Die Wahl (1 = Stein, 2 = Schere, 3 = Papier).
// @returns {string} - Der lesbare Text der Wahl.
function choiceToString(choice) {
    switch (choice) {
        case STEIN:
            return 'Stein';
        case SCHERE:
            return 'Schere';
        case PAPIER:
            return 'Papier';
        default:
            return 'Unbekannt'; // Sollte nicht auftreten
    }
}

// =========================
// Funktion: updateResultDisplay
// =========================
// Zeigt eine Nachricht (Ergebnis oder Fehlermeldung) im HTML an und passt die Hintergrundfarbe an.
//
// @param {string} message - Die anzuzeigende Nachricht.
// @param {string} type - Der Typ der Nachricht ('error' oder 'success').
function updateResultDisplay(message, type) {
    // Wählt das HTML-Element mit der ID 'showCallbackOfChallenge' aus
    const resultElement = $('#showCallbackOfChallenge');

    // Macht das Element sichtbar
    resultElement.css('visibility', 'visible');

    // Setzt die Hintergrundfarbe basierend auf dem Typ der Nachricht
    if (type === 'error') {
        resultElement.css('background-color', '#c22b67'); // Rot für Fehler
    } else if (type === 'success') {
        resultElement.css('background-color', '#28a745'); // Grün für Erfolg
    }

    // Setzt den Inhalt des Elements auf die übergebene Nachricht
    resultElement.html(message);
}
