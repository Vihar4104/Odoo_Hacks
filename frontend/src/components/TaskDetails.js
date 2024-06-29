// src/components/TaskDetails.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faTasks } from '@fortawesome/free-solid-svg-icons';

const TaskDetails = ({ task, collectors, onAssignTask }) => {
  const [selectedCollector, setSelectedCollector] = useState('');

  const handleAssign = () => {
    if (selectedCollector) {
      onAssignTask(task.id, selectedCollector);
    }
  };

  return (
    <div className="task-details p-8 border rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 w-full lg:w-1/2">
      <h2 className="text-3xl font-bold mb-6">Task Details</h2>
      {task ? (
        <>
          <p className="mb-4 flex items-center text-lg">
            <FontAwesomeIcon icon={faTasks} className="text-blue-500 mr-2" />
            <strong>Description:</strong> {task.description}
          </p>
          <p className="mb-4 flex items-center text-lg">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-2" />
            <strong>Location:</strong> {task.location}
          </p>
          <p className="mb-6 flex items-center text-lg">
            <FontAwesomeIcon icon={faUser} className="text-green-500 mr-2" />
            <strong>Reported by:</strong> {task.reportedBy}
          </p>

          <h3 className="text-2xl font-bold mb-4">Assign to Collector</h3>
          <select
            value={selectedCollector}
            onChange={(e) => setSelectedCollector(e.target.value)}
            className="block w-full p-3 border rounded mb-6 text-lg"
          >
            <option value="">Select Collector</option>
            {collectors.map((collector) => (
              <option key={collector.id} value={collector.id}>
                {collector.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleAssign}
            className="px-6 py-3 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition-colors text-lg"
          >
            Assign Task
          </button>
        </>
      ) : (
        <p className="text-gray-500 text-lg">Select a task to see details</p>
      )}
    </div>
  );
};

export default TaskDetails;
