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
