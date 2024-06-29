


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import first from '../assets/images/first.jpg';
import second from '../assets/images/second.jpg';
import third from '../assets/images/third.jpg';
import fourth from '../assets/images/fourth.jpg';

const images = [first, second, third, fourth];

function SignUpPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    try {
      await axios.post('http://localhost:8000/auth/api/signup/', {
        username,
        email,
        password
      });

      navigate('/login');
    } catch (error) {
      console.error('Sign up error:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMsg(error.response.data.error);
      } else {
        setErrorMsg('Sign up failed. Please try again.');
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSignUp(event);
    }
  };

  return (
    <div className="signup-container h-screen flex justify-center items-center bg-gray-900 text-gray-200">
      <div className="flex justify-between items-center w-full max-w-5xl gap-5">
        {/* Sign Up Form */}
        <div className="signup-form w-1/2 max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6">
          <header className="header p-4 text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-200">Litter Link</h1>
          </header>
          <div className="form-container">
            <h1 className="signup-heading text-2xl font-bold text-gray-200 mb-5">Sign Up</h1>

            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter username"
              className="input-field w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />

            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter email"
              className="input-field w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />

            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onKeyDown={handleKeyDown}
              placeholder="Enter password"
              className="input-field w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />

            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onKeyDown={handleKeyDown}
              placeholder="Confirm password"
              className="input-field w-full p-3 mb-4 border border-gray-600 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />

            {errorMsg && (
              <div className="error-message mb-5">
                <b className="text-red-500 block mb-2">{errorMsg}</b>
              </div>
            )}

            <button
              onClick={handleSignUp}
              className="signup-button w-full p-3 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </button>
            
            <p className="login-text text-right mt-3 text-gray-300">
              Already have an account?{" "}
              <span className="signup-link">
                <Link to="/login" className="text-green-400 hover:underline">Login</Link>
              </span>
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <div className="image-slider w-1/2 max-w-md h-full">
          <img src={images[currentImageIndex]} alt="Slide" className="w-full h-full object-cover rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
