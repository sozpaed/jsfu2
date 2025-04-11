/*
 * JavaScript für die Interaktion mit der Benutzeroberfläche und die Code-Prüfung
 * ==============================================================================
 * Autor: Christian Leeser
 * Version: 0.1 (Stand: 08.03.2025)
 * 
 * Inhalt:
 * ----------------------------------------------------------------
 * - Event-Listener für die Toggle-Buttons: Ermöglicht das Ein- und Ausklappen von Code-Lösungen.
 * - checkCodeWithScript: Vergleicht den vom Benutzer eingegebenen Code mit der Musterlösung.
 * - normalizeCode: Hilfsfunktion zur Normalisierung von Code für den Vergleich.
 */

// Event-Listener für die Toggle-Buttons
// -------------------------------------
// Fügt jedem Button mit der Klasse "toggle-button" einen Klick-Event-Listener hinzu.
// Beim Klick wird der zugehörige Code-Bereich (nächstes Geschwisterelement mit der Klasse "code-content")
// ein- oder ausgeklappt.
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const codeContent = button.nextElementSibling;
        if (codeContent && codeContent.classList.contains('code-content')) {
            if (codeContent.style.display === 'none' || codeContent.style.display === '') {
                codeContent.style.display = 'block'; // Code-Bereich anzeigen
                button.textContent = 'Lösung ausblenden'; // Button-Text ändern
            } else {
                codeContent.style.display = 'none'; // Code-Bereich ausblenden
                button.textContent = 'Lösung anzeigen'; // Button-Text ändern
            }
        } else {
            console.error('Fehler: Kein gültiges Element zum Aufklappen gefunden.');
        }
    });
});

document.querySelectorAll('.toggle-button-help').forEach(button => {
    button.addEventListener('click', () => {
        const codeContent = button.nextElementSibling;
        if (codeContent && codeContent.classList.contains('code-content')) {
            if (codeContent.style.display === 'none' || codeContent.style.display === '') {
                codeContent.style.display = 'block'; // Code-Bereich anzeigen
                button.textContent = 'Hilfe ausblenden'; // Button-Text ändern
            } else {
                codeContent.style.display = 'none'; // Code-Bereich ausblenden
                button.textContent = 'Hilfe anzeigen'; // Button-Text ändern
            }
        } else {
            console.error('Fehler: Kein gültiges Element zum Aufklappen gefunden.');
        }
    });
});

// Funktion zur Code-Prüfung mit Script-ID
// ---------------------------------------
// Vergleicht den vom Benutzer eingegebenen Code mit der Musterlösung aus einem Script-Tag.
// Zeigt Feedback an, ob der Code korrekt ist oder nicht.
//
// Parameter:
// - inputId: Die ID des Eingabefelds, in dem der Benutzer seinen Code eingegeben hat.
// - scriptId: Die ID des Script-Tags, das die Musterlösung enthält.
function checkCodeWithScript(inputId, scriptId) {
    const inputField = document.getElementById(inputId);
    const feedback = document.getElementById(`feedback-${inputId}`);
    const userCode = inputField.value.trim(); // Entfernt Leerzeichen am Anfang und Ende

    if (!userCode) {
        feedback.innerText = "Bitte gib einen Code ein, bevor du ihn prüfst.";
        feedback.style.color = "red";
        return;
    }

    try {
        // Führt den Benutzer-Code aus
        const script = document.getElementById(scriptId).innerText.trim();

        // Normalisiert den Benutzer-Code und die Musterlösung
        const normalizedUserCode = normalizeCode(userCode);
        const normalizedExpectedCode = normalizeCode(script);

        // Vergleicht den normalisierten Code
        if (normalizedUserCode === normalizedExpectedCode) {
            feedback.innerText = "Richtig! Dein Code funktioniert wie erwartet.";
            feedback.style.color = "green";
        } else {
            feedback.innerText = "Falsch! Dein Code stimmt nicht mit der Musterlösung überein.";
            feedback.style.color = "red";
        }
    } catch (error) {
        feedback.innerText = `Fehler im Code: ${error.message}`;
        feedback.style.color = "red";
    }
}

