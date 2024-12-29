// Initialize chat elements
var chatMessages = document.getElementById('chat-messages');
var userInput = document.getElementById('user-input');
var sendButton = document.getElementById('send-button');

// Groq API endpoint
var GROQ_API_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';

// Function to add a message to the chat
function addMessage(content, isUser) {
  var messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
  messageElement.textContent = content;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to get chat completion from Groq API
function getGroqChatCompletion(message) {
  return fetch(GROQ_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + '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'
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [
        { role: 'system', content: 'You are a helpful assistant for women\'s menopause wellness.' },
        { role: 'user', content: message }
      ]
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    return data.choices[0] && data.choices[0].message && data.choices[0].message.content 
      ? data.choices[0].message.content 
      : 'Sorry, I couldn\'t generate a response.';
  });
}

// Event listener for send button
sendButton.addEventListener('click', function() {
  var message = userInput.value.trim();
  if (message) {
    addMessage(message, true);
    userInput.value = '';

    // Show typing indicator
    addMessage('Typing...', false);

    getGroqChatCompletion(message)
      .then(function(response) {
        // Remove typing indicator
        chatMessages.removeChild(chatMessages.lastChild);

        addMessage(response, false);
      })
      .catch(function(error) {
        console.error('Error:', error);
        
        // Remove typing indicator
        chatMessages.removeChild(chatMessages.lastChild);

        addMessage('Sorry, there was an error processing your request.', false);
      });
  }
});

// Event listener for Enter key
userInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});

// Initial bot message
addMessage('Hello! I\'m here to help you with any questions about menopause and women\'s wellness. How can I assist you today?', false);