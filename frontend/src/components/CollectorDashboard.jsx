import React from 'react';
import Navbar from '../components/AdminNavbar'; // Navbar component with Tailwind CSS

const CollectorDashboard = () => {
  // Dummy data for tasks
  const tasks = [
    {
      id: 1,
      description: 'Clean litter at Main Street',
      location: 'Main Street, City A',
      priority: 'High',
      status: 'Pending',
    },
    {
      id: 2,
      description: 'Pick up bulky waste at Park Avenue',
      location: 'Park Avenue, City B',
      priority: 'Medium',
      status: 'In Progress',
    },
    // Add more tasks as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Collector Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-lg font-bold mb-2">Assigned Tasks</h2>
              {tasks.map((task) => (
                <div key={task.id} className="mb-4">
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <p className="text-xs text-gray-500">{task.location}</p>
                  <p className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded ${task.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : task.status === 'In Progress' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'}`}>{task.status}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Add more components as needed */}
        </div>
      </div>
    </div>
  );
};

export default CollectorDashboard;
