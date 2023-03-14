function handleInput(event) {
  const input = event.target.value;
  if (event.key === 'Enter' && input.trim() !== '') {
    setMessages([...messages, { content: input, from: 'user' }]);
    event.target.value = '';
    handleResponse();
  }
}
