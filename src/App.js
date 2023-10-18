import React from 'react';
import './App.css';
import ChatBot from './Components/ChatBot/ChatBot';
import RecipeSearch from './Components/Food/RecipeSearch';

function App() {
  return (
    <div className="App">
      <ChatBot />
      <RecipeSearch />
    </div>
  );
}

export default App;
