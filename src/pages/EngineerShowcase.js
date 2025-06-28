// src/pages/EngineerShowcase.js
import React from 'react';

const engineers = [
  {
    id: 1,
    name: 'Ar. S. Karthik',
    specialty: 'Residential & Structural Design',
    rating: 4.8,
    location: 'Chennai',
    image: '/engineer1.jpg',
  },
  {
    id: 2,
    name: 'Eng. Priya Sharma',
    specialty: 'Construction Planning & Green Buildings',
    rating: 4.6,
    location: 'Bangalore',
    image: '/engineer2.jpg',
  },
  {
    id: 3,
    name: 'Eng. R. Naveen',
    specialty: 'Site Supervision & RCC Detailing',
    rating: 4.9,
    location: 'Hyderabad',
    image: '/engineer3.jpg',
  },
];

const EngineerShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Featured Civil Engineers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {engineers.map((eng) => (
          <div key={eng.id} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img
              src={eng.image}
              alt={eng.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{eng.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{eng.specialty}</p>
            <p className="text-gray-500 text-sm">{eng.location}</p>
            <p className="text-yellow-500 font-medium mt-2">⭐ {eng.rating} / 5.0</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngineerShowcase;
