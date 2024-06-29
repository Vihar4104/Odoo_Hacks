// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Icon } from 'react-icons-kit';
// import { chevronDown } from 'react-icons-kit/feather/chevronDown';
// import avatar from "../assets/images/avatar.png";

// const NavBar = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const profileDropdownRef = useRef(null);
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             setIsScrolled(scrollTop > 50);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const handleLogout = async () => {
//         // Your logout functionality
//     };

//     return (
//         <nav className={`bg-gray-900 text-white shadow-md fixed w-full z-50 ${isScrolled ? 'blur-sm' : ''} transition duration-300`} style={{ backdropFilter: isScrolled ? 'blur(1px)' : 'none' }}>
//             <div className="container mx-auto px-4 py-3 flex items-center justify-between rounded-b-lg">
//                 <div className="flex items-center space-x-8">
//                     <Link to="/" className="text-2xl font-bold text-green-500 hover:text-green-600 transition duration-300">Home</Link>
//                     <Link to="/reporting" className="text-lg hover:text-green-500 transition duration-300">Reporting</Link>
//                     <Link to="/tasks" className="text-lg hover:text-green-500 transition duration-300">Tasks</Link>
//                     <Link to="/schedule" className="text-lg hover:text-green-500 transition duration-300">Schedule</Link>
//                 </div>
//                 <div className="flex items-center space-x-8">
//                     <Link to="/about-us" className="text-lg hover:text-green-500 transition duration-300">About Us</Link>
//                     <Link to="/contact" className="text-lg hover:text-green-500 transition duration-300">Contact</Link>
//                     <div ref={profileDropdownRef} className="relative">
//                         <button onClick={toggleDropdown} className="flex items-center text-lg hover:text-green-500 transition duration-300">
//                             <img src={avatar} alt="Profile" className="rounded-full w-8 h-8 mr-2" />
//                             <span>Profile</span>
//                             <Icon icon={chevronDown} size={16} className="ml-1" />
//                         </button>
//                         {dropdownOpen && (
//                             <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 w-48 right-0">
//                                 <Link to="/profile" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">Edit Profile</Link>
//                                 <Link to="/change-password" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">Change Password</Link>
//                                 <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">Logout</button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;



import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/feather/chevronDown';
import { home } from 'react-icons-kit/feather/home';
import { barChart2 } from 'react-icons-kit/feather/barChart2';
import { clipboard } from 'react-icons-kit/feather/clipboard';
import { calendar } from 'react-icons-kit/feather/calendar';
import { info } from 'react-icons-kit/feather/info';
import { phone } from 'react-icons-kit/feather/phone';
import { user } from 'react-icons-kit/feather/user';
import { lock } from 'react-icons-kit/feather/lock';
import { logOut } from 'react-icons-kit/feather/logOut';
import avatar from "../assets/images/avatar.jpg";

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const profileDropdownRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = async () => {
        // Your logout functionality
    };

    return (
        <nav className={`bg-gray-900 text-white shadow-md fixed w-full z-50 ${isScrolled ? 'blur-sm' : ''} transition duration-300`} style={{ backdropFilter: isScrolled ? 'blur(1px)' : 'none' }}>
            <div className="container mx-auto px-4 py-3 flex items-center justify-between rounded-b-lg">
                <div className="flex items-center space-x-8">
                    <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-green-500 hover:text-green-600 transition duration-300">
                        <Icon icon={home} size={24} />
                        <span>Home</span>
                    </Link>
                    <Link to="/reporting" className="flex items-center space-x-2 text-lg hover:text-green-500 transition duration-300">
                        <Icon icon={barChart2} size={24} />
                        <span>Reporting</span>
                    </Link>
                    <Link to="/tasks" className="flex items-center space-x-2 text-lg hover:text-green-500 transition duration-300">
                        <Icon icon={clipboard} size={24} />
                        <span>Tasks</span>
                    </Link>
                    <Link to="/schedule" className="flex items-center space-x-2 text-lg hover:text-green-500 transition duration-300">
                        <Icon icon={calendar} size={24} />
                        <span>Schedule</span>
                    </Link>
                </div>
                <div className="flex items-center space-x-8">
                    <Link to="/about-us" className="flex items-center space-x-2 text-lg hover:text-green-500 transition duration-300">
                        <Icon icon={info} size={24} />
                        <span>About Us</span>
                    </Link>
                    <Link to="/contact" className="flex items-center space-x-2 text-lg hover:text-green-500 transition duration-300">
                        <Icon icon={phone} size={24} />
                        <span>Contact</span>
                    </Link>
                    <div ref={profileDropdownRef} className="relative">
                        <button onClick={toggleDropdown} className="flex items-center text-lg hover:text-green-500 transition duration-300">
                            <img src={avatar} alt="Profile" className="rounded-full w-8 h-8 mr-2" />
                            <span>Profile</span>
                            <Icon icon={chevronDown} size={16} className="ml-1" />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute bg-gray-800 rounded-md shadow-lg mt-2 w-48 right-0">
                                <Link to="/profile" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
                                    <Icon icon={user} size={16} className="mr-2" />
                                    Edit Profile
                                </Link>
                                <Link to="/change-password" className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-300">
                                    <Icon icon={lock} size={16} className="mr-2" />
                                    Change Password
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
        </nav>
    );
};

export default NavBar;
