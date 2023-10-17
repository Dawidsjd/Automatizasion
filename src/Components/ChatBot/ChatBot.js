import React, { useState } from 'react';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');

  const addMessage = (content, role) => {
    setMessages(prevMessages => [...prevMessages, { content, role }]);
  };
  

  const handleUserMessage = async (e) => {
    e.preventDefault();
    addMessage(query, 'user');
    await fetchData(query);
    setQuery('');
  };

  const fetchData = async (userMessage) => {
    const url = 'https://lemurbot.p.rapidapi.com/chat';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'c1fa8c4c47mshc735e397e60a5dfp16d672jsn213805a23649',
        'X-RapidAPI-Host': 'lemurbot.p.rapidapi.com'
      },
      body: JSON.stringify({
        bot: 'dilly',
        client: 'd531e3bd-b6c3-4f3f-bb58-a6632cbed5e2',
        message: userMessage
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      addMessage(result.data.conversation.output, 'bot');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>ChatBot</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '300px' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            {message.role === 'user' ? 'You: ' : 'Bot: '}
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleUserMessage}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Enter your message" 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBot;
