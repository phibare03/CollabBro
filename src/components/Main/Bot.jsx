import React, { useState } from 'react';
import axios from 'axios';

const Bot = ({ apiKey }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'text-davinci-002',
          messages: [{ role: 'user', content: inputText }]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        }
      );
      const botReply = response.data.choices[0].message.content;
      setMessages([...messages, { text: botReply, sender: 'bot' }]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="chatbot-container fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg">
      <div className="max-h-60 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded-lg p-2 ${
              message.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-gray-800 self-start'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="p-4 flex items-center">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-grow px-2 py-1 rounded-md border border-gray-400 mr-2 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Bot;
