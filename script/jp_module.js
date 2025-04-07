// Event-Listener für die Toggle-Buttons
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const codeContent = button.nextElementSibling;
        if (codeContent && codeContent.classList.contains('code-content')) {
            if (codeContent.style.display === 'none' || codeContent.style.display === '') {
                codeContent.style.display = 'block';
                button.textContent = 'Lösung ausblenden';
            } else {
                codeContent.style.display = 'none';
                button.textContent = 'Lösung anzeigen';
            }
        } else {
            console.error('Fehler: Kein gültiges Element zum Aufklappen gefunden.');
        }
    });
});

// Funktion zur Code-Prüfung mit Script-ID
function checkCodeWithScript(inputId, scriptId) {
    const userCode = document.getElementById(inputId).value.trim();
    const solutionScript = document.getElementById(scriptId);

    if (!solutionScript) {
        console.error(`Script mit der ID "${scriptId}" wurde nicht gefunden.`);
        return;
    }

    // Musterlösung aus dem Script-Tag extrahieren
    const solution = solutionScript.textContent.trim();

    // Feedback-Element finden
    const feedbackElement = document.getElementById(`feedback-${inputId.split('-').slice(1).join('-')}`);

    try {
        // Beide Codes ausführen und die Ergebnisse vergleichen
        const userResult = eval(userCode);
        const solutionResult = eval(solution);

        if (userResult === solutionResult) {
            feedbackElement.textContent = "✅ Der Code ist korrekt!";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "❌ Der Code ist nicht korrekt. Versuche es erneut.";
            feedbackElement.style.color = "red";
        }
    } catch (error) {
        feedbackElement.textContent = "❌ Es gab einen Fehler beim Ausführen deines Codes. Überprüfe ihn bitte.";
        feedbackElement.style.color = "red";
        console.error("Fehler beim Ausführen des Codes:", error);
    }
}

// Hilfsfunktion zur Normalisierung von Code (entfernt Leerzeichen und Zeilenumbrüche)
function normalizeCode(code) {
    return code
        .replace(/\s+/g, ' ') // Mehrere Leerzeichen durch ein einzelnes ersetzen
        .replace(/\s*;\s*/g, ';') // Leerzeichen um Semikolons entfernen
        .trim(); // Anfangs- und Endleerzeichen entfernen
}