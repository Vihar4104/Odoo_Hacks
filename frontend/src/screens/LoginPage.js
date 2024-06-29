import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import first from '../assets/images/first.jpg';
import second from '../assets/images/Second.jpg';
import third from '../assets/images/Third.jpg';
import fourth from '../assets/images/Fourth.jpg';

const images = [first, second, third, fourth];

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/auth/api/login/', {
        username,
        password
      });

      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMsg(error.response.data.error);
      } else {
        setErrorMsg('Login failed. Please try again.');
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin(event);
    }
  };

  return (
    <div className="login-container h-screen flex justify-center items-center bg-gray-900 text-gray-200">
      <div className="flex justify-between items-center w-full max-w-5xl gap-5">
        {/* Image Slider */}
        <div className="image-slider w-1/2 max-w-md h-full">
          <img src={images[currentImageIndex]} alt="Slide" className="w-full h-full object-cover rounded-lg shadow-2xl" />
        </div>

        {/* Login Form */}
        <div className="login-form w-1/2 max-w-md bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6">
          <header className="header p-4 text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-200">Litter Link</h1>
          </header>
          <div className="form-container">
            <h1 className="login-heading text-2xl font-bold text-gray-200 mb-5">Login</h1>

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

            {errorMsg && (
              <div className="error-message mb-5">
                <b className="text-red-500 block mb-2">{errorMsg}</b>
              </div>
            )}

            <button
              onClick={handleLogin}
              className="login-button w-full p-3 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
            
            <p className="signup-text text-right mt-3 text-gray-300">
              Don't have an account?{" "}
              <span className="login-link">
                <Link to="/signup" className="text-green-400 hover:underline">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
