// src/pages/TaskAssign.js
import React from 'react';
import AssignTaskPage from '../components/AssignTaskPage';
import AdminNavBar from '../components/AdminNavbar';

const TaskAssign = () => {
  return (
    <>
      <div className='bg-black'>
        <AdminNavBar />
        <div className='bg-black pt-10'>
          <AssignTaskPage />
        </div>
      </div>
    </>
  );
};

export default TaskAssign;
