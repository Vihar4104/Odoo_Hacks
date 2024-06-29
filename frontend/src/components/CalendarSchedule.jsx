// // src/components/CalendarSchedule.js
// import React, { useEffect, useState } from 'react';
// import Calendar from 'react-calendar';
// import axios from 'axios';
// import 'react-calendar/dist/Calendar.css';
// import './calendar.css'; // Custom CSS for calendar

// const CalendarSchedule = () => {
//   const [schedules, setSchedules] = useState([]);
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     axios.get('/api/schedules')
//       .then(response => {
//         setSchedules(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the schedules!", error);
//       });
//   }, []);

//   const onDateChange = (newDate) => {
//     setDate(newDate);
//   };

//   const getTileContent = ({ date, view }) => {
//     if (view === 'month') {
//       const schedule = schedules.find(schedule => new Date(schedule.date).toDateString() === date.toDateString());
//       return schedule ? <p className="text-xs text-green-500">{schedule.location}</p> : null;
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Garbage Collection Schedule</h1>
//       <Calendar
//         onChange={onDateChange}
//         value={date}
//         tileContent={getTileContent}
//       />
//     </div>
//   );
// };

// src/components/CalendarSchedule.js
// src/components/CalendarSchedule.js
// import React, { useState } from 'react';
// import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import moment from 'moment';
// import Modal from './Modal'; // Assuming Modal component is implemented

// const localizer = momentLocalizer(moment);

// const dummySchedules = [
//   { id: 1, title: 'Garbage Collection', start: new Date(2024, 6, 1, 10, 0, 0), end: new Date(2024, 6, 1, 11, 0, 0), location: 'Main Street', details: 'Collecting garbage from the residential area.' },
//   { id: 2, title: 'Garbage Collection', start: new Date(2024, 6, 2, 11, 0, 0), end: new Date(2024, 6, 2, 12, 0, 0), location: 'Market Street', details: 'Collecting garbage from the commercial area.' },
//   // Add more dummy schedules as needed
// ];

// const CalendarSchedule = () => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const handleEventClick = (event) => {
//     setSelectedEvent(event);
//   };

//   const closeModal = () => {
//     setSelectedEvent(null);
//   };

//   return (
//     <div className='w-5/6'>
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4 text-center">Garbage Collection Schedule</h1>
//       <div className="bg-white rounded-lg shadow-lg p-4">
//         <BigCalendar
//           localizer={localizer}
//           events={dummySchedules}
//           startAccessor="start"
//           endAccessor="end"
//           defaultView="week" // Display the calendar in week view by default
//           style={{ height: 500 }} // Adjust height as needed
//           onSelectEvent={handleEventClick} // Handle event click to open modal
//           popup
//           className="mb-4"
//         />
//       </div>
//       {selectedEvent && (
//         <Modal onClose={closeModal}>
//           <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
//           <p><strong>Time:</strong> {moment(selectedEvent.start).format('LT')} - {moment(selectedEvent.end).format('LT')}</p>
//           <p><strong>Location:</strong> {selectedEvent.location}</p>
//           <p><strong>Details:</strong> {selectedEvent.details}</p>
//           <button className="mt-4 p-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600" onClick={closeModal}>Close</button>
//         </Modal>
//       )}
//     </div>
//     </div>
//   );
// };

// export default CalendarSchedule;

// CalendarSchedule.js (or calenderschedular.js)
import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Modal from './Modal'; // Assuming Modal component is implemented
import { TruckIcon } from '@heroicons/react/outline'; // Example garbage truck icon from Heroicons
import { motion } from 'framer-motion';
import Navbar from './NavBar';

// Example data for garbage collection schedules
const garbageCollectionSchedules = [
  { id: 1, title: 'Regular Garbage Collection', start: new Date(2024, 6, 1, 10, 0, 0), end: new Date(2024, 6, 1, 11, 0, 0), location: 'Main Street', details: 'Collecting garbage from the residential area.' },
  { id: 2, title: 'Regular Garbage Collection', start: new Date(2024, 6, 2, 11, 0, 0), end: new Date(2024, 6, 2, 12, 0, 0), location: 'Market Street', details: 'Collecting garbage from the commercial area.' },
  // Add more schedules as needed
];

const localizer = momentLocalizer(moment);

const CalendarSchedule = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Handle click on an event to show modal
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  // Close modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (<>
  <Navbar />
    <div className='w-5/6'>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Regular Garbage Collection Schedule</h1>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <BigCalendar
            localizer={localizer}
            events={garbageCollectionSchedules}
            startAccessor="start"
            endAccessor="end"
            defaultView="week" // Display the calendar in week view by default
            style={{ height: 500 }} // Adjust height as needed
            onSelectEvent={handleEventClick} // Handle event click to open modal
            popup
            className="mb-4"
          />
        </div>
        {selectedEvent && (
          <Modal onClose={closeModal} event={selectedEvent} />
        )}
      </div>
    </div>
    </>
  );
};

export default CalendarSchedule;

