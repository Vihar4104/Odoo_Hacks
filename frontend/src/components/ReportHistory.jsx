import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../config/firebase'; // Import your initialized Firestore instance

const ReportHistory = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch report history from Firestore
    const fetchReportHistory = async () => {
      try {
        const q = query(collection(firestore, 'Special-Requests'), where('status', '==', 'Requested'));
        const querySnapshot = await getDocs(q);

        const fetchedReports = [];
        querySnapshot.forEach((doc) => {
          fetchedReports.push({ id: doc.id, ...doc.data() });
        });

        setReports(fetchedReports);
      } catch (error) {
        console.error('Error fetching report history:', error);
        // Handle error
      }
    };

    fetchReportHistory();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-green-800 mb-6">Report History</h2>
      {reports.length === 0 ? (
        <p className="text-center text-gray-600">No reports found.</p>
      ) : (
        <div>
          {reports.map((report) => (
            <div key={report.id} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-green-800">{report.description}</h3>
                <span className={`px-2 py-1 text-sm rounded-lg ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
              </div>
              <p className="text-gray-600 mb-2">Location: {report.address.society}, {report.address.city}, {report.address.state}</p>
              <p className="text-gray-600 mb-2">Uploader: {report.uploaderName}</p>
              <p className="text-gray-600">Date: {formatDate(report.timestamp)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Helper function to format date (example only, use your preferred date format library)
const formatDate = (timestamp) => {
  const date = timestamp.toDate(); // Convert Firestore timestamp to JavaScript Date object
  return date.toLocaleDateString(); // Adjust format as needed
};

// Helper function to determine status badge color
const getStatusColor = (status) => {
  switch (status) {
    case 'Requested':
      return 'bg-yellow-400 text-yellow-800';
    case 'In Progress':
      return 'bg-blue-400 text-blue-800';
    case 'Completed':
      return 'bg-green-400 text-green-800';
    default:
      return 'bg-gray-400 text-gray-800';
  }
};

export default ReportHistory;
