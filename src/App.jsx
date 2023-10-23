import React from "react";
import "./App.css";
import ChatBot from "./Components/features/ChatBot/ChatBot";
import RecipeSearch from "./Components/features/Food/RecipeSearch";
import WikiSearch from "./Components/features/Wikipedia/WikiSearch";
import WeatherData from "./Components/features/Weather/WeatherData";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Home />
      {/* <ChatBot />*/}
      {/* <RecipeSearch />  */}
      {/* <WikiSearch /> */}
      {/* <WeatherData /> */}
    </>
  );
}

export default App;
