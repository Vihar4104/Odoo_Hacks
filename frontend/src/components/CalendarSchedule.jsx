import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Modal from './Modal'; // Assuming Modal component is implemented
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../config/firebase'; // Adjust the import based on your config file location

const localizer = momentLocalizer(moment);

const CalendarSchedule = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [garbageCollectionSchedules, setGarbageCollectionSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const schedulesCollection = collection(firestore, 'Schedules');
        const querySnapshot = await getDocs(schedulesCollection);

        if (!querySnapshot.empty) {
          const schedules = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            const address = data.address;
            return {
              id: doc.id,
              title: 'Regular Garbage Collection',
              start: new Date(data.start),
              end: new Date(data.end),
              location: `${address.societyname}, ${address.city}`,
              details: data.details,
              collectorname: data.collectorname,
            };
          });

          setGarbageCollectionSchedules(schedules);
        } else {
          console.log('No schedules found.');
          setGarbageCollectionSchedules([]);
        }
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div className='w-5/6'>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4 text-center">Regular Garbage Collection Schedule</h1>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <BigCalendar
              localizer={localizer}
              events={garbageCollectionSchedules}
              startAccessor="start"
              endAccessor="end"
              defaultView="week"
              style={{ height: 500 }}
              onSelectEvent={handleEventClick}
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
