import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../assets/images/logo-icon.jpg';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';

import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL, uploadBytes } from 'firebase/storage';
import axios from 'axios';


const ReportingForm = () => {
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [uploadedMedia, setUploadedMedia] = useState(null); // State to store uploaded media URL
  const [address, setAddress] = useState({ society: '', city: '', state: '' });
  const [uploaderName, setUploaderName] = useState('');
  const mapRef = useRef(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null)

  // Initialize Firebase
  const firestore = getFirestore();
  const storage = getStorage();

  // Function to set default map center to India
  const defaultMapCenter = [20.5937, 78.9629]; // Center coordinates of India
useEffect(() => {
  // Retrieve user data and token from localStorage
  console.log("inside the homepage.")
  const storedUser = localStorage.getItem('user');
  const storedToken = localStorage.getItem('token');
  setLocation({ lat: defaultMapCenter[0], lng: defaultMapCenter[1] });
  if (storedUser && storedToken) {
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    setToken(storedToken);
    
    // Extract username from parsedUser and store it in a variable
    const username = parsedUser.username; // Adjust this based on your user object structure
    setUsername(username);
    // Store username in a variable or use it as needed
    console.log('Username:', username);
    
    // Set the default Authorization header for Axios
    axios.defaults.headers.common['Authorization'] = `Token ${storedToken}`;
  } else {
    // Handle case where storedUser or storedToken is missing
    console.error('User data or token not found in localStorage.');
    // Optionally, you can perform a redirect or handle this case as needed
  }
}, []);
  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    setMedia(file);
    setUploadedMedia(URL.createObjectURL(file));
  };

  const handleRemoveMedia = () => {
    setMedia(null);
    setUploadedMedia(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside handleSubmit!")
    try {
      let mediaUrl = null;
      console.log("inside media uri.")
      // Upload media file to Firebase Storage if media exists
      if (media) {
        console.log("inside media section")
        const storageRef = ref(storage, `media/${media.name}`);
        console.log("after storage reference")
        await uploadBytes(storageRef, media);
        console.log("after uploading.")
        mediaUrl = await getDownloadURL(storageRef);
        console.log("url: ", mediaUrl)
      }
      
      const docRef = await addDoc(collection(firestore, 'Special-Requests'), {
        description,
        media: mediaUrl,
        location, 
        address,
        uploaderName,
        timestamp: new Date(),
        status: "Requested",
        username: username
      });
  
      alert('Litter hotspot reported successfully!');
      // Reset state variables after successful submission
      setDescription('');
      setMedia(null);
      setLocation({ lat: null, lng: null }); // Reset location after submission
      setUploadedMedia(null);
      setAddress({ society: '', city: '', state: '' });
      setUploaderName('');
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 3000);
    } catch (error) {
      console.error('Error reporting litter hotspot:', error);
      alert('Failed to report litter hotspot. Please try again.');
    }
  };

  // Custom hook to handle map events for locating user
  function LocationEvents() {
    const map = useMapEvents({
      click() {
        // Do nothing on map click to prevent unintended location change
      }
    });

    return null; // No need to return JSX here
  }

  // Define custom icon for the marker
  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Point of the icon which corresponds to marker's location
    popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
  });

  const handleCurrentLocation = () => {
    if (mapRef.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });

          const map = mapRef.current;
          map.setView([position.coords.latitude, position.coords.longitude], 13); // Zoom level set to 16 (adjust as needed)
        },
        (error) => {
          console.error('Error fetching current location:', error);
          alert('Failed to fetch current location. Please try again.');
        }
      );
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(your-background-image-url)' }}>
      <div className="absolute inset-0 bg-white opacity-50 rounded-lg shadow-lg"></div>
      <div className="reporting-form relative z-10 max-w-lg w-full bg-white bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-6">Report Litter Hotspot</h2>
        <form onSubmit={handleSubmit} className={formSubmitted ? 'submitted' : ''}>
          <div className="mb-4">
            <label className="block text-green-800 font-bold mb-2">Upload Photo/Video:</label>
            <input type="file" accept="image/*,video/*" onChange={handleMediaChange} required className="hidden" id="media-upload-input" />
            <label htmlFor="media-upload-input" className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg w-full block text-center bg-white text-green-800">
              Select File
            </label>
          </div>
          {uploadedMedia && (
            <div className="mb-4 relative">
              <button
                type="button"
                onClick={handleRemoveMedia}
                className="absolute top-0 right-0 m-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <FaTimes />
              </button>
              {media.type.startsWith('image/') ? (
                <img src={uploadedMedia} alt="Uploaded media" className="rounded-lg max-h-60 w-full object-cover" />
              ) : (
                <video controls className="rounded-lg max-h-60 w-full">
                  <source src={uploadedMedia} type={media.type} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-green-800 font-bold mb-2">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="px-4 py-2 border border-gray-300 rounded-lg w-full bg-white text-green-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 font-bold mb-2">Address:</label>
            <input
              type="text"
              placeholder="Society Name"
              value={address.society}
              onChange={(e) => setAddress({ ...address, society: e.target.value })}
              required
              className="px-4 py-2 border border-gray-300 rounded-lg w-full bg-white text-green-800 mb-2"
            />
            <input
              type="text"
              placeholder="City"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
              required
              className="px-4 py-2 border border-gray-300 rounded-lg w-full bg-white text-green-800 mb-2"
            />
            <input
              type="text"
              placeholder="State"
              value={address.state}
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
              required
              className="px-4 py-2 border border-gray-300 rounded-lg w-full bg-white text-green-800"
            />
          </div>
          <div className="mb-4">
            <label className="block text-green-800 font-bold mb-2">Name of Photo Uploader:</label>
            <input
              type="text"
              value={uploaderName}
              onChange={(e) => setUploaderName(e.target.value)}
              required
              className="px-4 py-2 border border-gray-300 rounded-lg w-full bg-white text-green-800"
            />
          </div>
          <div className="map-container mb-4 relative" style={{ height: '300px', width: '100%' }}>
            <MapContainer
              ref={mapRef}
              center={[location.lat || defaultMapCenter[0], location.lng || defaultMapCenter[1]]}
              zoom={location.lat ? 15 : 4}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
              className="rounded-lg shadow-md"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {location.lat && (
                <Marker position={[location.lat, location.lng]} icon={customMarkerIcon}>
                  <Popup>Your current location</Popup>
                </Marker>
              )}
              <LocationEvents />
            </MapContainer>
          </div>

          <div className="form-group">
            <button
              type="button"
              className="location-button absolute left-40 -bottom-15 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition duration-300 z-10"
              onClick={handleCurrentLocation}
            >
              <FaLocationArrow className="text-lg" />
              Current Location
            </button>
          </div>

          <button
            type="submit"
            className="block w-full bg-green-800 mt-16 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:shadow-outline"
          >
            Submit Report
          </button>
        </form>
        {formSubmitted && <p className="mt-4 text-green-800">Report submitted successfully!</p>}
      </div>
    </div>
  );
};

export default ReportingForm;
