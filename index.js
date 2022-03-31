/**
 * EN: This function activates and deactivates the button
 * with the ID "sendButton". For this purpose, the current value
 * of the input field is taken and the class of the button is set accordingly.
 * 
 * DE: Diese Funktion aktiviert und deaktiviert den Button
 * mit der ID "sendButton". Dazu wird der aktuelle Wert des Eingabefeld
 * genommen und entsprechend die Klasse des Button gesetzt.
 */
function handleInput(value) {
    var buttonElement = document.getElementById('sendButton');

    if (value.trim() === '') {
        buttonElement.classList.add('button--disabled');

        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove('button--disabled');
        
        buttonElement.removeAttribute('disabled');
    }
}

/**
 * EN: This function sends a message with the content of the element
 * with the ID "messageInput" as chat message to the current page.
 * 
 * DE: Diese Funktion sendet eine Nachricht mit dem Inhalt des Elements
 * mit der ID "messageInput" als Chat Nachricht an die aktuelle Seite.
 */
function sendMessage() {
    var inputElement = document.getElementById('messageInput');

    chayns.intercom.sendMessageToPage({ text: inputElement.value });

    chayns.dialog.alert(null, 'Deine Nachricht wurde erfolgreich gesendet.');

    inputElement.value = "";

    var buttonElement = document.getElementById('sendButton');

    buttonElement.classList.add('button--disabled');

    buttonElement.setAttribute('disabled', true);
}