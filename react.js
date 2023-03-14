import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="chatbot">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="message-content">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="input">
        <input type="text" placeholder="Type your message here" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
