document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        addMessage(userInput, 'user');
        getBotResponse(userInput);
        document.getElementById('user-input').value = '';
    }
});

function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.className = ${sender}-message;
    messageElement.textContent = message;
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getBotResponse(userInput) {
    let botResponse = '';

    // Expanded predefined responses
    if (userInput.toLowerCase().includes('hello')) {
        botResponse = 'Hi there! How can I assist you today?';
    } else if (userInput.toLowerCase().includes('check equipment')) {
        botResponse = 'Let me check the equipment... Everything seems to be functioning normally.';
    } else if (userInput.toLowerCase().includes('goodbye')) {
        botResponse = 'Goodbye! Have a great day!';
    } else if (userInput.toLowerCase().includes('how are you')) {
        botResponse = 'I’m just a bot, but I’m here to help you!';
    } else if (userInput.toLowerCase().includes('what is your name')) {
        botResponse = 'I’m a simple chatbot created to assist you.';
    } else if (userInput.toLowerCase().includes('help')) {
        botResponse = 'I can help with basic queries. Try asking "hello", "check equipment", or "goodbye".';
    } else if (userInput.toLowerCase().includes('thank you')) {
        botResponse = 'You’re welcome! If you need anything else, feel free to ask.';
    } else {
        botResponse = 'Sorry, I am not sure how to respond to that.';
    }

    addMessage(botResponse, 'bot');
}
