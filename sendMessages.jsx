function handleInput(event) {
  const input = event.target.value;
  if (event.key === 'Enter' && input.trim() !== '') {
    setMessages([...messages, { content: input, from: 'user' }]);
    event.target.value = '';
    // Call a function to handle the chatbot's response
  }
}

<input type="text" placeholder="Type your message here" onKeyPress={handleInput} />
