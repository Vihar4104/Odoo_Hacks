import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import AdminHome from './screens/AdminHome';
import HomePage from './screens/HomePage';
import DefaultPage from './screens/DefaultPage';
import AdditionalInfoPage from './screens/AdditionalInfopage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/additional-info" element={<AdditionalInfoPage />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;