// src/pages/Home.js
import React from 'react';
import CalendarSchedule from '../components/CalendarSchedule';
import ReportingForm from '../components/ReportingForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CalendarSchedule />
    </div>
  );
};

export default Home;
