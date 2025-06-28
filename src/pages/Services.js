// src/pages/Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    name: 'Electrician',
    description: 'Fan, light, wiring, inverter & switchboard repair',
    image: '/electrician.jpg',
  },
  {
    id: 2,
    name: 'Plumber',
    description: 'Leaking taps, bathroom fittings, pipe cleaning & repair',
    image: '/plumber.jpg',
  },
  {
    id: 3,
    name: 'AC Mechanic',
    description: 'AC servicing, gas refill, and general maintenance',
    image: '/ac.jpg',
  },
  {
    id: 4,
    name: 'Home Cleaning',
    description: 'Deep cleaning for home, kitchen, bathroom & sofa',
    image: '/cleaning.jpg',
  },
];

const Services = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate between pages

  const handleBookNow = (serviceName) => {
    navigate('/book-service', { state: { service: serviceName } }); // ✅ Navigate with state
  };

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Book a Home Service
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-44 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-sm text-gray-700 mb-4">{service.description}</p>
            <button
              onClick={() => handleBookNow(service.name)} // ✅ Trigger navigation
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
