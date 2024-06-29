// // import React, { useState, useEffect, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import { Icon } from 'react-icons-kit';
// // import { menu } from 'react-icons-kit/feather/menu';
// // import { chevronDown } from 'react-icons-kit/feather/chevronDown';
// // import avatar from "../assets/images/avatar.png";

// // const AdminNavBar = () => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [reportingOpen, setReportingOpen] = useState(false);
// //     const [tasksOpen, setTasksOpen] = useState(false);
// //     const [profileOpen, setProfileOpen] = useState(false);
// //     const adminPanelRef = useRef(null);
// //     const aboutUsRef = useRef(null);
// //     const profileDropdownRef = useRef(null);
// //     const [isScrolled, setIsScrolled] = useState(false);

// //     useEffect(() => {
// //         const handleScroll = () => {
// //             const scrollTop = window.scrollY;
// //             if (scrollTop > 50) {
// //                 setIsScrolled(true);
// //             } else {
// //                 setIsScrolled(false);
// //             }
// //         };

// //         window.addEventListener('scroll', handleScroll);
// //         return () => {
// //             window.removeEventListener('scroll', handleScroll);
// //         };
// //     }, []);

// //     const toggleMenu = () => {
// //         setIsOpen(!isOpen);
// //     };

// //     const toggleReporting = () => {
// //         setReportingOpen(!reportingOpen);
// //     };

// //     const toggleTasks = () => {
// //         setTasksOpen(!tasksOpen);
// //     };

// //     const toggleProfile = () => {
// //         setProfileOpen(!profileOpen);
// //     };

// //     const handleLogout = () => {
// //         // Implement your logout logic here
// //     };

// //     return (
// //         <nav className={`bg-gray-900 text-white shadow-md fixed w-full z-50 ${isScrolled ? 'blur(10px)' : ''} transition duration-300`} style={{ backdropFilter: isScrolled ? 'blur(1px)' : 'none' }}>
// //             <div className="container mx-auto px-4 py-3 flex items-center justify-between rounded-b-lg">
// //                 <div className="flex items-center space-x-8">
// //                     <Link to="/admin/home" className="text-2xl font-bold text-green-500 hover:text-green-600 transition duration-300">Home</Link>
                  
// //                     <div className="relative group">
// //                         <button onClick={toggleTasks} className="nav-item flex items-center transition duration-300 hover:text-green-500">
// //                             Tasks <Icon icon={chevronDown} size={16} className="ml-1"/>
// //                         </button>
// //                         {tasksOpen && (
// //                             <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 w-48">
// //                                 <Link to="/admin/TA" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">Assign Tasks & View Task</Link>
                              
