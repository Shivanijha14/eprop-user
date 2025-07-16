'use client';

import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa'; // Import the FaHome icon
import { BiUserCircle } from 'react-icons/bi'; // For Login/Signup Icon

export default function HeroHeader({ onSearch }) {
  const [activeTab, setActiveTab] = useState('buy');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');
  const [isScrolled, setIsScrolled] = useState(false); // Track if user has scrolled

  // Detect scroll and update navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = () => {
    onSearch?.(location, propertyType, activeTab);
  };

  return (
    <div>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-semibold">
            <a href="#home" className="hover:text-blue-600">EProperty</a>
          </div>
          <div className="space-x-6 flex items-center">
            <a href="#properties" className="hover:text-blue-600">Properties</a>
            <a href="#queries" className="hover:text-blue-600">Ask Queries</a>
            <a href="#blogs" className="hover:text-blue-600">Blogs</a>
            <a href="#society" className="hover:text-blue-600">Society</a>

            {/* Search Box with Icon */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className={`px-4 py-2 border rounded-md transition-all duration-300 ${
                  isScrolled
                    ? 'border-black text-black placeholder-gray-400' // On scroll, border & text change to black, placeholder stays gray
                    : 'bg-transparent text-white placeholder-white'
                } 
                hover:border-black hover:text-black hover:placeholder-gray-400`} // Hover effects
              />
              <FiSearch className={`absolute top-1/2 transform -translate-y-1/2 right-3 ${isScrolled ? 'text-black' : 'text-white'}`} />
            </div>

            {/* Login/Signup Button */}
            <button className="flex items-center space-x-2">
              <BiUserCircle className="w-6 h-6" />
              <span>Login / Sign Up</span>
            </button>

            {/* Add Your Property Button */}
            <button
              className={`px-4 py-2 border rounded-md transition-all duration-300 ${
                isScrolled
                  ? 'border-black text-black bg-white hover:bg-gray-100' // When scrolled, black border, black text, white background
                  : 'border-white text-white bg-transparent hover:border-black hover:text-black hover:bg-white' // Default transparent background
              }`}
            >
              Add Your Property
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/banner.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
          <div className="bg-white rounded-full flex overflow-hidden shadow-lg mb-6">
            {['Buy', 'Rent', 'Lease'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 text-sm font-semibold ${activeTab === tab.toLowerCase() ? 'bg-blue-600 text-white' : 'text-gray-700'
                  }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white p-4 rounded-xl shadow-lg flex flex-wrap md:flex-nowrap gap-4 items-center w-full max-w-4xl">
            {/* Property Type Dropdown with Icon */}
            <div className="relative w-full md:w-1/3">
              <FaHome className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="px-4 py-2 pl-10 border border-gray-300 rounded-md w-full text-black"
              >
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="house">House</option>
                <option value="plot">Plot</option>
              </select>
            </div>

            {/* Location Input with Search Icon */}
            <div className="relative w-full md:w-2/3">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Type City, Area / Pincode"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-4 py-2 pl-10 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800"
            >
              <FiSearch />
              Search
            </button>
          </div>

          <div className="flex mt-6 gap-4 text-sm text-white font-medium">
            <span className="bg-orange-500 px-3 py-1 rounded-full">🏠 Over 2M properties.</span>
            <span className="bg-gray-700 px-3 py-1 rounded-full">😊 46,789 people happy</span>
            <span className="bg-yellow-500 px-3 py-1 rounded-full">⭐ 4.8 Top rated</span>
          </div>
        </div>
      </div>
    </div>
  );
}
