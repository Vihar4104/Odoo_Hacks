import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import AdminHome from './screens/AdminHome';
import HomePage from './screens/HomePage';
import DefaultPage from './screens/DefaultPage';
import AdditionalInfoPage from './screens/AdditionalInfopage';
import AddGarbedgeCollectorPage from './screens/AddGarbedgeCollectorPage';
import Home from './screens/Home';
import ResponceForm from './screens/ResponceForm';
import ReportHistoryScreen from './screens/ReportHistoryScreen';
import TaskAssign from './screens/TaskAssign';

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
          <Route path="/admin/assign-task" element={<TaskAssign />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-complaint" element={<ResponceForm />} />
          <Route path="/notifications" element={<ReportHistoryScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;