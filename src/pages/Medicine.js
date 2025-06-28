// src/pages/Medicine.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const medicines = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    description: 'Used for fever and mild pain relief',
    price: 30,
    image: '/med1.jpg',
  },
  {
    id: 2,
    name: 'Cough Syrup',
    description: 'Relieves dry or wet cough symptoms',
    price: 85,
    image: '/med2.jpg',
  },
  {
    id: 3,
    name: 'Vitamin C Tablets',
    description: 'Boosts immunity and overall health',
    price: 120,
    image: '/med3.jpg',
  },
];

const Medicine = () => {
  const navigate = useNavigate();

  const handleOrder = (item) => {
    // Save the order to localStorage to show in Transaction page
    localStorage.setItem('urbanx-latest-order', JSON.stringify(item));
    navigate('/transaction');
  };

  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Order Medicines Online
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {medicines.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <p className="text-lg font-bold text-green-600 mb-4">₹{item.price}</p>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              onClick={() => handleOrder(item)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicine;
