import React, { useState, useRef, useEffect } from 'react';
import styles from './style';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import BotAvatar from '../../../assets/200.gif';
import UserAvatar from '../../../assets/gagajhagha.jpg';

function ChatBot() {
  const [messages, setMessages] = useState([
    { content: 'Witaj! Jestem twoim małym gnojkiem pomocnikiem. Jak mogę Ci pomóc? 😊', role: 'bot' },
  ]);
  const [query, setQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false); 
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content, role) => {
    setMessages(prevMessages => [...prevMessages, { content, role }]);
  };

  const handleUserMessage = async (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      setQuery('');
      addMessage(query, 'user');
      await fetchData(query);
    }
  };

  const fetchData = async (userMessage) => {
    setIsBotTyping(true);
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
      setIsBotTyping(false);
      addMessage(result.data.conversation.output, 'bot');
    } catch (error) {
      setIsBotTyping(false);
      console.error(error);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div style={styles.container}>
      {isChatOpen ? (
        <div style={styles.ChatContainer}>
          <div style={styles.Banner}>ChatBot</div>
          <div style={styles.MessagesContainer}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: '10px',
                  fontSize: "14px",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {message.role === 'user' ? (
                  <>
                    <div
                      style={{
                        backgroundColor: 'purple',
                        color: '#fff',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        maxWidth: '60%',
                      }}
                    >
                      {message.content}
                    </div>
                    <img
                      src={UserAvatar}
                      alt="User Avatar"
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        marginLeft: '10px',
                      }}
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={BotAvatar}
                      alt="Bot Avatar"
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        marginRight: '10px',
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: '#f0f0f0',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        maxWidth: '60%',
                      }}
                    >
                      {message.content}
                    </div>
                  </>
                )}
              </div>
            ))}
            {isBotTyping && <div style={{ alignSelf: 'flex-start', color: '#999' }}>Bot is typing...</div>}
            <div ref={messagesEndRef} />
          </div>
          <form style={styles.SendContainer} onSubmit={handleUserMessage}>
            <input
              type="text"
              style={styles.MsgSend}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your message"
              disabled={messages.length > 0 && messages[messages.length - 1].role === 'user'}
            />
            <button style={styles.MsgSendBtn} type="submit"><SendIcon /></button>
          </form>
          <button style={styles.toggleButton} onClick={toggleChat}><CloseIcon style={styles.chatIcon}/></button>
        </div>
      ) : (
        <button style={styles.toggleButton} onClick={toggleChat}><ChatIcon style={styles.chatIcon}/></button>
      )}
    </div>
  );
}

export default ChatBot;
