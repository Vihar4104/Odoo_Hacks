// src/pages/Home.js
import React from 'react';
import CalendarSchedule from '../components/CalendarSchedule';
import AdminNavBar from '../components/AdminNavbar'


const Schedule = () => {
  return (
    <>
    <div><AdminNavBar /></div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CalendarSchedule />
    </div>
    </>
  );
};

export default Schedule;
