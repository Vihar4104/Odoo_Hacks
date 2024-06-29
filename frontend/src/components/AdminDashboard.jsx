// import React from 'react';
// import Navbar from '../components/AdminNavbar'; // Assuming Navbar component is in the same directory

// const AdminDashboard = () => {
//   // Dummy data for users
//   const users = [
//     { id: 1, name: 'John Doe', role: 'Collector', status: 'Active' },
//     { id: 2, name: 'Jane Smith', role: 'Admin', status: 'Active' },
//     // Add more users as needed
//   ];

//   // Dummy data for reports
//   const reports = [
//     { id: 1, description: 'Litter hotspot at City Park', reportedBy: 'John Doe', status: 'New' },
//     { id: 2, description: 'Bulky waste on Park Avenue', reportedBy: 'Jane Smith', status: 'In Progress' },
//     // Add more reports as needed
//   ];

//   // Dummy data for active collectors and user reviews
//   const activeCollectors = 5;
//   const loggedInUsers = 20;
//   const reviews = [
//     { id: 1, user: 'John Doe', review: 'Great system, very efficient!' },
//     { id: 2, user: 'Jane Smith', review: 'User-friendly and effective.' },
//     // Add more reviews as needed
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

//           {/* User Management Section */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <div className="px-6 py-4">
//               <h2 className="text-lg font-bold mb-2">User Management</h2>
//               {users.map((user) => (
//                 <div key={user.id} className="mb-4">
//                   <p className="text-sm text-gray-600">{user.name}</p>
//                   <p className="text-xs text-gray-500">{user.role}</p>
//                   <p className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded ${user.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{user.status}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Report Management Section */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <div className="px-6 py-4">
//               <h2 className="text-lg font-bold mb-2">Report Management</h2>
//               {reports.map((report) => (
//                 <div key={report.id} className="mb-4">
//                   <p className="text-sm text-gray-600">{report.description}</p>
//                   <p className="text-xs text-gray-500">{report.reportedBy}</p>
//                   <p className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded ${report.status === 'New' ? 'bg-yellow-200 text-yellow-800' : report.status === 'In Progress' ? 'bg-blue-200 text-blue-800' : 'bg-green-200 text-green-800'}`}>{report.status}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Active Collectors Section */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <div className="px-6 py-4">
//               <h2 className="text-lg font-bold mb-2">Active Collectors</h2>
//               <p className="text-4xl font-bold text-blue-500">{activeCollectors}</p>
//             </div>
//           </div>

//           {/* User Statistics Section */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden">
//             <div className="px-6 py-4">
//               <h2 className="text-lg font-bold mb-2">User Statistics</h2>
//               <p className="text-4xl font-bold text-green-500">{loggedInUsers}</p>
//               <p className="text-sm text-gray-600">Users Logged In</p>
//             </div>
//           </div>

//           {/* User Reviews Section */}
//           <div className="bg-white shadow-md rounded-lg overflow-hidden col-span-1 md:col-span-2 lg:col-span-3">
//             <div className="px-6 py-4">
//               <h2 className="text-lg font-bold mb-2">User Reviews</h2>
//               {reviews.map((review) => (
//                 <div key={review.id} className="mb-4">
//                   <p className="text-sm text-gray-600">{review.user}</p>
//                   <p className="text-xs text-gray-500">{review.review}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React from 'react';
import Navbar from '../components/AdminNavbar'; // Assuming Navbar component is in the same directory

const AdminDashboard = () => {
  // Dummy data for users
  const users = [
    { id: 1, name: 'John Doe', role: 'Collector', status: 'Active' },
    { id: 2, name: 'Jane Smith', role: 'Admin', status: 'Active' },
    // Add more users as needed
  ];

  // Dummy data for reports
  const reports = [
    { id: 1, description: 'Litter hotspot at City Park', reportedBy: 'John Doe', status: 'New' },
    { id: 2, description: 'Bulky waste on Park Avenue', reportedBy: 'Jane Smith', status: 'In Progress' },
    // Add more reports as needed
  ];

  // Dummy data for active collectors and user reviews
  const activeCollectors = 5;
  const loggedInUsers = 20;
  const reviews = [
    { id: 1, user: 'John Doe', review: 'Great system, very efficient!' },
    { id: 2, user: 'Jane Smith', review: 'User-friendly and effective.' },
    // Add more reviews as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* User Management Section */}
          <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-lg font-bold mb-2">User Management</h2>
              {users.map((user) => (
                <div key={user.id} className="mb-4">
                  <p className="text-sm">{user.name}</p>
                  <p className="text-xs">{user.role}</p>
                  <p className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded ${user.status === 'Active' ? 'bg-green-600' : 'bg-red-600'}`}>{user.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Report Management Section */}
          <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-lg font-bold mb-2">Report Management</h2>
              {reports.map((report) => (
                <div key={report.id} className="mb-4">
                  <p className="text-sm">{report.description}</p>
                  <p className="text-xs">{report.reportedBy}</p>
                  <p className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded ${report.status === 'New' ? 'bg-yellow-600' : report.status === 'In Progress' ? 'bg-blue-600' : 'bg-green-600'}`}>{report.status}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Active Collectors Section */}
          <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-lg font-bold mb-2">Active Collectors</h2>
              <p className="text-4xl font-bold text-blue-500">{activeCollectors}</p>
            </div>
          </div>

          {/* User Statistics Section */}
          <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-lg font-bold mb-2">User Statistics</h2>
              <p className="text-4xl font-bold text-green-500">{loggedInUsers}</p>
              <p className="text-sm">Users Logged In</p>
            </div>
          </div>

          {/* User Reviews Section */}
          <div className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden col-span-1 md:col-span-2 lg:col-span-3">
            <div className="px-6 py-4">
              <h2 className="text-lg font-bold mb-2">User Reviews</h2>
              {reviews.map((review) => (
                <div key={review.id} className="mb-4">
                  <p className="text-sm">{review.user}</p>
                  <p className="text-xs">{review.review}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
