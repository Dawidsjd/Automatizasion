import React, { useState } from "react";
import "./App.css";
import ChatBot from "./Components/features/ChatBot/ChatBot";
import RecipeSearch from "./Components/features/Food/RecipeSearch";
import WikiSearch from "./Components/features/Wikipedia/WikiSearch";
import ToDoList from "./Components/ToDoList/ToDoList";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeDashboard from "./pages/Dashboard/HomeDashboard";
import SchoolDashboard from "./pages/Dashboard/SchoolDashboard";
import LogIn from "./pages/LogIn/LogIn";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Dziennik from "./Components/features/Dziennik/Dziennik";

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
          <Route
            exact
            path="/HomeDashboard/CookingAssistant"
            element={
              <>
                <RecipeSearch />
                <ChatBot />
              </>
            }
          />
          <Route exact path="/HomeDashboard/ToDoList" element={
          <>
          <ToDoList />
          <ChatBot/>
          </>
          } />
          <Route exact path="/Support" element={<Support />} />
        </Routes>
      </BrowserRouter>
      {/* <ChatBot /> */}
      {/* <Dziennik /> sry chopaki na testa wjebalem */}
    </>
  );
}

export default App;
