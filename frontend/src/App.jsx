import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import AdminHome from './screens/AdminHome';
import HomePage from './screens/HomePage';
import DefaultPage from './screens/DefaultPage';
import AdditionalInfoPage from './screens/AdditionalInfopage';
import AddGarbedgeCollectorPage from './screens/AddGarbedgeCollectorPage';
import Home from './screens/Schedule';
import TaskAssign from './screens/TaskAssign'
import Schedule from './screens/Schedule';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/additional-info" element={<AdditionalInfoPage />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/assign-garbege-collector-role" element={<AddGarbedgeCollectorPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/admin/TA" element={<TaskAssign />} />
          <Route path="/admin/schedule" element={<Schedule />} />
     
        </Routes>
      </Router>
    </div>
  );
}

export default App;