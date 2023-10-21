import React from 'react';
import './App.css';
import ChatBot from './Components/ChatBot/ChatBot';
import RecipeSearch from './Components/Food/RecipeSearch';
import WikiSearch from './Components/Wikipedia/WikiSearch';
import WeatherData from './Components/Weather/WeatherData';

function App() {
  return (
    <div className="App">
      {/* <ChatBot />
      <RecipeSearch /> */}
    {/* <WikiSearch /> */}
    <WeatherData />
    </div>
  );
}

export default App;
