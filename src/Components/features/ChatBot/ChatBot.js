import React, { useState } from 'react';
import styles from './style';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false); // Dodajemy nowy stan

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

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); // Zmieniamy stan po kliknięciu
  };

  return (
    <div style={styles.container}>
      
      {isChatOpen && (
        <div style={styles.ChatContainer}>
        <div style={styles.Banner}>ChatBot</div>
        <div style={styles.MessagesContainer}>
          {messages.map((message, index) => (
            <div key={index} style={{
              marginBottom: '10px',
              fontSize: "14px",
              alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: message.role === 'user' ? 'purple' : '#f0f0f0',
              color: message.role === 'user' ? '#fff' : 'inherit', // Ustawiamy kolor tekstu tylko dla wiadomości od użytkownika
              padding: '5px',
              borderRadius: '5px'
            }}>
              {message.role === 'user' ? 'You: ' : 'Bot: '}
              {message.content}
            </div>
          ))}
        </div>
        <form style={styles.SendContainer} onSubmit={handleUserMessage}>
        <input 
          type="text" 
          style={styles.MsgSend}
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Enter your message" 
        />
        <button style={styles.MsgSendBtn} type="submit"><SendIcon /></button>
      </form>
      </div>
      )}
      <button style={styles.toggleButton} onClick={toggleChat}><ChatIcon style={styles.chatIcon}/></button>
    </div>
  );
}

export default ChatBot;