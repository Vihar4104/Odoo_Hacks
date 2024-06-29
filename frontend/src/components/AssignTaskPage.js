// src/components/AssignTaskPage.js
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import TabView from './TabView';

const AssignTaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [collectors, setCollectors] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    // Fetch tasks and collectors from an API or use dummy data
    setTasks([
      { id: 1, description: 'Litter at park', location: 'Central Park', reportedBy: 'John Doe', status: 'Pending' },
      { id: 2, description: 'Overflowing bin', location: '5th Avenue', reportedBy: 'Jane Smith', status: 'In Progress' },
    ]);
    setCollectors([
      { id: 'a', name: 'Collector A' },
      { id: 'b', name: 'Collector B' },
    ]);
  }, []);

  const handleAssignTask = (taskId, collectorId) => {
    // Assign task logic
    console.log(`Task ${taskId} assigned to collector ${collectorId}`);
  };

  const filteredTasks = tasks.filter((task) => activeTab === 'All' || task.status === activeTab);

  return (
    <div className="assign-task-page p-8 bg-gray-50 min-h-screen">
      <TabView
        tabs={['All', 'Pending', 'In Progress', 'Completed']}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        <TaskList tasks={filteredTasks} onSelectTask={setSelectedTask} />
        <TaskDetails task={selectedTask} collectors={collectors} onAssignTask={handleAssignTask} />
      </div>
    </div>
  );
};

export default AssignTaskPage;
