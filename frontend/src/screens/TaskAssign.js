// src/pages/TaskAssign.js
import React from 'react';
import AssignTaskPage from '../components/AssignTaskPage';
import AdminNavBar from '../components/AdminNavbar';
const TaskAssign = () => {
  return (
    <>
    <AdminNavBar />
    <div className='pt-16'>
    <AssignTaskPage />
    </div>
    </>
  );
};

export default TaskAssign;
