/*
 * JavaScript zum 1x1 (Einmaleins)
 * ================================
 * Autor: Christian Leeser (camber.leaflet_0z@icloud.com)
 * Version: 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - getValueForMulti: Holt die Eingaben, validiert sie und erstellt die Multiplikationsreihe.
 * - createMultiplicationRow: Erstellt die Multiplikationsreihe basierend auf den Eingaben.
 * - updateResultDisplay: Zeigt das Ergebnis oder eine Fehlermeldung im HTML an.
 * 
 * Lizenz:
 * ----------------------------------------------------------------
 * Creative-Commons CC BY-SA 4.0 by Christian Leeser (08.03.2025)
 * https://creativecommons.org/licenses/by-sa/4.0/
 */

$(document).ready(function () {
    // Event-Listener: Führt die Funktion getValueForMulti aus, wenn der Button mit der ID 'sozStartButton' geklickt wird.
    $('#sozStartButton').click(function () {
        getValueForMulti();
    });

    /**
     * Holt die Eingabewerte aus den HTML-Input-Feldern, validiert sie und erstellt die Multiplikationsreihe.
     * Wenn die Eingaben ungültig sind, wird eine Fehlermeldung angezeigt.
     */
    function getValueForMulti() {
        // Holt die Werte aus den Input-Feldern mit den IDs 'firstNumber' und 'secondNumber'.
        let valueOfRow = $('#firstNumber').val(); // Erste Zahl (Multiplikator).
        let numberOfRow = $('#secondNumber').val(); // Anzahl der Reihen (Multiplikanden).

        // Konvertiert die Eingaben von Strings zu Ganzzahlen.
        valueOfRow = parseInt(valueOfRow);
        numberOfRow = parseInt(numberOfRow);

        // Überprüft, ob die Eingaben gültige Zahlen sind (größer oder gleich 1).
        if (isNaN(valueOfRow) || valueOfRow < 1 || isNaN(numberOfRow) || numberOfRow < 1) {
            // Zeigt eine Fehlermeldung an, wenn die Eingaben ungültig sind.
            updateResultDisplay('Bitte gültige Zahlen eintragen.', 'error');
            return; // Beendet die Funktion, wenn die Eingaben ungültig sind.
        }

        // Erstellt die Multiplikationsreihe und zeigt das Ergebnis an.
        let resultOfMulti = createMultiplicationRow(valueOfRow, numberOfRow);
        updateResultDisplay(resultOfMulti, 'success');
    }

    /**
     * Erstellt eine Multiplikationsreihe basierend auf den übergebenen Werten.
     * 
     * @param {number} valueOfRow - Die Basiszahl (Multiplikator).
     * @param {number} numberOfRow - Die Anzahl der Multiplikanden.
     * @returns {string} - Die HTML-formatierte Multiplikationsreihe.
     */
    function createMultiplicationRow(valueOfRow, numberOfRow) {
        // Erstellt den Header für die Multiplikationsreihe.
        let result = `<p><b>Multiplikationsreihe für ${valueOfRow}:</b></p>`;
        
        // Fügt für jeden Multiplikanden (1 bis numberOfRow) eine Zeile hinzu.
        for (let i = 1; i <= numberOfRow; i++) {
            result += `${valueOfRow} x ${i} = ${valueOfRow * i}<br>`;
        }
        
        // Gibt die vollständige Multiplikationsreihe als String zurück.
        return result;
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