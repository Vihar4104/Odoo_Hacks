// src/components/AssignTaskPage.js
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import TabView from './TabView';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../config/firebase'; // Adjust import based on your Firebase setup

const AssignTaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [collectors, setCollectors] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // State to hold selected task
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    // Function to fetch tasks from Firestore
    const fetchTasks = async () => {
      const tasksCollection = collection(firestore, 'Special-Requests');
      const q = query(tasksCollection, where('status', '==', 'Requested'));

      try {
        const querySnapshot = await getDocs(q);
        const fetchedTasks = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          fetchedTasks.push({
            id: doc.id,
            description: data.description,
            address: data.address, // Assuming address is an object with society, city, state
            reportedBy: data.username,
            status: data.status,
          });
        });
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Fetch collectors or use dummy data
  useEffect(() => {
    // Dummy collectors for now
    setCollectors([
      { id: 'a', name: 'Collector A' },
      { id: 'b', name: 'Collector B' },
    ]);
  }, []);

  const handleAssignTask = (taskId, collectorId) => {
    // Assign task logic
    console.log(`Task ${taskId} assigned to collector ${collectorId}`);
    // You can implement assignment logic here if needed
  };

  const filteredTasks = tasks.filter((task) => activeTab === 'All' || task.status === activeTab);

  return (
    <div className="assign-task-page p-8 bg-gray-50 min-h-screen">
      <TabView
        tabs={['All', 'Requested']}
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
