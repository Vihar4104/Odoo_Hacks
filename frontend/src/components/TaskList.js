import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCheck, faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ tasks, onSelectTask }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending':
        return <FontAwesomeIcon icon={faHourglassHalf} className="text-yellow-500 mr-2" />;
      case 'In Progress':
        return <FontAwesomeIcon icon={faTasks} className="text-blue-500 mr-2" />;
      case 'Completed':
        return <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="task-list p-8 border rounded-lg shadow-lg bg-gray-800 text-gray-200 transition-transform transform hover:scale-105 w-full lg:w-1/2">
      <h2 className="text-3xl font-bold mb-6">Task List</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => onSelectTask(task)}
            className="cursor-pointer p-6 border rounded-lg shadow-sm hover:bg-gray-700 transition-colors flex items-center text-lg"
          >
            {getStatusIcon(task.status)}
            <span>{task.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
