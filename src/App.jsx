import React from "react";
import "./App.css";
import ChatBot from "./Components/features/ChatBot/ChatBot";
import RecipeSearch from "./Components/features/Food/RecipeSearch";
import WikiSearch from "./Components/features/Wikipedia/WikiSearch";
import WeatherData from "./Components/features/Weather/WeatherData";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeDashboard from "./pages/HomeDashboard";
import SchoolDashboard from "./pages/SchoolDashboard";

function App() {
  return (
    <>
      <Home />
      <BrowserRouter>
        <Routes>
          <Route exact path="/HomeDashboard" element={<HomeDashboard />} />
          <Route exact path="/SchoolDashboard" element={<SchoolDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
