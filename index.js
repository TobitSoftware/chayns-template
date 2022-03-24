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

function sendMessage() {
    var inputElement = document.getElementById('messageInput');

    chayns.intercom.sendMessageToPage({ text: inputElement.value });

    chayns.dialog.alert(null, 'Deine Nachricht wurde erfolgreich gesendet.');

    inputElement.value = "";

    var buttonElement = document.getElementById('sendButton');

    buttonElement.classList.add('button--disabled');

    buttonElement.setAttribute('disabled', true);
}