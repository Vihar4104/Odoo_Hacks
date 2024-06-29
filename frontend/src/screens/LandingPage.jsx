import React, { useState, useEffect } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import l1 from '../assets/images/landing1.jpeg';
import l2 from '../assets/images/landing2.jpeg';

const LandingPage = () => {
  // State for managing images and quotes
  const [heroImages] = useState([
    { image: l1, quote: 'Cleanliness is the hallmark of perfect standards and the best quality ambassador.' },
    { image: l2, quote: 'A clean India would be the best tribute India could pay to Mahatma Gandhi on his 150th birth anniversary in 2019.' }
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect for image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col min-h-screen w-full m-1 bg-gray-900">
      {/* Header Section */}
      <div className="w-full">
        <AdminNavbar />
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-24 px-4 text-center h-96">
          <div className="absolute h-full inset-0 bg-cover bg-center z-1 blur-sm" style={{ backgroundImage: `url(${heroImages[currentImageIndex].image})` }}></div>
        </section>
        <div className="container mx-auto max-w-screen-xl relative text-center">
            <h1 className="text-4xl md:text-6xl font-bold mt-8 justify-center text-white pb-5">Transforming Urban Cleanliness</h1>
            <p className="absolute top-16 left-0 right-0 py-4 text-gray-300">{heroImages[currentImageIndex].quote}</p>
          </div>

        {/* Features Section */}
        <section id="features" className="bg-gray-800 mt-10 py-24 px-4 text-center">
          <div className="container mx-auto max-w-screen-xl">
            <h2 className="text-3xl font-bold mb-8 text-white">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-400">User Authentication</h3>
                <p className="text-gray-300">Secure login and signup system for residents, collectors, and administrators.</p>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Reporting System</h3>
                <p className="text-gray-300">Report litter hotspots with photos and geotagged locations.</p>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-400">Task Management</h3>
                <p className="text-gray-300">Assign and track cleanup tasks in real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-gray-900 py-24 px-4 text-center">
          <div className="container mx-auto max-w-screen-xl">
            <h2 className="text-3xl font-bold mb-8 text-white">What People Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <p className="mb-4 text-gray-300">"This platform has transformed how we manage litter in our neighborhood." - John Doe</p>
              </div>
              <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                <p className="mb-4 text-gray-300">"Efficient, intuitive, and effective - exactly what our city needed!" - Jane Smith</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section
        <section id="cta" className="bg-green-700 text-white py-24 px-4 text-center">
          <div className="container mx-auto max-w-screen-xl">
            <h2 className="text-3xl font-bold mb-8">Join the Movement</h2>
            <p className="text-lg mb-8">Together, let's create cleaner, greener cities for a brighter future.</p>
            <a href="#signup" className="bg-white text-green-700 hover:bg-green-500 py-3 px-6 rounded-lg shadow-lg transition duration-300">Get Started</a>
          </div>
        </section> */}
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Garbage Management App. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="mx-2 hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="mx-2 hover:text-gray-300">Terms of Service</a>
            <a href="#" className="mx-2 hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
