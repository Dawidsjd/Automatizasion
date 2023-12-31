import React, { useState } from 'react';
import './App.css';
import ChatBot from './Components/features/ChatBot/ChatBot';
import RecipeSearch from './Components/features/Food/RecipeSearch';
import WikiSearch from './Components/features/Wikipedia/WikiSearch';
import ToDoList from './Components/ToDoList/ToDoList';
import Note from './Components/Note/Note';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeDashboard from './pages/Dashboard/HomeDashboard';
import SchoolDashboard from './pages/Dashboard/SchoolDashboard';
import LogIn from './pages/Safety/LogIn';
import Register from './pages/Safety/Register';
import Settings from './pages/Settings/Settings';
import Support from './pages/Support/Support';
import Reminder from './Components/features/Reminders/Reminders';
import Diary from './Components/features/Diary/Diary';
import Profile from './pages/Settings/Profile';
import Security from './pages/Settings/Security';
import Application from './pages/Settings/Application';
import TermsAndConditions from './pages/PrivacyPolicy&Terms/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy&Terms/PrivacyPolicy';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            exact
            path='/HomeDashboard'
            element={
              <>
                <HomeDashboard />
                <ChatBot />
              </>
            }
          />
          <Route
            exact
            path='/SchoolDashboard'
            element={
              <>
                <SchoolDashboard />
                <ChatBot />
              </>
            }
          />
          <Route exact path='/logIn' element={<LogIn />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/Settings' element={<Settings />} />
          <Route exact path='/Settings/profile' element={<Profile />} />
          <Route exact path='/Settings/security' element={<Security />} />
          <Route exact path='/Settings/Application' element={<Application />} />
          <Route
            exact
            path='/TermsAndConditions'
            element={<TermsAndConditions />}
          />
          <Route
            exact
            path='/HomeDashboard/CookingAssistant'
            element={
              <>
                <RecipeSearch />
                <ChatBot />
              </>
            }
          />
          <Route exact path='/HomeDashboard/ToDoList' element={<ToDoList />} />
          <Route exact path='/Support' element={<Support />} />
          <Route
            exact
            path='/HomeDashboard/ToDoList'
            element={
              <>
                <ToDoList />
                <ChatBot />
              </>
            }
          />
          <Route exact path='/Support' element={<Support />} />
          <Route
            exact
            path='/SchoolDashboard/Wikipedia'
            element={<WikiSearch />}
          />
          <Route exact path='/SchoolDashboard/Notes' element={<Note />} />
          <Route
            exact
            path='/SchoolDashboard/Reminder'
            element={<Reminder />}
          />
          <Route exact path='/SchoolDashboard/Diary' element={<Diary />} />
          <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
