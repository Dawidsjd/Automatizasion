import React from 'react';
import './App.css';
import ChatBot from './Components/ChatBot/ChatBot';
import RecipeSearch from './Components/Food/RecipeSearch';
import Search from './Components/Wikipedia/Search';

function App() {
  return (
    <div className="App">
      {/* <ChatBot />
      <RecipeSearch /> */}
    <Search />
    </div>
  );
}

export default App;