// Hilfsfunktion zur Normalisierung von Code
// -----------------------------------------
// Entfernt überflüssige Leerzeichen und Zeilenumbrüche aus einem Code-String,
// um ihn für den Vergleich zu normalisieren.
//
// Parameter:
// - code: Der zu normalisierende Code-String.
//
// Rückgabewert:
// - Der normalisierte Code-String.
function normalizeCode(code) {
    return code
        .replace(/\s+/g, ' ') // Mehrere Leerzeichen durch ein einzelnes ersetzen
        .replace(/\s*;\s*/g, ';') // Leerzeichen um Semikolons entfernen
        .replace(/\s*{\s*/g, '{') // Leerzeichen um geschweifte Klammern entfernen
        .replace(/\s*}\s*/g, '}') // Leerzeichen um geschweifte Klammern entfernen
        .replace(/\s*\(\s*/g, '(') // Leerzeichen um runde Klammern entfernen
        .replace(/\s*\)\s*/g, ')') // Leerzeichen um runde Klammern entfernen
        .trim(); // Anfangs- und Endleerzeichen entfernen
}

function checkM1Answers41() {
    const feedback = document.getElementById('feedback-aufgabe-4-1');
    const option1 = document.getElementById('option4-1-1').checked; // 123variable
    const option2 = document.getElementById('option4-1-2').checked; // meine-variable
    const option3 = document.getElementById('option4-1-3').checked; // meineVariable
    const option4 = document.getElementById('option4-1-4').checked; // var

    // Richtige Antworten: meineVariable (option3)
    if (option1 || option2 || option4 || !option3) {
        feedback.innerText = "Falsch! Nur 'meineVariable' ist ein gültiger Variablenname.";
    } else {
        feedback.innerText = "Richtig! 'meineVariable' ist der einzige gültige Variablenname.";
    }
}

function checkM2Answers41() {
    const feedback = document.getElementById('feedback-aufgabe-4-1');
    const option1 = document.getElementById('option4-1-1').checked; // 123variable
    const option2 = document.getElementById('option4-1-2').checked; // meine-variable
    const option3 = document.getElementById('option4-1-3').checked; // meineVariable
    const option4 = document.getElementById('option4-1-4').checked; // var

    // Richtige Antworten: meineVariable (option3)
    if (option1 || option2 || option4 || !option3) {
        feedback.innerText = "Falsch! Nur <script src='script.js'></script> ist ein gültiger Variablenname.";
    } else {
        feedback.innerText = "Richtig! <script src='script.js'></script> ist der einzige gültige Variablenname.";
    }
}

function checkM1Answers42() {
    const feedback = document.getElementById('feedback-aufgabe-4-2');
    const option1 = document.getElementById('option4-2-1').checked; // Number
    const option2 = document.getElementById('option4-2-2').checked; // String
    const option3 = document.getElementById('option4-2-3').checked; // Boolean
    const option4 = document.getElementById('option4-2-4').checked; // undefined

    // Richtige Antwort: Nur option2 (String) darf ausgewählt sein
    if (option2 && !option1 && !option3 && !option4) {
        feedback.innerText = "Richtig! Es handelt sich um einen String.";
    } else {
        feedback.innerText = "Falsch! Es handelt sich um einen String.";
    }
}

function checkM1Answers43() {
    const feedback = document.getElementById('feedback-aufgabe-4-3');
    const option1 = document.getElementById('option4-3-1').checked; // -
    const option2 = document.getElementById('option4-3-2').checked; // *
    const option3 = document.getElementById('option4-3-3').checked; // +
    const option4 = document.getElementById('option4-3-4').checked; // /

    // Richtige Antwort: Nur option3 (+) darf ausgewählt sein
    if (option3 && !option1 && !option2 && !option4) {
        feedback.innerText = "Richtig! Es handelt sich um das +.";
    } else {
        feedback.innerText = "Falsch! Es handelt sich um das +.";
    }
}

function checkM2Answers43() {
    const feedback = document.getElementById("feedback-aufgabe-4-3");
    const correctAnswers = ["option4-3-1", "option4-3-3"];
    const selectedOptions = Array.from(document.querySelectorAll("#aufgabe-4-3 input:checked")).map(input => input.id);

    if (selectedOptions.length === correctAnswers.length && selectedOptions.every(option => correctAnswers.includes(option))) {
        feedback.innerHTML = "✅ Richtig! Ereignisse sind Aktionen, die auf einer Webseite stattfinden, und können durch Benutzerinteraktionen ausgelöst werden.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Falsch. Überprüfe deine Auswahl. Tipp: Es gibt zwei richtige Antworten.";
        feedback.style.color = "red";
    }
}