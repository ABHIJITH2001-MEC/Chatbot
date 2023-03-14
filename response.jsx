function handleResponse() {
  const response = 'This is a response from the chatbot';
  setMessages([...messages, { content: response, from: 'chatbot' }]);
}