// //                                 <Link to="/admin/task-analytics" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">Task Analytics</Link>
// //                             </div>
// //                         )}
// //                     </div>
// //                     <Link to="/admin/schedule" className="nav-item hover:text-green-500 transition duration-300">Schedule</Link>
// //                 </div>
// //                 <div className="flex items-center space-x-8">
// //                     <div ref={adminPanelRef} className="relative group">
// //                         <Link to="/admin/admin-panel" className="nav-item hover:text-green-500 transition duration-300">Admin Panel</Link>
// //                     </div>
// //                     <Link to="/admin/about-us" className="nav-item hover:text-green-500 transition duration-300">Add garbege collector</Link>
// //                     <Link to="/admin/contact" className="nav-item hover:text-green-500 transition duration-300">Contact</Link>
// //                     <div ref={profileDropdownRef} className="relative">
// //                         <button onClick={toggleProfile} className="flex items-center text-lg hover:text-green-500 transition duration-300">
// //                             <img src={avatar} alt="Profile" className="rounded-full w-8 h-8 mr-2" />
// //                             <span>Profile</span>
// //                             <Icon icon={chevronDown} size={16} className="ml-1" />
// //                         </button>
// //                         {profileOpen && (
// //                             <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 w-48 right-0">
// //                                 <Link to="/admin/edit-profile" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">Edit Profile</Link>
// //                                 <Link to="/admin/change-password" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">Change Password</Link>
// //                                 <Link to="/admin/notification-settings" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">Notification Settings</Link>
// //                                 <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">Logout</button>
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="md:hidden">
// //                 <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
// //                     <Icon icon={menu} size={24} />
// //                 </button>
// //             </div>
// //             {isOpen && (
// //                 <div className="md:hidden">
// //                     <Link to="/admin/home" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Home</Link>
// //                     <div className="pl-4">
// //                         <button onClick={toggleReporting} className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
// //                             Reporting
// //                         </button>
// //                         {reportingOpen && (
// //                             <div className="pl-4">
// //                                 <Link to="/admin/report-litter" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Report Litter</Link>
// //                                 <Link to="/admin/view-reports" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">View My Reports</Link>
// //                                 <Link to="/admin/report-history" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Report History</Link>
// //                             </div>
// //                         )}
// //                     </div>
// //                     <div className="pl-4">
// //                         <button onClick={toggleTasks} className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
// //                             Tasks
// //                         </button>
// //                         {tasksOpen && (
// //                             <div className="pl-4">
// //                                 <Link to="/admin/assign-tasks" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Assign Tasks</Link>
// //                                 <Link to="/admin/view-tasks" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">View Tasks</Link>
// //                                 <Link to="/admin/task-analytics" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Task Analytics</Link>
// //                             </div>
// //                         )}
// //                     </div>
// //                     <Link to="/admin/schedule" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Schedule</Link>
// //                     <Link to="/admin/admin-panel" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Admin Panel</Link>
// //                     <Link to="/admin/about-us" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">About Us</Link>
// //                     <Link to="/admin/contact" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Contact</Link>
// //                     <div className="relative group">
// //                         <button onClick={toggleProfile} className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
// //                             Profile
// //                         </button>
// //                         {profileOpen && (
// //                             <div className="pl-4">
// //                                 <Link to="/admin/edit-profile" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Edit Profile</Link>
// //                                 <Link to="/admin/change-password" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Change Password</Link>
// //                                 <Link to="/admin/notification-settings" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Notification Settings</Link>
// //                                 <button onClick={handleLogout} className="block px-4 py-2 w-full text-left text-white hover:bg-gray-700 transition duration-300">Logout</button>
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>
// //             )}
// //         </nav>
// //     );
// // };

// // export default AdminNavBar;





// // const handleLogout = async () => {
// //     try {
// //         const response = await axios.post(
// //             'http://localhost:8000/auth/api/logout/',
// //             {},
// //             {
// //                 headers: {
// //                     Authorization: `Token ${token}`,
// //                     'Content-Type': 'application/json',
// //                 }
// //             }
// //         );

// //         console.log('Logout successful:', response.data);
// //         localStorage.removeItem('user');
// //         localStorage.removeItem('token');
// //         setUser(null);
// //         setToken(null);
// //         navigate('/login');
// //     } catch (error) {
// //         console.error('Logout error:', error);
// //         if (error.response && error.response.status === 401) {
// //             console.log('Unauthorized. Please log in again.');
// //         }
// //     }
// // };



// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Icon } from 'react-icons-kit';
// import { menu } from 'react-icons-kit/feather/menu';
// import { chevronDown } from 'react-icons-kit/feather/chevronDown';
// import { home } from 'react-icons-kit/feather/home';
// import { clipboard } from 'react-icons-kit/feather/clipboard';
// import { calendar } from 'react-icons-kit/feather/calendar';
// import { users } from 'react-icons-kit/feather/users';
// import { settings } from 'react-icons-kit/feather/settings';
// import { logOut } from 'react-icons-kit/feather/logOut';
// import avatar from "../assets/images/avatar.png";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const AdminNavBar = () => {
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false);
//     const [reportingOpen, setReportingOpen] = useState(false);
//     const [tasksOpen, setTasksOpen] = useState(false);
//     const [profileOpen, setProfileOpen] = useState(false);
//     const adminPanelRef = useRef(null);
//     const aboutUsRef = useRef(null);
//     const profileDropdownRef = useRef(null);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [user, setUser] = useState(null);
//     const [token, setToken] = useState(null);
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             if (scrollTop > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const toggleReporting = () => {
//         setReportingOpen(!reportingOpen);
//     };

//     const toggleTasks = () => {
//         setTasksOpen(!tasksOpen);
//     };

//     const toggleProfile = () => {
//         setProfileOpen(!profileOpen);
//     };


      
// const handleLogout = async () => {
//     try {
//         const response = await axios.post(
//             'http://localhost:8000/auth/api/logout/',
//             {},
//             {
//                 headers: {
//                     Authorization: `Token ${token}`,
//                     'Content-Type': 'application/json',
//                 }
//             }
//         );

//         console.log('Logout successful:', response.data);
//         localStorage.removeItem('user');
//         localStorage.removeItem('token');
//         setUser(null);
//         setToken(null);
//         navigate('/login');
//     } catch (error) {
//         console.error('Logout error:', error);
//         if (error.response && error.response.status === 401) {
//             console.log('Unauthorized. Please log in again.');
//         }
//     }

//     };

//     return (
//         <nav className={`bg-gray-900 text-white shadow-md fixed w-full z-50 ${isScrolled ? 'blur(10px)' : ''} transition duration-300`} style={{ backdropFilter: isScrolled ? 'blur(1px)' : 'none' }}>
//             <div className="container mx-auto px-4 py-3 flex items-center justify-between rounded-b-lg">
//                 <div className="flex items-center space-x-8">
//                     <Link to="/admin/home" className="flex items-center space-x-2 text-2xl font-bold text-green-500 hover:text-green-600 transition duration-300">
//                         <Icon icon={home} size={24} />
//                         <span>Home</span>
//                     </Link>
//                     <div className="relative group">
//                         <button onClick={toggleTasks} className="nav-item flex items-center transition duration-300 hover:text-green-500">
//                             <span className="flex items-center space-x-2">
//                                 <span>Tasks</span>
//                                 <Icon icon={chevronDown} size={16} className="ml-1"/>
//                             </span>
//                         </button>
//                         {tasksOpen && (
//                             <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 w-48">
//                                 <Link to="/admin/TA" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
//                                     <Icon icon={clipboard} size={16} className="mr-2" />
//                                     Assign Tasks & View Task
//                                 </Link>
//                                 <Link to="/admin/task-analytics" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
//                                     <Icon icon={clipboard} size={16} className="mr-2" />
//                                     Task Analytics
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                     <Link to="/admin/schedule" className="flex items-center space-x-2 nav-item hover:text-green-500 transition duration-300">
//                         <Icon icon={calendar} size={24} />
//                         <span>Schedule</span>
//                     </Link>
//                 </div>
//                 <div className="flex items-center space-x-8">
//                     <div ref={adminPanelRef} className="relative group">
//                         <Link to="/admin/Dashboard" className="flex items-center space-x-2 nav-item hover:text-green-500 transition duration-300">
//                             <Icon icon={users} size={24} />
//                             <span>Admin Panel</span>
//                         </Link>
//                     </div>
//                     <Link to="/admin/about-us" className="flex items-center space-x-2 nav-item hover:text-green-500 transition duration-300">
//                         <Icon icon={users} size={24} />
//                         <span>Add garbage collector</span>
//                     </Link>
                  
//                     <div ref={profileDropdownRef} className="relative">
//                         <button onClick={toggleProfile} className="flex items-center text-lg hover:text-green-500 transition duration-300">
//                             <img src={avatar} alt="Profile" className="rounded-full w-8 h-8 mr-2" />
//                             <span>Profile</span>
//                             <Icon icon={chevronDown} size={16} className="ml-1" />
//                         </button>
//                         {profileOpen && (
//                             <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 w-48 right-0">
//                                 <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
//                                     <Icon icon={settings} size={16} className="mr-2" />
//                                     Edit Profile
//                                 </Link>
                               
//                                 <Link to="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
//                                     <Icon icon={settings} size={16} className="mr-2" />
//                                     Notification Settings
//                                 </Link>
//                                 <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
//                                     <Icon icon={logOut} size={16} className="mr-2" />
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             <div className="md:hidden">
//                 <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
//                     <Icon icon={menu} size={24} />
//                 </button>
//             </div>
//             {isOpen && (
//                 <div className="md:hidden">
//                     <Link to="/admin/home" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Home</Link>
//                     <div className="pl-4">
//                         <button onClick={toggleReporting} className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                             <span className="flex items-center space-x-2">
//                                 <Icon icon={clipboard} size={16} />
//                                 <span>Reporting</span>
//                             </span>
//                         </button>
//                         {reportingOpen && (
//                             <div className="pl-4">
//                                 <Link to="/admin/report-litter" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Report Litter</Link>
//                                 <Link to="/admin/view-reports" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">View My Reports</Link>
//                                 <Link to="/admin/report-history" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Report History</Link>
//                             </div>
//                         )}
//                     </div>
//                     <div className="pl-4">
//                         <button onClick={toggleTasks} className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                             <span className="flex items-center space-x-2">
//                                 <Icon icon={clipboard} size={16} />
//                                 <span>Tasks</span>
//                             </span>
//                         </button>
//                         {tasksOpen && (
//                             <div className="pl-4">
//                                 <Link to="/admin/assign-tasks" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Assign Tasks</Link>
//                                 <Link to="/admin/view-tasks" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">View Tasks</Link>
//                                 <Link to="/admin/task-analytics" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Task Analytics</Link>
//                             </div>
//                         )}
//                     </div>
//                     <Link to="/admin/schedule" className="flex items-center space-x-2 block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                         <Icon icon={calendar} size={24} />
//                         <span>Schedule</span>
//                     </Link>
//                     <Link to="/admin/Dashbord" className="flex items-center space-x-2 block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                         <Icon icon={users} size={24} />
//                         <span>Admin Panel</span>
//                     </Link>
//                     <Link to="/admin/about-us" className="flex items-center space-x-2 block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                         <Icon icon={users} size={24} />
//                         <span>About Us</span>
//                     </Link>
//                     <Link to="/admin/contact" className="flex items-center space-x-2 block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                         <Icon icon={users} size={24} />
//                         <span>Contact</span>
//                     </Link>
//                     <div className="relative">
//                         <button onClick={toggleProfile} className="flex items-center text-lg hover:text-green-500 transition duration-300">
//                             <img src={avatar} alt="Profile" className="rounded-full w-8 h-8 mr-2" />
//                             <span>Profile</span>
//                             <Icon icon={chevronDown} size={16} className="ml-1" />
//                         </button>
//                         {profileOpen && (
//                             <div className="pl-4">
//                                 <Link to="/admin/edit-profile" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                                     <Icon icon={settings} size={16} className="mr-2" />
//                                     Edit Profile
//                                 </Link>
//                                 <Link to="/admin/change-password" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                                     <Icon icon={settings} size={16} className="mr-2" />
//                                     Change Password
//                                 </Link>
//                                 <Link to="/admin/notification-settings" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                                     <Icon icon={settings} size={16} className="mr-2" />
//                                     Notification Settings
//                                 </Link>
//                                 <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
//                                     <Icon icon={logOut} size={16} className="mr-2" />
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default AdminNavBar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { chevronDown } from 'react-icons-kit/feather/chevronDown';
import { home } from 'react-icons-kit/feather/home';
import { clipboard } from 'react-icons-kit/feather/clipboard';
import { calendar } from 'react-icons-kit/feather/calendar';
import { users } from 'react-icons-kit/feather/users';
import { settings } from 'react-icons-kit/feather/settings';
import { logOut } from 'react-icons-kit/feather/logOut';
import avatar from "../assets/images/avatar.jpg";
import axios from "axios";

const AdminNavBar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [reportingOpen, setReportingOpen] = useState(false);
    const [tasksOpen, setTasksOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(localStorage.getItem('user') || null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleTasks = () => setTasksOpen(!tasksOpen);
    const toggleProfile = () => setProfileOpen(!profileOpen);
    const toggleReporting = () => setReportingOpen(!reportingOpen);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:8000/auth/api/logout/', {}, {
                headers: {
                    Authorization: `Token ${token}`,
                    'Content-Type': 'application/json',
                }
            });

            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setUser(null);
            setToken(null);
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized. Please log in again.');
            }
        }
    };

    return (
        <nav className={`bg-gray-900 text-white shadow-md fixed w-full z-50 ${isScrolled ? 'blur(10px)' : ''} transition duration-300`} style={{ backdropFilter: isScrolled ? 'blur(1px)' : 'none' }}>
            <div className="container mx-auto px-4 py-3 flex items-center justify-between rounded-b-lg">
                <div className="flex items-center space-x-8">
                    <Link to="/admin/home" className="flex items-center space-x-2 text-2xl font-bold text-green-500 hover:text-green-600 transition duration-300">
                        <Icon icon={home} size={24} />
                        <span>Home</span>
                    </Link>
                    <div className="relative group">
                        <button onClick={toggleTasks} className="nav-item flex items-center transition duration-300 hover:text-green-500">
                            <span className="flex items-center space-x-2">
                                <span>Tasks</span>
                                <Icon icon={chevronDown} size={16} className="ml-1"/>
                            </span>
                        </button>
                        {tasksOpen && (
                            <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 w-48">
                                <Link to="/admin/TA" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
                                    <Icon icon={clipboard} size={16} className="mr-2" />
                                    Assign Tasks & View Task
                                </Link>
                                <Link to="/admin/task-analytics" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
                                    <Icon icon={clipboard} size={16} className="mr-2" />
                                    Task Analytics
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/admin/schedule" className="flex items-center space-x-2 nav-item hover:text-green-500 transition duration-300">
                        <Icon icon={calendar} size={24} />
                        <span>Schedule</span>
                    </Link>
                </div>
                <div className="flex items-center space-x-8">
                    <Link to="/admin/dashboard" className="flex items-center space-x-2 nav-item hover:text-green-500 transition duration-300">
                        <Icon icon={users} size={24} />
                        <span>Admin Panel</span>
                    </Link>
                    <Link to="/admin/assign-garbege-collector-role" className="flex items-center space-x-2 nav-item hover:text-green-500 transition duration-300">
                        <Icon icon={users} size={24} />
                        <span>Add garbage collector</span>
                    </Link>
                    <div className="relative">
                        <button onClick={toggleProfile} className="flex items-center text-lg hover:text-green-500 transition duration-300">
                            <img src={avatar} alt="Profile" className="rounded-full w-8 h-8 mr-2" />
                            <span>Profile</span>
                            <Icon icon={chevronDown} size={16} className="ml-1" />
                        </button>
                        {profileOpen && (
                            <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 w-48 right-0">
                                <Link to="/admin/edit-profile" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
                                    <Icon icon={settings} size={16} className="mr-2" />
                                    Edit Profile
                                </Link>
                                <Link to="/admin/change-password" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
                                    <Icon icon={settings} size={16} className="mr-2" />
                                    Change Password
                                </Link>
                                <Link to="/admin/notifications" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
                                    <Icon icon={settings} size={16} className="mr-2" />
                                    Notification Settings
                                </Link>
                                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
                                    <Icon icon={logOut} size={16} className="mr-2" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                    <Icon icon={menu} size={24} />
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <Link to="/admin/home" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Home</Link>
                    <div className="pl-4">
                        <button onClick={toggleReporting} className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
                            <span className="flex items-center space-x-2">
                                <Icon icon={clipboard} size={16} />
                                <span>Reporting</span>
                            </span>
                        </button>
                        {reportingOpen && (
                            <div className="pl-4">
                                <Link to="/admin/report-litter" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Report Litter</Link>
                                <Link to="/admin/view-reports" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">View My Reports</Link>
                                <Link to="/admin/report-history" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Report History</Link>
                            </div>
                        )}
                    </div>
                    <div className="pl-4">
                        <button onClick={toggleTasks} className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">
                            <span className="flex items-center space-x-2">
                                <Icon icon={clipboard} size={16} />
                                <span>Tasks</span>
                            </span>
                        </button>
                        {tasksOpen && (
                            <div className="pl-4">
                                <Link to="/admin/assign-tasks" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Assign Tasks</Link>
                                <Link to="/admin/view-tasks" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">View Tasks</Link>
                                <Link to="/admin/task-analytics" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Task Analytics</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/admin/schedule" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Schedule</Link>
                    <Link to="/admin/about-us" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">About Us</Link>
                    <Link to="/admin/contact" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Contact</Link>
                    <Link to="/admin/add-garbage-collector" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Add Garbage Collector</Link>
                    <Link to="/admin/manage-garbage-collector" className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-300">Manage Garbage Collector</Link>
                </div>
            )}
        </nav>
    );
};

export default AdminNavBar;
