// // src/components/Modal.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Transition } from '@headlessui/react'; // For animations
// import { XCircleIcon } from '@heroicons/react/outline'; // Example icon from Heroicons

// const Modal = ({ onClose, children }) => {
//   return ReactDOM.createPortal(
//     <Transition
//       show={true}
//       as={React.Fragment}
//       enter="transition-opacity duration-300"
//       enterFrom="opacity-0"
//       enterTo="opacity-100"
//       leave="transition-opacity duration-300"
//       leaveFrom="opacity-100"
//       leaveTo="opacity-0"
//     >
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-2xl font-bold">Event Details</h2>
//             <button onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
//               <XCircleIcon className="h-6 w-6" />
//             </button>
//           </div>
//           {children}
//         </div>
//       </div>
//     </Transition>,
//     document.getElementById('modal-root')
//   );
// };

// export default Modal;


// // src/components/Modal.js
// import React from 'react';
// import { Transition } from '@headlessui/react';

// const Modal = ({ onClose, children }) => {
//   return (
//     <Transition
//       show={true}
//       as={React.Fragment}
//       enter="transition-opacity duration-300"
//       enterFrom="opacity-0"
//       enterTo="opacity-100"
//       leave="transition-opacity duration-300"
//       leaveFrom="opacity-100"
//       leaveTo="opacity-0"
//     >
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//         <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//           {children}
//         </div>
//       </div>
//     </Transition>
//   );
// };

// export default Modal;

// Modal.js
import React from 'react';
import { motion } from 'framer-motion';
import { XIcon } from '@heroicons/react/outline'; // Example icon from Heroicons

// Example garbage truck icon from Heroicons
import { TruckIcon } from '@heroicons/react/outline';

const Modal = ({ onClose, event }) => {
  if (!event) {
    return null; // Handle case where event is not defined
  }

  const { title, start, end, location, details } = event;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
          <XIcon className="h-6 w-6" />
        </button>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="no-scrollbar relative w-full overflow-hidden overflow-y-scroll border border-neutral-300 bg-white"
        >
          <div className="bg-slate-950 px-4 py-12">
            <motion.div
              whileHover={{ scale: 1.01, backgroundColor: 'rgba(15, 23, 42, 0.5)' }}
              className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500"
            >
              <motion.div
                className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800"
              >
                <h4 className="relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">{title}</h4>
                <p className="relative z-10 text-slate-400"><strong>Time:</strong> {new Date(start).toLocaleTimeString()} - {new Date(end).toLocaleTimeString()}</p>
                <p className="relative z-10 text-slate-400"><strong>Location:</strong> {location}</p>
                <p className="relative z-10 text-slate-400"><strong>Details:</strong> {details}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ transform: 'scale(1.75) rotate(120.034deg) translateZ(0px)' }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};  

export default Modal;
