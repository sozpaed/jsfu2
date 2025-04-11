/*
 * Spiel: Stein, Schere, Papier
 * ============================
 * Autor: Christian Leeser
 * Version: 0.3 (Stand: 11.04.2025)
 */

// Spieloptionen als Konstanten
const STEIN = 1;
const SCHERE = 2;
const PAPIER = 3;

// Startet das Spiel, wenn der Button geklickt wird
$(document).ready(function () {
    $('#sozStartButton').click(function () {
        playGame();
    });
});

// Führt das Spiel aus
function playGame() {
    // Eingabe des Spielers abrufen und in eine Zahl umwandeln
    let userChoice = parseInt($('#firstNumber').val());

    // Eingabe validieren
    if (!isValidChoice(userChoice)) {
        updateResultDisplay('Bitte nur Zahlen zwischen 1 und 3 eingeben.', 'error');
        return;
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

// Überprüft, ob die Eingabe gültig ist
function isValidChoice(choice) {
    return !isNaN(choice) && choice >= STEIN && choice <= PAPIER;
}

// Generiert die Wahl des Computers (1 = Stein, 2 = Schere, 3 = Papier)
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

// Bestimmt den Gewinner basierend auf den Spielregeln
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Unentschieden!';
    } else if (
        (userChoice === STEIN && computerChoice === SCHERE) || // Stein schlägt Schere
        (userChoice === SCHERE && computerChoice === PAPIER) || // Schere schlägt Papier
        (userChoice === PAPIER && computerChoice === STEIN) // Papier schlägt Stein
    ) {
        return 'Gewonnen!';
    } else {
        return 'Verloren!';
    }
}

// Wandelt die Wahl (1, 2, 3) in einen lesbaren Text um
function choiceToString(choice) {
    switch (choice) {
        case STEIN:
            return 'Stein';
        case SCHERE:
            return 'Schere';
        case PAPIER:
            return 'Papier';
        default:
            return 'Unbekannt';
    }
}

// Zeigt eine Nachricht (Ergebnis oder Fehlermeldung) im HTML an und passt die Hintergrundfarbe an
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
