/*
 * JavaScript zur Berechnung des größten gemeinsamen Teilers (ggT)
 * ===============================================================
 * Autoren: GitHub Copilot & Christian Leeser
 * Version: 1.0
 * Datum: 12. April 2025
 * 
 * Beschreibung:
 * Dieses Skript ermöglicht die Berechnung des größten gemeinsamen Teilers (ggT) zweier Zahlen
 * mithilfe des Euklidischen Algorithmus. Es validiert die Benutzereingaben und zeigt das Ergebnis
 * oder eine Fehlermeldung im HTML an.
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - calculateGGT: Holt die Eingaben, validiert sie und berechnet den ggT.
 * - calculateGCD: Implementiert den Euklidischen Algorithmus zur Berechnung des ggT.
 * - updateResultDisplay: Zeigt das Ergebnis oder eine Fehlermeldung im HTML an.
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (12.04.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

$(document).ready(function () {
    // =========================
    // Event-Listener
    // =========================
    // Führt die Funktion `calculateGGT` aus, wenn der Button mit der ID 'sozStartButton' geklickt wird.
    $('#sozStartButton').click(function () {
        calculateGGT();
    });

    /**
     * Holt die Eingabewerte aus den HTML-Input-Feldern, validiert sie und berechnet den ggT.
     * Wenn die Eingaben ungültig sind, wird eine Fehlermeldung angezeigt.
     */
    function calculateGGT() {
        // Holt die Werte aus den Input-Feldern mit den IDs 'firstNumber' und 'secondNumber'.
        let firstNumber = $('#firstNumber').val(); // Erste Zahl
        let secondNumber = $('#secondNumber').val(); // Zweite Zahl

        // Konvertiert die Eingaben von Strings zu Ganzzahlen.
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        // Überprüft, ob die Eingaben gültige Zahlen sind (größer oder gleich 1).
        if (isNaN(firstNumber) || firstNumber < 1 || isNaN(secondNumber) || secondNumber < 1) {
            // Zeigt eine Fehlermeldung an, wenn die Eingaben ungültig sind.
            updateResultDisplay('Bitte gültige Zahlen eintragen.', 'error');
            return; // Beendet die Funktion, wenn die Eingaben ungültig sind.
        }

        // Berechnet den ggT und zeigt das Ergebnis an.
        let ggtResult = calculateGCD(firstNumber, secondNumber);
        updateResultDisplay(`Der größte gemeinsame Teiler von ${firstNumber} und ${secondNumber} ist: ${ggtResult}`, 'success');
    }

    /**
     * Berechnet den größten gemeinsamen Teiler (ggT) zweier Zahlen mit dem Euklidischen Algorithmus.
     * 
     * @param {number} value1 - Die erste Zahl.
     * @param {number} value2 - Die zweite Zahl.
     * @returns {number} - Der größte gemeinsame Teiler (ggT).
     */
    function calculateGCD(value1, value2) {
        // Solange die zweite Zahl nicht 0 ist, wird der Euklidische Algorithmus angewendet.
        while (value2 !== 0) {
            let temp = value2; // Speichert den aktuellen Wert von value2.
            value2 = value1 % value2; // Berechnet den Rest der Division von value1 durch value2.
            value1 = temp; // Setzt value1 auf den vorherigen Wert von value2.
        }
        return value1; // Gibt den ggT zurück, wenn value2 0 ist.
    }

    /**
     * Aktualisiert die Anzeige des Ergebnisses oder einer Fehlermeldung.
     * 
     * @param {string} message - Die anzuzeigende Nachricht (HTML-Format erlaubt).
     * @param {string} type - Der Typ der Nachricht ('error' oder 'success').
     */
    function updateResultDisplay(message, type) {
        // Wählt das HTML-Element mit der ID 'showCallbackOfChallenge' aus.
        const resultElement = $('#showCallbackOfChallenge');
        
        // Macht das Element sichtbar.
        resultElement.css('visibility', 'visible');
        
        // Setzt die Hintergrundfarbe basierend auf dem Typ der Nachricht.
        if (type === 'error') {
            resultElement.css('background-color', '#c22b67'); // Rot für Fehler.
        } else if (type === 'success') {
            resultElement.css('background-color', '#28a745'); // Grün für Erfolg.
        }
        
        // Setzt den Inhalt des Elements auf die übergebene Nachricht.
        resultElement.html(message);
    }
});