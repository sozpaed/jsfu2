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

// Funktion zur Code-Prüfung mit Script-ID
// ---------------------------------------
// Vergleicht den vom Benutzer eingegebenen Code mit der Musterlösung aus einem Script-Tag.
// Zeigt Feedback an, ob der Code korrekt ist oder nicht.
//
// Parameter:
// - inputId: Die ID des Eingabefelds, in dem der Benutzer seinen Code eingegeben hat.
// - scriptId: Die ID des Script-Tags, das die Musterlösung enthält.
function checkCodeWithScript(inputId, scriptId) {
    const userCode = document.getElementById(inputId).value.trim(); // Benutzer-Code abrufen und trimmen
    const solutionScript = document.getElementById(scriptId); // Musterlösung abrufen

    if (!solutionScript) {
        console.error(`Script mit der ID "${scriptId}" wurde nicht gefunden.`);
        return;
    }

    // Musterlösung aus dem Script-Tag extrahieren
    const solution = solutionScript.textContent.trim();

    // Feedback-Element finden (z. B. "feedback-aufgabe-4-1")
    const feedbackElement = document.getElementById(`feedback-${inputId.split('-').slice(1).join('-')}`);

    try {
        // Beide Codes ausführen und die Ergebnisse vergleichen
        const userResult = eval(userCode); // Benutzer-Code ausführen
        const solutionResult = eval(solution); // Musterlösung ausführen

        if (userResult === solutionResult) {
            // Feedback bei korrektem Code
            feedbackElement.textContent = "✅ Der Code ist korrekt!";
            feedbackElement.style.color = "green";
        } else {
            // Feedback bei falschem Code
            feedbackElement.textContent = "❌ Der Code ist nicht korrekt. Versuche es erneut.";
            feedbackElement.style.color = "red";
        }
    } catch (error) {
        // Feedback bei einem Fehler im Benutzer-Code
        feedbackElement.textContent = "❌ Es gab einen Fehler beim Ausführen deines Codes. Überprüfe ihn bitte.";
        feedbackElement.style.color = "red";
        console.error("Fehler beim Ausführen des Codes:", error);
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
        .trim(); // Anfangs- und Endleerzeichen entfernen
}

function checkAnswers41() {
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

function checkAnswers42() {
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

function checkAnswers43() {
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