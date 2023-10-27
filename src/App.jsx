import React, { useState } from "react";
import "./App.css";
import ChatBot from "./Components/features/ChatBot/ChatBot";
import RecipeSearch from "./Components/features/Food/RecipeSearch";
import WikiSearch from "./Components/features/Wikipedia/WikiSearch";
import WeatherData from "./Components/features/Weather/WeatherData";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeDashboard from "./pages/HomeDashboard";
import SchoolDashboard from "./pages/SchoolDashboard";
import LogIn from "./pages/LogIn/LogIn";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/HomeDashboard"
            element={
              <>
                <HomeDashboard />
                <ChatBot />
              </>
            }
          />
          <Route
            exact
            path="/SchoolDashboard"
            element={
              <>
                <SchoolDashboard />
                <ChatBot />
              </>
            }
          />
          <Route exact path="/logIn" element={<LogIn />} />
          <Route exact path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      {/* <ChatBot /> */}
      {/* <Dziennik /> sry chopaki na testa wjebalem */}
    </>
  );
}

export default App;



