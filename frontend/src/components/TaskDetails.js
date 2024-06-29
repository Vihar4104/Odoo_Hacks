// src/components/TaskDetails.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faTasks } from '@fortawesome/free-solid-svg-icons';
import { firebase, firestore } from '../config/firebase'; // Ensure this is your correct Firebase configuration import
import { collection, query, where, getDocs, updateDoc } from 'firebase/firestore';

const TaskDetails = ({ task, onAssignTask }) => {
  const [selectedCollector, setSelectedCollector] = useState('');

  const collectors = [
    { id: 1, name: 'Rameshbhai' },
    { id: 2, name: 'Kalu Bhai' },
    { id: 3, name: 'Chachu Bhai' }
  ];

  const handleAssign = async () => {
    if (selectedCollector) {
      // Assign task logic
      onAssignTask(task.id, selectedCollector);

      // Firestore update logic
      try {
        const specialRequestRef = collection(firestore, 'Special-Request');
        const q = query(specialRequestRef, where('username', '==', task.reportedBy));
        const querySnapshot = await getDocs(q);

        console.log('Query executed:', q); // Log the query for debugging

        // if (querySnapshot.empty) {
        //   console.log('No matching documents for reportedBy:', task.reportedBy);
        //   return;
        // }

        querySnapshot.forEach(async (docSnapshot) => {
          // console.log('Updating document ID:', docSnapshot.id); // Log the document ID being updated
          await updateDoc(docSnapshot.ref, { status: 'Assigned' });
        });

        console.log('Documents updated successfully');
      } catch (error) {
        console.error('Error updating documents: ', error);
      }
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
          {task.address ? (
            <>
              <p className="mb-4 flex items-center text-lg">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 mr-2" />
                <strong>Location:</strong> {task.address.society}, {task.address.city}, {task.address.state}
              </p>
            </>
          ) : null}
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
