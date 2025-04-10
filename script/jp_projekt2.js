/*
 * JavaScript zur Berechnung des größten gemeinsamen Teilers (ggT)
 * ===============================================================
 * Autor: Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version: 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - calculateGgTOfTwoValues: Berechnung des ggT nach dem Euklidischen Algorithmus
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

$(document).ready(function () {
    // Event-Listener: Führt die Funktion `calculateGGT` aus, wenn der Button mit der ID 'sozStartButton' geklickt wird.
    $('#sozStartButton').click(function () {
        calculateGGT();
    });

    /**
     * Holt die Eingabewerte aus den HTML-Input-Feldern, validiert sie und berechnet den ggT.
     * Wenn die Eingaben ungültig sind, wird eine Fehlermeldung angezeigt.
     */
    function calculateGGT() {
        // Holt die Werte aus den Input-Feldern mit den IDs 'firstNumber' und 'secondNumber'.
        let firstNumber = $('#firstNumber').val();
        let secondNumber = $('#secondNumber').val();

        // Konvertiert die Eingaben von Strings zu Ganzzahlen.
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        // Überprüft, ob die Eingaben gültige Zahlen sind (größer oder gleich 1).
        if (isNaN(firstNumber) || firstNumber < 1 || isNaN(secondNumber) || secondNumber < 1) {
            updateResultDisplay('Bitte gültige Zahlen eintragen.', 'error');
            return;
        }

        // Berechnet den ggT und zeigt das Ergebnis an.
        let ggtResult = calculateGCD(firstNumber, secondNumber);
        updateResultDisplay(`Der größte gemeinsame Teiler von ${firstNumber} und ${secondNumber} ist: ${ggtResult}`, 'success');
    }

    /**
     * Berechnet den größten gemeinsamen Teiler (ggT) zweier Zahlen mit dem Euklidischen Algorithmus.
     * 
     * @param {number} a - Die erste Zahl.
     * @param {number} b - Die zweite Zahl.
     * @returns {number} - Der größte gemeinsame Teiler (ggT).
     */
    function calculateGCD(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
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