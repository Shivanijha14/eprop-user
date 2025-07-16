'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function HeroHeader({ onSearch }) {
  const [activeTab, setActiveTab] = useState('buy');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch?.(location, propertyType, activeTab);
  };

  return (
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
              className={`px-6 py-2 text-sm font-semibold ${
                activeTab === tab.toLowerCase() ? 'bg-blue-600 text-white' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab(tab.toLowerCase())}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white p-4 rounded-xl shadow-lg flex flex-wrap md:flex-nowrap gap-4 items-center w-full max-w-4xl">
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/3"
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
            <option value="plot">Plot</option>
          </select>

          <input
            type="text"
            placeholder="Type City, Area / Pincode"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-2/3"
          />

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
          <span className="bg-gray-700 px-3 py-1 rounded-full">😊 46,789 peoples happy</span>
          <span className="bg-yellow-500 px-3 py-1 rounded-full">⭐ 4.8 Top rated</span>
        </div>
      </div>
    </div>
  );
}